package com.moviematebackend.moviematebackend.models.responseMoldes;

public class Review {
    private String comment;
    private int movieId;
    private int customerId;

    public Review ( String comment , int movieId , int customerId ) {
        this.comment = comment;
        this.movieId = movieId;
        this.customerId = customerId;
    }

    public String getComment () {
        return comment;
    }

    public void setComment ( String comment ) {
        this.comment = comment;
    }

    public int getMovieId () {
        return movieId;
    }

    public void setMovieId ( int movieId ) {
        this.movieId = movieId;
    }

    public int getCustomerId () {
        return customerId;
    }

    public void setCustomerId ( int customerId ) {
        this.customerId = customerId;
    }
}
