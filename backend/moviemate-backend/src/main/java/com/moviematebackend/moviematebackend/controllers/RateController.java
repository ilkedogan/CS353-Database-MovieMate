package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/rate" )
public class RateController {

    @PostMapping
    public Boolean rateMovie ( @RequestParam( value = "rate" ) int rate ,
                               @RequestParam( value = "movieId" ) int movieId ,
                               @RequestParam( value = "userId" ) int userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString = "INSERT INTO Rate( `movie_id`, `customer_id`, `point` " +
                    ") " +
                    "VALUES " +
                    "(" +
                    "'" + movieId +
                    "', '" + userId +
                    "', '" + rate +
                    "'); ";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteRate ( @RequestParam( value = "userId" ) int userId ,
                                @RequestParam( value = "movieId" ) int movieId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Rate " +
                    "WHERE customer_id =" + userId + " and movie_id = " + movieId + ";";
            statement.executeUpdate( statementString );
            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
