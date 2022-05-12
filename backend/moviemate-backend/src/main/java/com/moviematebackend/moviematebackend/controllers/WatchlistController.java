package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;

@CrossOrigin
@RestController
@RequestMapping( "/watchlist" )
public class WatchlistController {

    @PostMapping
    public Boolean insertWatchlist ( @RequestParam( value = "movieId" ) int movieId ,
                                     @RequestParam( value = "userId" ) int userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();

            String statementString = "INSERT INTO Add_Watch_List( `movie_id`, `customer_id` " +
                    ") " +
                    "VALUES " +
                    "(" +
                    "'" + movieId +
                    "', '" + userId +
                    "'); ";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteFromWatchlist ( @RequestParam( value = "movieId" ) int movieId ,
                                         @RequestParam( value = "userId" ) int userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Add_Watch_List " +
                    "WHERE customer_id =" + userId + " and movie_id = " + movieId + ";";
            statement.executeUpdate( statementString );
            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
