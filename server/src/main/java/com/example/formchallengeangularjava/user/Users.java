package com.example.formchallengeangularjava.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

/**
 * Create by erivelto on 25/12/20
 */
@Entity
@Data
public class Users implements Serializable {

    @Id
    @SequenceGenerator(name = "UserSeqGen", sequenceName = "UserIdSeq")
    @GeneratedValue(generator = "UserSeqGen")
    private Integer id;

    @Column(name = "name")
    @Size(min=2,max=30,message="O Nome deve conter no minimo 2 e no maximo 30 caracteres.")
    @NotNull(message = "o parâmetro nome não pode ser vazio.")
    private String nome;

    @Column(name = "last_name")
    @Size(min=2,max=50,message="O Sobrenome deve conter no minimo 2 e no maximo 50 caracteres.")
    private String sobrenome;

    @Column(name = "email")
    @NotNull(message = "o parâmetro email não pode ser vazio.")
    @Email
    private String email;

}
