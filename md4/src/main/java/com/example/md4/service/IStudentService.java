package com.example.md4.service;

import com.example.md4.model.Student;

import java.util.List;

public interface IStudentService extends IGenerateService<Student> {
    List<Student> searchStudent(String name);
}
