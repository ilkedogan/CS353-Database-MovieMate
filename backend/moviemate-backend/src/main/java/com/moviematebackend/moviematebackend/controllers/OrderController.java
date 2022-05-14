package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Order;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping( "/order" )
public class OrderController {

    @PostMapping
    public Boolean createOrder ( @RequestParam( value = "amount" ) int amount ,
                                 @RequestParam( value = "checkout" ) String checkout ,
                                 @RequestParam( value = "customerId" ) int customerId ,
                                 @RequestParam( value = "movies" ) List<Integer> movies ) {
        try {
            Statement statement;
            java.sql.Date date = new java.sql.Date( new Date().getTime() );

            if ( checkout.equals( "wallet" ) ) {
                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                String query = "SELECT * FROM Wallet WHERE customer_id = '" + customerId + "'";
                ResultSet resultSet = statement.executeQuery( query );
                if ( resultSet.next() ) {
                    double totalAmount = resultSet.getFloat( "total_amount" );
                    double priceLimit = resultSet.getFloat( "payment_max_limit" );

                    if ( priceLimit < amount ) {
                        throw new UserServiceException( "Increase wallet pay limit!" );
                    } else if ( totalAmount < amount ) {
                        throw new UserServiceException( "Increase wallet budget!" );
                    } else{
                        statement = DatabaseConnection.getInstance().getConnection().createStatement();

                        String statementString = "UPDATE Wallet " +
                                "SET total_amount = '" + (totalAmount - amount) + "'" +
                                "WHERE customer_id = '" + customerId + "'";

                        statement.executeUpdate( statementString );
                    }
                } else {
                    throw new UserServiceException( "Wallet can not be found!" );
                }
            }


            statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "INSERT INTO Customer_Order( `total_amount`, `date`, `checkout_type`, " +
                    "`customer_id` " +
                    ") " +
                    "VALUES " +
                    "(" +
                    "'" + amount +
                    "', '" + date +
                    "', '" + checkout +
                    "', '" + customerId +
                    "'); ";

            statement.executeUpdate( statementString );
            String query = "SELECT * FROM Customer_Order WHERE customer_id = '" + customerId + "'";
            statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            int orderId = 0;
            while ( resultSet.next() ) {
                orderId = resultSet.getInt( "id" );
            }

            for ( int movie : movies ) {
                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                statementString = "INSERT INTO Has_Order( `order_id`, `movie_id`, `number_of_days` " +
                        ") " +
                        "VALUES " +
                        "(" +
                        "'" + orderId +
                        "', '" + movie +
                        "', '" + 7 +
                        "'); ";

                statement.executeUpdate( statementString );
            }

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }
}
