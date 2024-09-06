package com.company.course_backend.service;

import com.company.course_backend.entity.Courses;
import com.company.course_backend.repository.CoursesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoursesService {

    private final CoursesRepository coursesRepository;

    public CoursesService(CoursesRepository coursesRepository) {
        this.coursesRepository = coursesRepository;
    }

    public Courses save(Courses courses) {
        return coursesRepository.save(courses);
    }

    public List<Courses> getAll() {
        return coursesRepository.findAll();
    }

    public Courses findById(Long id) {
        return coursesRepository.findById(id).get();
    }

    public void deleteById(Long id) {
        coursesRepository.deleteById(id);
    }

    public Courses update(Long id, Courses courses) {
        Courses _courses = coursesRepository.findById(id).get();

        _courses.setTitle(courses.getTitle());

        _courses.setDescription(courses.getDescription());

        Courses updatedCourse = coursesRepository.save(_courses);

        return updatedCourse;
    }
}
