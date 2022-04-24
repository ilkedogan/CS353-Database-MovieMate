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
            statement.executeUpdate( TableStrings.adminTable );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.employeeTable );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.customerTable );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.wallet );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.membershipType );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.actor );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.genre );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.director );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.movie );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.customerOrder );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.searchHistory );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.requestedMovies );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.addEmployee );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.banCustomer );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.deleteCustomer );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.addFriend );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.hasOrder );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.recommend );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.review );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.rate );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.addWatchlist );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.acts );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.hasGenre );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( TableStrings.directs );

            return true;
        } catch ( Exception e ) {
            System.out.println( e.getMessage() );
            return false;
        }
    }

    public static boolean dropTables(){
        try {

            Statement statement;

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Directs" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Has_Genre" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Acts" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Add_Watch_List" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Rate" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Review" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Recommend" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Has_Order" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Add_Friend" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Delete_Customer" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Ban_Customer" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Add_Employee" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Requested_Movies" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Search_History" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Customer_Order" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Movie" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Director" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Genre" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Actor" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Membership_Type" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Wallet" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Customer" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Employee" );

            statement = getInstance().connection.createStatement();
            statement.executeUpdate( "DROP TABLE IF EXISTS Admin" );

            return true;
        }catch ( Exception e ){
            System.out.println( e.getMessage() );
            return false;
        }
    }
}
