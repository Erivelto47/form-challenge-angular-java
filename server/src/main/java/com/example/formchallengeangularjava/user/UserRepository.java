package com.example.formchallengeangularjava.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by erivelto on 25/12/20
 */
@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
}
