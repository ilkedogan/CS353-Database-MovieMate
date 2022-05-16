package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Customer;
import com.moviematebackend.moviematebackend.models.responseMoldes.Employee;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/banCustomer" )
public class BanCustomer {

    @PostMapping
    public Boolean insertToBanCustomer ( @RequestParam( value = "customerId" ) int customerId ,
                                         @RequestParam( value = "employeeId" ) int employeeId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            java.sql.Date date = new java.sql.Date( new Date().getTime() );

            String statementString = "INSERT INTO Ban_Customer( `employee_id`, `customer_id`, `date` " +
                    ") " +
                    "VALUES " +
                    "(" +
                    "'" + employeeId +
                    "', '" + customerId +
                    "', '" + date +
                    "'); ";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping("/email")
    public Boolean insertToBanCustomerWithEmail ( @RequestParam( value = "customerEmail" ) String email ,
                                         @RequestParam( value = "employeeId" ) int employeeId ) {
        try {
            java.sql.Date date = new java.sql.Date( new Date().getTime() );
            String query = "SELECT * FROM Customer WHERE email = '" + email + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            if ( resultSet.next() ) {
                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                String statementString = "INSERT INTO Ban_Customer( `employee_id`, `customer_id`, `date` " +
                        ") " +
                        "VALUES " +
                        "(" +
                        "'" + employeeId +
                        "', '" + resultSet.getInt( "customer_id" ) +
                        "', '" + date +
                        "'); ";

                statement.executeUpdate( statementString );

                return true;
            } else {
                throw new UserServiceException( "User is not found!" );
            }


        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteFromBanCustomer ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Ban_Customer " +
                    "WHERE customer_id =" + customerId + ";";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping
    public Boolean checkUserBanned ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            String query = "SELECT * FROM Ban_Customer WHERE customer_id = '" + customerId + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            if ( resultSet.next() ) {
                return true;
            } else {
                return false;
            }

        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }


}
