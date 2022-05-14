package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping( "/friend" )
public class FriendController {

    @PostMapping
    public Boolean sendFriendShipRequest ( @RequestParam( value = "source" ) int source ,
                                           @RequestParam( value = "target" ) int target ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();


            String statementString = "INSERT INTO Add_Friend( `sender_id`, `receiver_id`, `status` )" +
                    "VALUES " +
                    "(" +
                    "'" + source +
                    "', '" + target +
                    "', '" + 0 +
                    "'); ";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
