package com.example.formchallengeangularjava.user;

import com.example.formchallengeangularjava.core.crud.CrudServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

/**
 * Create by erivelto on 25/12/20
 */
@Service
public class UserServiceImpl extends CrudServiceImpl<Users, Integer> implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    protected JpaRepository<Users, Integer> getRepository() {
        return userRepository;
    }

}
