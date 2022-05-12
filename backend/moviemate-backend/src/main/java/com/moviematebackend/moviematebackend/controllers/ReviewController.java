package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;

@CrossOrigin
@RestController
@RequestMapping( "/review" )
public class ReviewController {

    @PostMapping
    public Boolean reviewMovie ( @RequestParam( value = "review" ) String review ,
                                 @RequestParam( value = "movieId" ) int movieId ,
                                 @RequestParam( value = "userId" ) int userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString = "INSERT INTO Review( `movie_id`, `customer_id`, `comment` " +
                    ") " +
                    "VALUES " +
                    "(" +
                    "'" + movieId +
                    "', '" + userId +
                    "', '" + review +
                    "'); ";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteReview ( @RequestParam( value = "userId" ) int userId ,
                                  @RequestParam( value = "movieId" ) int movieId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Review " +
                    "WHERE customer_id =" + userId + " and movie_id = " + movieId + ";";
            statement.executeUpdate( statementString );
            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
