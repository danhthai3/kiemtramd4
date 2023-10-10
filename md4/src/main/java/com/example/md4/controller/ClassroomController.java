package com.example.md4.controller;

import com.example.md4.model.Classroom;
import com.example.md4.service.IClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@Controller
@CrossOrigin("*")
@RequestMapping("/api/classrooms")
public class ClassroomController {

    @Autowired
    private IClassroomService classroomService;


    @GetMapping
    public ResponseEntity<Iterable<Classroom>> findAllClasses() {
        List<Classroom> classroomList = (List<Classroom>) classroomService.findAll();
        if (classroomList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(classroomList, HttpStatus.OK);
        }
    }
}
