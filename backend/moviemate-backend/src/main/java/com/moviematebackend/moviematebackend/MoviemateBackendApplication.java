package com.moviematebackend.moviematebackend;

import com.moviematebackend.moviematebackend.utils.DatabaseConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MoviemateBackendApplication {

    public static void main ( String[] args ) {
        DatabaseConnection.getInstance().connectDatabase();
        DatabaseConnection.createTables();
        SpringApplication.run( MoviemateBackendApplication.class , args );

    }

}
