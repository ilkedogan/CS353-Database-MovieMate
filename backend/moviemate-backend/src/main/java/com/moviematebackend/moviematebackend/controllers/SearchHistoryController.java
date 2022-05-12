package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.Movie;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping( "/searchHistory" )
public class SearchHistoryController {

    @PostMapping
    public List<Movie> searchMoviesBasic ( @RequestParam( value = "keyword" ) String keyword ,
                                           @RequestParam( value = "userId" ) int userId ) {
        try {
            List<Movie> returnList = new ArrayList<>();
            String query = "SELECT * " +
                    "FROM Movie " +
                    "WHERE title LIKE '%" + keyword + "%' ";

            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            ResultSet resultSet = statement.executeQuery( query );
            Movie movie;

            while ( resultSet.next() ) {
                movie = new Movie( resultSet.getInt( "id" ) ,
                        resultSet.getString( "title" ) ,
                        resultSet.getString( "description" ) ,
                        resultSet.getInt( "duration" ) ,
                        resultSet.getInt( "production_year" ) ,
                        resultSet.getFloat( "price" ) ,
                        resultSet.getString( "image" ) ,
                        resultSet.getInt( "employee_id" ) );
                returnList.add( movie );
            }
            addToSearchHistory( keyword , userId , "movie" );

            return returnList;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping
    public Boolean deleteHistory ( @RequestParam( value = "userId" ) String userId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Search_History " +
                    "WHERE customer_id =" + userId + " ;";
            statement.executeUpdate( statementString );

            return true;
        }catch ( Exception e ){
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    void addToSearchHistory ( String keyword , int userId , String searchType ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            java.sql.Timestamp date = new java.sql.Timestamp( new Date().getTime() );

            String statementString = "INSERT INTO Search_History( `customer_id`, `search_date`, `search_type`, " +
                    "`search_keyword`  ) " +
                    "VALUES " +
                    "(" +
                    "'" + userId +
                    "', '" + date +
                    "', '" + searchType +
                    "', '" + keyword +
                    "' );";


            statement.executeUpdate( statementString );
        } catch ( Exception e ) {
            System.out.println( e.getMessage() );
        }
    }
}
