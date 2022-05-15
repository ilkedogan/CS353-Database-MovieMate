package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.Statement;

@CrossOrigin
@RestController
@RequestMapping( "/wallet" )
public class WalletController {

    @PostMapping
    public Boolean addMoneyToWallet ( @RequestParam( value = "customerId" ) int customerId ,
                                      @RequestParam( value = "amount" ) int amount ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();


            String statementString = "UPDATE Wallet " +
                    "SET total_amount = total_amount + '" + amount + "'" +
                    "WHERE customer_id = '" + customerId + "'";

            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
