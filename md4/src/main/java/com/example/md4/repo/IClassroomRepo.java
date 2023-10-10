package com.example.md4.repo;

import com.example.md4.model.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClassroomRepo extends JpaRepository<Classroom, Long> {
}
