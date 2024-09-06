package com.company.course_backend.controller;

import com.company.course_backend.entity.Courses;
import com.company.course_backend.service.CoursesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/course")
public class CoursesController {
    private final CoursesService coursesService;

    public CoursesController(CoursesService coursesService) {
        this.coursesService = coursesService;
    }

    @PostMapping()
    public ResponseEntity<Courses> createCourse(@RequestBody Courses courses) {
        return ResponseEntity.ok(coursesService.save(courses));
    }

    @GetMapping()
    public ResponseEntity<List<Courses>> getAllCourses() {
        List<Courses> courses = coursesService.getAll();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Courses> getCourseById(@PathVariable Long id) {
        Courses courses = coursesService.findById(id);
        return ResponseEntity.ok(courses);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        coursesService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Courses> updateCourse(@PathVariable Long id, @RequestBody Courses courses) {
        Courses _courses = coursesService.update(id, courses);
        return ResponseEntity.ok(_courses);
    }
}
