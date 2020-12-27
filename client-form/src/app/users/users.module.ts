import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { UsersListComponent } from './users-list/users-list.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
/**
 * Created by erivelto on 26/12/20
 */

@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    ToastModule,
    TableModule,
    HttpClientModule
  ]
})
export class UsersModule { }
