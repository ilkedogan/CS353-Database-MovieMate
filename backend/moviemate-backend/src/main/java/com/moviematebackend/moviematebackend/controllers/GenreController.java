package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Actor;
import com.moviematebackend.moviematebackend.models.responseMoldes.Genre;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/genre" )
public class GenreController {

    @PostMapping
    public Genre createGenre ( @RequestParam( value = "name" ) String name ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            Genre genre;
            String statementString = "INSERT INTO Genre( `name` ) " +
                    "VALUES " +
                    "(" +
                    "'" + name +
                    "'); ";


            int returnValue = statement.executeUpdate( statementString );
            genre = new Genre( 0 , name );

            return genre;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteGenre ( @RequestParam( value = "genreId" ) int genreId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Genre " +
                    "WHERE id =" + genreId + " ;";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }
}
