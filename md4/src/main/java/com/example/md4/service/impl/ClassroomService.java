package com.example.md4.service.impl;

import com.example.md4.model.Classroom;
import com.example.md4.repo.IClassroomRepo;
import com.example.md4.service.IClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClassroomService implements IClassroomService {
    @Autowired
    private IClassroomRepo classroomRepo;

    @Override
    public Iterable<Classroom> findAll() {
        return classroomRepo.findAll();
    }

    @Override
    public Optional<Classroom> findById(Long id) {
        return classroomRepo.findById(id);
    }

    @Override
    public Classroom save(Classroom classroom) {
        return classroomRepo.save(classroom);
    }

    @Override
    public void delete(Long id) {
        classroomRepo.deleteById(id);
    }
}
