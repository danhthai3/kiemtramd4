package com.example.md4.service;


import java.util.Optional;

public interface IGenerateService<E> {
    Iterable<E> findAll();

    Optional<E> findById(Long id);

    E save(E e);

    void delete(Long id);
}
