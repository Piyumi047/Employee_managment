package com.dulanjali.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dulanjali.backend.model.Employee;
import com.dulanjali.backend.repository.Employee_repository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	
	@Autowired
	private Employee_repository employee_repository;
	
	//view all employees
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployees(){
		return employee_repository.findAll();
	}
}
