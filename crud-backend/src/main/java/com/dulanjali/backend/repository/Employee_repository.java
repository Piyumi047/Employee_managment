package com.dulanjali.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dulanjali.backend.model.Employee;


@Repository
public interface Employee_repository extends JpaRepository<Employee, Long>{
		
	
	
}
