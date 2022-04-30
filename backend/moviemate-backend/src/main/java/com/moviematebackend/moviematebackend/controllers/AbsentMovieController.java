package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.AbsentMovie;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/absentMovie" )
public class AbsentMovieController {

    @PostMapping  // http://localhost:8080/absentMovie?name=hacı&surname=çakın
    public Boolean insertAbsentMovie ( @RequestParam( value = "title" ) String title ,
                                           @RequestParam( value = "director" ) String director ,
                                           @RequestParam( value = "customerId" ) String customerId) {

        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            java.sql.Date date = new java.sql.Date( new Date().getTime());

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
/*
    @PostMapping("/changeStatus") // http://localhost:8080/absentMovie/changeStatus?requestId=1
    public
*/

}
