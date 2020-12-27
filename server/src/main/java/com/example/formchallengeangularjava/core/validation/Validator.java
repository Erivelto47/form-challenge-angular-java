package com.example.formchallengeangularjava.core.validation;


import com.example.formchallengeangularjava.core.exception.ValidationException;

/**
 * Create by erivelto on 05/02/19
 */
public interface Validator<T> {

    void valida(T o) throws ValidationException;
}
