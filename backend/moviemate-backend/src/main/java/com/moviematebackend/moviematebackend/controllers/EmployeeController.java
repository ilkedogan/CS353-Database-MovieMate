package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Actor;
import com.moviematebackend.moviematebackend.models.responseMoldes.Customer;
import com.moviematebackend.moviematebackend.models.responseMoldes.Employee;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping( "/employee" )
public class EmployeeController {

    @GetMapping // http://localhost:8080/employee?email=metehan@gmail.com
    public Employee selectEmployee ( @RequestParam( value = "email" ) String email ) {

        try {
            String query = "SELECT * FROM Employee WHERE email = '" + email + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Employee employee;
            if ( resultSet.next() ) {
                employee = new Employee( resultSet.getInt( "employee_id" ) ,
                        resultSet.getString( "email" ) ,
                        resultSet.getString( "password" ) ,
                        resultSet.getString( "first_name" ) ,
                        resultSet.getString( "last_name" ) ,
                        resultSet.getString( "social_insurance_number" ) );
                return employee;
            } else {
                throw new UserServiceException( "Data is not found!" );
            }
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping  // http://localhost:8080/employee?email=metehan@gmail.com&name=metehan&surname=saçakçı&socialInsuranceNumber=100&adminId=1&password=12345
    public Boolean insertEmployee ( @RequestParam( value = "email" ) String email ,
                                     @RequestParam( value = "password" ) String password ,
                                     @RequestParam( value = "name" ) String name ,
                                     @RequestParam( value = "surname" ) String surname ,
                                     @RequestParam( value = "socialInsuranceNumber" ) String socialInsuranceNo ,
                                     @RequestParam( value = "adminId" ) int adminId ) {
        Employee employee;
        try {
            Statement statement1 = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString1 = "INSERT INTO Employee( `email`, `password`, `first_name`, `last_name`, " +
                    "`social_insurance_number` )" +
                    "VALUES " +
                    "(" +
                    "'" + email +
                    "', '" + password +
                    "', '" + name +
                    "', '" + surname +
                    "', '" + socialInsuranceNo +
                    "'); ";

            statement1.executeUpdate( statementString1 );
            employee = new Employee(0, email , password , name, surname, socialInsuranceNo);

            String query = "SELECT employee_id FROM Employee WHERE email = '" + email + "'";
            Statement statement2 = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement2.executeQuery( query );

            int employeeId;
            if ( resultSet.next() ) {
                employeeId = resultSet.getInt( "employee_id" );
            } else {
                throw new UserServiceException( "Data is not found!" );
            }

            Statement statement3 = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString3 = "INSERT INTO Add_Employee( `admin_id`, `employee_id` )" +
                    "VALUES " +
                    "(" +
                    "'" + adminId +
                    "', '" + employeeId +
                    "'); ";

            statement3.executeUpdate( statementString3 );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }

    }

    @DeleteMapping // http://localhost:8080/employee?employeeId=1
    public Boolean deleteEmployee ( @RequestParam( value = "employeeId" ) int employeeId ) {

        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Employee " +
                    "WHERE employee_id =" + employeeId + " ;";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping("/all")
    public List<Employee> getAllEmployee(){
        try {
            List<Employee> returnList = new ArrayList<>();
            String query = "SELECT * FROM Employee ";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Employee employee;
            while ( resultSet.next() ) {
                employee = new Employee( resultSet.getInt( "employee_id" ) ,
                        resultSet.getString( "email" ) ,
                        resultSet.getString( "password" ) ,
                        resultSet.getString( "first_name" ) ,
                        resultSet.getString( "last_name" ) ,
                        resultSet.getString( "social_insurance_number" ) );
                returnList.add( employee );
            }

            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
