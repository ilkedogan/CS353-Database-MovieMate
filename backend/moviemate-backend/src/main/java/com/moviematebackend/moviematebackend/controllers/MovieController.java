package com.moviematebackend.moviematebackend.controllers;

import com.moviematebackend.moviematebackend.exception.UserServiceException;
import com.moviematebackend.moviematebackend.models.responseMoldes.*;
import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

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


                String actorSelectionQuery = "SELECT * FROM Actor A, Acts AC WHERE AC.movie_id = '" + movieId +
                        "' and A.id = AC.actor_id ";
                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                resultSet = statement.executeQuery( actorSelectionQuery );

                while ( resultSet.next() ) {
                    Actor actor = new Actor( resultSet.getInt( "id" ) , resultSet.getString( "name" ) ,
                            resultSet.getString( "surname" ) , resultSet.getDate( "birth_year" ) );
                    movie.getActors().add( actor );
                }

                String genreSelectionQuery = "SELECT * FROM Genre G, Has_Genre HG WHERE HG.movie_id = '" + movieId +
                        "' and HG.genre_id = G.id ";
                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                resultSet = statement.executeQuery( genreSelectionQuery );

                while ( resultSet.next() ) {
                    Genre genre = new Genre( resultSet.getInt( "id" ) , resultSet.getString( "name" ) );
                    movie.getGenres().add( genre );
                }

                String directorSelectionQuery =
                        "SELECT * FROM Director D, Directs DR WHERE DR.movie_id = '" + movieId +
                                "' and D.id = DR.director_id ";

                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                resultSet = statement.executeQuery( directorSelectionQuery );

                while ( resultSet.next() ) {
                    Actor director = new Actor( resultSet.getInt( "id" ) , resultSet.getString( "name" ) ,
                            resultSet.getString( "surname" ) , resultSet.getDate( "birth_year" ) );
                    movie.getDirectors().add( director );
                }

                String rateSelectionQuery = "SELECT * FROM Rate WHERE movie_id = '" + movieId + "' ";

                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                resultSet = statement.executeQuery( rateSelectionQuery );

                while ( resultSet.next() ) {
                    Rate rate = new Rate( resultSet.getInt( "point" ) );
                    movie.getRates().add( rate );
                }

                String reviewSelectionQuery = "SELECT * FROM Review WHERE movie_id = '" + movieId + "' ";

                statement = DatabaseConnection.getInstance().getConnection().createStatement();
                resultSet = statement.executeQuery( reviewSelectionQuery );

                while ( resultSet.next() ) {
                    Review review = new Review( resultSet.getString( "comment" ) , resultSet.getInt( "movie_id" ) ,
                            resultSet.getInt( "customer_id" )
                    );
                    movie.getReviews().add( review );
                }

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

    @GetMapping( "/home" )
    public List<Movie> getMovies ( @RequestParam( value = "page" ) int page ) {
        try {
            List<Movie> returnList = new ArrayList<>();
            String query = "SELECT * " +
                    "FROM Movie " +
                    "ORDER BY id " +
                    "LIMIT 10 OFFSET " + ( 10 * ( page - 1 ) );

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

            return returnList;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping( "/genre" )
    public Boolean addGenreToMovie ( @RequestParam( value = "movieId" ) int movieId ,
                                     @RequestParam( value = "genreId" ) int genreId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "INSERT INTO Has_Genre( `movie_id`, `genre_id` ) " +
                    "VALUES " +
                    "(" +
                    "'" + movieId +
                    "', '" + genreId +
                    "' );";


            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping( "/genre" )
    public Boolean deleteGenreFromMovie ( @RequestParam( value = "movieId" ) int movieId ,
                                          @RequestParam( value = "genreId" ) int genreId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Has_Genre " +
                    "WHERE movie_id =" + movieId + " and genre_id = " + genreId + ";";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping( "/actor" )
    public Boolean addActorToMovie ( @RequestParam( value = "movieId" ) int movieId ,
                                     @RequestParam( value = "actorId" ) int actorId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "INSERT INTO Acts( `movie_id`, `actor_id` ) " +
                    "VALUES " +
                    "(" +
                    "'" + movieId +
                    "', '" + actorId +
                    "' );";


            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping( "/actor" )
    public Boolean deleteActorFromMovie ( @RequestParam( value = "movieId" ) int movieId ,
                                          @RequestParam( value = "actorId" ) int actorId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Acts " +
                    "WHERE movie_id =" + movieId + " and actor_id = " + actorId + ";";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }

    @PostMapping( "/director" )
    public Boolean addDirectorToMovie ( @RequestParam( value = "movieId" ) int movieId ,
                                        @RequestParam( value = "directorId" ) int directorId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "INSERT INTO Directs( `movie_id`, `director_id` ) " +
                    "VALUES " +
                    "(" +
                    "'" + movieId +
                    "', '" + directorId +
                    "' );";


            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            e.printStackTrace();
            throw new UserServiceException( e.getMessage() );
        }
    }

    @DeleteMapping( "/director" )
    public Boolean deleteDirectorFromMovie ( @RequestParam( value = "movieId" ) int movieId ,
                                             @RequestParam( value = "directorId" ) int directorId ) {
        try {
            Statement statement = DatabaseConnection.getInstance().getConnection().createStatement();
            String statementString = "DELETE FROM Directs " +
                    "WHERE movie_id =" + movieId + " and director_id = " + directorId + ";";
            statement.executeUpdate( statementString );

            return true;
        } catch ( Exception e ) {
            throw new UserServiceException( e.getMessage() );
        }
    }
}
