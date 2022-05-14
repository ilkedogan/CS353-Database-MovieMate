package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.*;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping( "/customer" )
public class CustomerController {


    @GetMapping // http://localhost:8080/customer?email=hacicakin2027@gmail.com
    public Customer selectCustomer ( @RequestParam( value = "email" ) String email ) {

        try {
            String query = "SELECT * FROM Customer WHERE email = '" + email + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Customer customer;
            if ( resultSet.next() ) {
                customer = new Customer( resultSet.getInt( "customer_id" ) ,
                        resultSet.getString( "first_name" ) ,
                        resultSet.getString( "last_name" ) ,
                        resultSet.getString( "email" ) ,
                        resultSet.getString( "password" ) ,
                        resultSet.getString( "account_status" ) );

                String querySearchHistory =
                        "SELECT * FROM Search_History WHERE customer_id = '" + resultSet.getInt( "customer_id" ) + "'";
                resultSet = statement.executeQuery( querySearchHistory );

                SearchHistory searchHistory;
                while ( resultSet.next() ) {
                    searchHistory = new SearchHistory( resultSet.getTimestamp( "search_date" ) ,
                            resultSet.getString( "search_type" ) , resultSet.getString( "search_keyword" ) );
                    customer.getSearchHistory().add( searchHistory );
                }

                return customer;
            } else {
                throw new UserServiceException( "Data is not found!" );
            }
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping // http://localhost:8080/customer?email=hacicakin2021@gmail.com&password=123456&name=Hacı&surname=Çakın
    public Boolean insertCustomer ( @RequestParam( value = "email" ) String email ,
                                    @RequestParam( value = "password" ) String password ,
                                    @RequestParam( value = "name" ) String name ,
                                    @RequestParam( value = "surname" ) String surname ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "INSERT INTO Customer( `email`, `password`, `first_name`, `last_name`, " +
                    "`account_status` ) " +
                    "VALUES " +
                    "(" +
                    "'" + email +
                    "', '" + password +
                    "', '" + name +
                    "', '" + surname +
                    "', 'created' " +
                    ");";

            statement.executeUpdate( statementString );

            statementString = "SELECT * FROM Customer ORDER BY customer_id DESC LIMIT 1 ";
            statement = DatabaseConnection.getInstance().getConnection().createStatement();

            ResultSet resultSet = statement.executeQuery( statementString );
            int userId = 0;
            if ( resultSet.next() ) {

                userId = resultSet.getInt( "customer_id" );
            }


            statementString =
                    "INSERT INTO Wallet( `customer_id`, `wallet_name`, `total_amount`, `payment_max_limit`) " +
                            "VALUES " +
                            "(" +
                            "'" + userId +
                            "', '" + "default" +
                            "', '" + 0 +
                            "', 0 " +
                            ");";
            statement = DatabaseConnection.getInstance().getConnection().createStatement();
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteCustomer ( @RequestParam( value = "userId" ) String userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Customer " +
                    "WHERE customer_id =" + userId + " ;";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping( "/rentedMovies" )
    public List<RentedMovie> getUserMovies ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            List<RentedMovie> returnList = new ArrayList<>();
            String query =
                    "SELECT * FROM Customer_Order C, Has_Order H, Movie M WHERE C.customer_id = '" + customerId + "' " +
                            "and C.id = H.order_id and H.movie_id = M.id";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            RentedMovie movie;
            while ( resultSet.next() ) {
                movie = new RentedMovie( resultSet.getInt( "movie_id" ) , resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) , resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) , resultSet.getInt( "price" ) ,
                        resultSet.getString( "image" ) , resultSet.getInt( "employee_id" ) ,
                        resultSet.getInt( "number_of_days" ) , resultSet.getDate( "date" ) );
                returnList.add( movie );
            }

            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping( "/rentedOldMovies" )
    public List<RentedMovie> getUserOldMovies ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            List<RentedMovie> returnList = new ArrayList<>();

            String query =
                    "SELECT * FROM Customer_Order C, Has_Order H, Movie M WHERE C.customer_id = '" + customerId + "' " +
                            "and C.id = H.order_id and H.movie_id = M.id and NOW() > DATE_ADD(C.date, INTERVAL H" +
                            ".number_of_days DAY)";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            RentedMovie movie;
            while ( resultSet.next() ) {
                movie = new RentedMovie( resultSet.getInt( "movie_id" ) , resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) , resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) , resultSet.getInt( "price" ) ,
                        resultSet.getString( "image" ) , resultSet.getInt( "employee_id" ) ,
                        resultSet.getInt( "number_of_days" ) , resultSet.getDate( "date" ) );
                returnList.add( movie );
            }

            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping( "/rentedActiveMovies" )
    public List<RentedMovie> getUserActiveMovies ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            List<RentedMovie> returnList = new ArrayList<>();

