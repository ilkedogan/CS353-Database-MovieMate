package com.moviematebackend.moviematebackend.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConnection {

    //properties
    public static final String DB_NAME = "moviemate_db";
    public static final String CONNECTION_STRING = "jdbc:mysql://localhost:3306/" + DB_NAME;
    public static final String userName = "root";
    public static final String password = "afatsum123";
    private static DatabaseConnection instance = new DatabaseConnection();
    private Connection connection;


    //constructor

    /**
     * it is a DatabaseConnection constructor
     */
    private DatabaseConnection () {
    }

    //methods

    /**
     * it is a connectDatabase method that get connection between database and program
     * @return result as a boolean
     */
    public boolean connectDatabase () {
        try {
            connection = DriverManager.getConnection( CONNECTION_STRING , userName , password );
            return true;
        } catch ( SQLException e ) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * it is a closeConnectionDatabase method that close the connection
     */
    public void closeConnectionDatabase () {
        try {
            if ( connection != null ) {
                connection.close();
            }
        } catch ( SQLException e ) {
            e.printStackTrace();
        }
    }

    /**
     * it is a Connection method that provide the connection
     * @return connection as a Connection
     */
    public Connection getConnection () {
        return connection;
    }

    /**
     * it is a getInstance method that access to DatabaseConnection class
     * @return instance as a DatabaseConnection
     */
    public static DatabaseConnection getInstance () {
        return instance;
    }


    public static Boolean createTables () {
        try {
            Statement statement;
            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.userTable );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.adminTable );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.employeeTable );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.customerTable );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.wallet );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.membershipType );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.actor );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.genre );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.director );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.movie );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.customerOrder );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.searchHistory );

            statement = getInstance().connection.createStatement();
            //statement.executeUpdate( TableStrings.requestedMovies );


            return true;
        } catch ( Exception e ) {
            System.out.println( e.getMessage() );
            return false;
        }
    }
}
