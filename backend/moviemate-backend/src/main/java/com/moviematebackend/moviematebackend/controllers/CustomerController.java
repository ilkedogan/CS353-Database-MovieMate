package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Customer;
import com.moviematebackend.moviematebackend.models.responseMoldes.SearchHistory;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;

@CrossOrigin
@RestController
@RequestMapping( "/customer" )
public class CustomerController {


    @GetMapping // http://localhost:8080/customer?email=hacicakin2027@gmail.com
    public Customer selectCustomer ( @RequestParam( value = "email" ) String email ) {

        try {
            String query = "SELECT * FROM Customer WHERE email = '" + email + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Customer customer;
            if ( resultSet.next() ) {
                customer = new Customer( resultSet.getInt( "customer_id" ) ,
                        resultSet.getString( "first_name" ) ,
                        resultSet.getString( "last_name" ) ,
                        resultSet.getString( "email" ) ,
                        resultSet.getString( "password" ) ,
                        resultSet.getString( "account_status" ) );

                String querySearchHistory = "SELECT * FROM Search_History WHERE customer_id = '" + resultSet.getInt( "customer_id" ) + "'";
                resultSet = statement.executeQuery( querySearchHistory );

                SearchHistory searchHistory;
                while ( resultSet.next() ){
                    searchHistory = new SearchHistory( resultSet.getTimestamp( "search_date" ),
                            resultSet.getString( "search_type" ), resultSet.getString( "search_keyword" ) );
                    customer.getSearchHistory().add( searchHistory );
                }

                return customer;
            } else {
                throw new UserServiceException( "Data is not found!" );
            }
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping // http://localhost:8080/customer?email=hacicakin2021@gmail.com&password=123456&name=Hacı&surname=Çakın
    public Boolean insertCustomer ( @RequestParam( value = "email" ) String email ,
                                    @RequestParam( value = "password" ) String password ,
                                    @RequestParam( value = "name" ) String name ,
                                    @RequestParam( value = "surname" ) String surname ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString = "INSERT INTO Customer( `email`, `password`, `first_name`, `last_name`, " +
                    "`account_status` ) " +
                    "VALUES " +
                    "(" +
                    "'" + email +
                    "', '" + password +
                    "', '" + name +
                    "', '" + surname +
                    "', 'created' " +
                    ");";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteCustomer ( @RequestParam( value = "userId" ) String userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Customer " +
                    "WHERE customer_id =" + userId + " ;";
            statement.executeUpdate( statementString );

            return true;
        }catch ( Exception e ){
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }
}
