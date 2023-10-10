package com.example.md4.service.impl;

import com.example.md4.model.Student;
import com.example.md4.repo.IStudentRepo;
import com.example.md4.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService{
    @Autowired
    private IStudentRepo studentRepo;


    @Override
    public Iterable<Student> findAll() {
        return studentRepo.findAll();
    }

    @Override
    public Optional<Student> findById(Long id) {
        return studentRepo.findById(id);
    }

    @Override
    public Student save(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public void delete(Long id) {
        studentRepo.deleteById(id);
    }

    @Override
    public List<Student> searchStudent(String name) {
        return studentRepo.searchStudent(name);
    }
}
