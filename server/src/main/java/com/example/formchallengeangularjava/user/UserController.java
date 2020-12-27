package com.example.formchallengeangularjava.user;

import com.example.formchallengeangularjava.core.crud.CrudController;
import com.example.formchallengeangularjava.core.crud.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Create by erivelto on 25/12/20
 */
@RestController
@RequestMapping("user")
public class UserController extends CrudController<Users, Integer> {

    @Autowired
    private UserService userService;

    @Override
    public CrudService<Users, Integer> getService() {
        return userService;
    }
}