            String query =
                    "SELECT * FROM Customer_Order C, Has_Order H, Movie M WHERE C.customer_id = '" + customerId + "' " +
                            "and C.id = H.order_id and H.movie_id = M.id and NOW() <= DATE_ADD(C.date, INTERVAL H" +
                            ".number_of_days DAY)";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            RentedMovie movie;
            while ( resultSet.next() ) {
                movie = new RentedMovie( resultSet.getInt( "movie_id" ) , resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) , resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) , resultSet.getInt( "price" ) ,
                        resultSet.getString( "image" ) , resultSet.getInt( "employee_id" ) ,
                        resultSet.getInt( "number_of_days" ) , resultSet.getDate( "date" ) );
                returnList.add( movie );
            }

            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping( "/ratedMovies" )
    public List<RatedMovie> getUserRatedMovies ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            List<RatedMovie> returnList = new ArrayList<>();

            String query =
                    "SELECT * FROM Rate R, Movie M WHERE R.customer_id = '" + customerId + "' " +
                            "and M.id = R.movie_id ";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            RatedMovie movie;
            while ( resultSet.next() ) {
                movie = new RatedMovie( resultSet.getInt( "movie_id" ) , resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) , resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) , resultSet.getInt( "price" ) ,
                        resultSet.getString( "image" ) , resultSet.getInt( "employee_id" ) ,
                        resultSet.getInt( "point" ) );
                returnList.add( movie );
            }

            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping( "/reviewedMovies" )
    public List<ReviewedMovie> getUserReviewedMovies ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            List<ReviewedMovie> returnList = new ArrayList<>();

            String query =
                    "SELECT * FROM Review R, Movie M WHERE R.customer_id = '" + customerId + "' " +
                            "and M.id = R.movie_id ";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            ReviewedMovie movie;
            while ( resultSet.next() ) {
                movie = new ReviewedMovie( resultSet.getInt( "movie_id" ) , resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) , resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) , resultSet.getInt( "price" ) ,
                        resultSet.getString( "image" ) , resultSet.getInt( "employee_id" ) ,
                        resultSet.getString( "comment" ) );
                returnList.add( movie );
            }

            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping( "/friends" )
    public List<FriendShip> getUserFriends ( @RequestParam( value = "customerId" ) int customerId ) {
        try {
            List<FriendShip> returnList = new ArrayList<>();
            String query =
                    "( SELECT * FROM Add_Friend A, Customer C, Customer D WHERE ((C.customer_id = A.sender_id and " +
                            "A.receiver_id = D.customer_id and D.customer_id != C.customer_id) or " +
                            "(C.customer_id = A.receiver_id and A.sender_id = D.customer_id and " +
                            "D.customer_id != C.customer_id)) and A.status = 1 and C.customer_id = '"+ customerId +"' )";


            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            FriendShip friendShip;
            while ( resultSet.next() ) {

                friendShip = new FriendShip( resultSet.getInt( "sender_id" ) , resultSet.getString( "C.first_name" ) ,
                        resultSet.getString( "C.last_name" ) , resultSet.getInt( "receiver_id" ) ,
                        resultSet.getString(
                                "D.first_name" ) ,
                        resultSet.getString( "D.last_name" ) , resultSet.getInt( "status" ) );
                returnList.add( friendShip );

            }
            return returnList;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

}
