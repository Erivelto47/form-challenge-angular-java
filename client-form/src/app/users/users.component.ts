import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsersService } from './users.service';
import { User } from './user';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Created by erivelto on 26/12/20
 */

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
})
export class UsersComponent implements OnInit {

  formUser: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private usersService: UsersService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params.id) {
        const id = params.id;
        this.findUserById(id).toPromise().then(user => this.createForm(user));
      } else{
        this.createForm(new User());
      }
    });
  }

  createForm(user: User): void {
    this.formUser = this.formBuilder.group({
      nome: [user.nome, [Validators.required, Validators.minLength(2)]],
      sobrenome: [user.sobrenome, [Validators.required, Validators.minLength(2)]],
      email: [user.email, [Validators.required, Validators.email]],
      id: [user.id]
    });
  }

  successMessage(nome: string): void {
    this.messageService.add({ severity: 'success', summary: 'Form Enviado', detail: 'Usuário ' + nome + ' criado com sucesso!!' });
  }

  errorMessage(): void {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Os dados não foram Salvos' });
  }


  onSubmit(): void {
    const user: User = this.formUser.value;
    this.usersService.createUser(user)
      .toPromise()
      .then(result => {
        this.successMessage(result.nome);
        this.formUser.reset();
      })
      .catch(reason => {
        this.errorMessage();
        console.log(reason);
      });
  }

  findUserById(id: number): Observable<User> {
    return this.usersService.findUserById(id);
  }

}
