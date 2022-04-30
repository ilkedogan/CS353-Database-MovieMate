package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Customer;
import com.moviematebackend.moviematebackend.models.responseMoldes.Genre;
import com.moviematebackend.moviematebackend.models.responseMoldes.Movie;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;

@CrossOrigin
@RestController
@RequestMapping( "/movie" )
public class MovieController {

    @PostMapping
    public Movie insertMovie ( @RequestParam( value = "title" ) String title ,
                               @RequestParam( value = "description" ) String description ,
                               @RequestParam( value = "duration" ) int duration ,
                               @RequestParam( value = "productionYear" ) int productionYear ,
                               @RequestParam( value = "price" ) double price ,
                               @RequestParam( value = "image" ) String image ,
                               @RequestParam( value = "employeeId" ) int employeeId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            Movie movie;
            String statementString = "INSERT INTO Movie( `title`, `description`, `production_year`, `duration`, " +
                    "`price`, `image`, `employee_id` ) " +
                    "VALUES " +
                    "(" +
                    "'" + title +
                    "', '" + description +
                    "', '" + productionYear +
                    "', '" + duration +
                    "', '" + price +
                    "', '" + image +
                    "', '" + employeeId +
                    "' );";


            statement.executeUpdate( statementString );
            movie = new Movie( 0 , title , description , duration , productionYear , price , image , employeeId );

            return movie;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @GetMapping
    public Movie selectMovie ( @RequestParam( value = "movieId" ) int movieId ) {
        try {
            String query = "SELECT * FROM Movie WHERE id = '" + movieId + "'";
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Movie movie;
            if ( resultSet.next() ) {
                movie = new Movie( resultSet.getInt( "id" ) ,
                        resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) ,
                        resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) ,
                        resultSet.getFloat( "price" ) ,
                        resultSet.getString( "image" ) ,
                        resultSet.getInt( "employee_id" ) );
                // todo to be continue
                return movie;
            } else {
                throw new UserServiceException( "Data is not found!" );
            }
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteMovie ( @RequestParam( value = "movieId" ) int movieId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Movie " +
                    "WHERE id =" + movieId + " ;";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }
}
