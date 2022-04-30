package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Actor;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/director" )
public class DirectorController {

    @PostMapping  // http://localhost:8080/director?name=hacı&surname=çakın
    public Actor createDirector ( @RequestParam( value = "name" ) String name ,
                               @RequestParam( value = "surname" ) String surname ,
                               @RequestParam( value = "birth" ) String birth ) {
        Actor director;
        SimpleDateFormat formatter = new SimpleDateFormat( "yyyy-MM-dd" );
        try {
            Date newDate = formatter.parse( birth );
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            java.sql.Date date = new java.sql.Date( newDate.getTime() );

            String statementString = "INSERT INTO Director( `name`, `surname`, `birth_year` ) " +
                    "VALUES " +
                    "(" +
                    "'" + name +
                    "', '" + surname +
                    "', '" + date +
                    "'); ";


            statement.executeUpdate( statementString );
            director = new Actor(0, name , surname , newDate );

            return director;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteDirector ( @RequestParam( value = "directorId" ) int directorId ) {

        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Director " +
                    "WHERE id =" + directorId + " ;";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }
}
