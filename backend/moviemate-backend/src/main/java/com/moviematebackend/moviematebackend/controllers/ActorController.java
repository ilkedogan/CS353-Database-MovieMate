package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.models.responseMoldes.Actor;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/actor" )
public class ActorController {  // http://localhost:8080/actor

    @PostMapping  // http://localhost:8080/actor?name=hacı&surname=çakın
    public Actor insertActor ( @RequestParam( value = "name" ) String name ,
                               @RequestParam( value = "surname" ) String surname ,
                               @RequestParam( value = "birth" ) String birth ) {
        Actor actor;
        SimpleDateFormat formatter = new SimpleDateFormat( "yyyy-MM-dd" );
        try {
            Date newDate = formatter.parse( birth );
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            java.sql.Date date = new java.sql.Date( newDate.getTime() );

            String statementString = "INSERT INTO Actor( `name`, `surname`, `birth_year` ) " +
                    "VALUES " +
                    "(" +
                    "'" + name +
                    "', '" + surname +
                    "', '" + date +
                    "'); ";


            statement.executeUpdate( statementString );
            actor = new Actor( 0,name , surname , newDate );

            return actor;
        } catch ( Exception e ) {
            e.printStackTrace();
            return null;
        }
    }

    @DeleteMapping
    public Boolean deleteActor ( @RequestParam( value = "actorId" ) int actorId ) {

        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Actor " +
                    "WHERE id =" + actorId + " ;";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            return false;
        }
    }
}
