package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.AbsentMovie;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping( "/absentMovie" )
public class AbsentMovieController {

    @PostMapping  // http://localhost:8080/absentMovie?name=hacı&surname=çakın
    public Boolean insertAbsentMovie ( @RequestParam( value = "title" ) String title ,
                                       @RequestParam( value = "director" ) String director ,
                                       @RequestParam( value = "customerId" ) String customerId ) {

        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            java.sql.Date date = new java.sql.Date( new Date().getTime() );

            String statementString = "INSERT INTO Requested_Movies( `movie_name`, `movie_director`, `request_date`, " +
                    "`request_status`, `customer_id` " +
                    ") " +
                    "VALUES " +
                    "(" +
                    "'" + title +
                    "', '" + director +
                    "', '" + date +
                    "', '" + "active" +
                    "', '" + customerId +
                    "'); ";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping( "/changeStatus" ) // http://localhost:8080/absentMovie/changeStatus?requestId=1
    public Boolean changeStatus ( @RequestParam( value = "newStatus" ) String newStatus ,
                                  @RequestParam( value = "id" ) int requestId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();


            String statementString = "UPDATE Requested_Movies " +
                    "SET request_status = '" + newStatus + "'" +
                    "WHERE id = '" + requestId + "'";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping
    public List<AbsentMovie> getAbsentMovies ( @RequestParam( value = "page" ) int page ) {
        try {
            List<AbsentMovie> returnList = new ArrayList<>();
            String query = "SELECT * " +
                    "FROM Requested_Movies " +
                    "ORDER BY id " +
                    "LIMIT 10 OFFSET " + ( 10 * ( page - 1 ) );

            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            AbsentMovie absentMovie;
            while ( resultSet.next() ) {
                absentMovie = new AbsentMovie( resultSet.getInt( "id" ) , resultSet.getString( "movie_name" ) ,
                        resultSet.getString( "movie_director" ) , resultSet.getString( "request_status" ) ,
                        resultSet.getDate( "request_date" ) );
                returnList.add( absentMovie );
            }

            return returnList;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }
}
