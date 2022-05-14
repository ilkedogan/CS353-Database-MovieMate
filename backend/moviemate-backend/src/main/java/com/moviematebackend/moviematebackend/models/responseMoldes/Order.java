package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Order {
    private int id;
    private int totalAmount;
    private Date date;
    private String checkoutType;
    private int customerId;
    private List<Movie> movies;

    public Order ( int id , int totalAmount , Date date , String checkoutType , int customerId ) {
        this.id = id;
        this.totalAmount = totalAmount;
        this.date = date;
        this.checkoutType = checkoutType;
        this.customerId = customerId;
        this.movies = new ArrayList<>();
    }

    public int getId () {
        return id;
    }

    public void setId ( int id ) {
        this.id = id;
    }

    public int getTotalAmount () {
        return totalAmount;
    }

    public void setTotalAmount ( int totalAmount ) {
        this.totalAmount = totalAmount;
    }

    public Date getDate () {
        return date;
    }

    public void setDate ( Date date ) {
        this.date = date;
    }

    public String getCheckoutType () {
        return checkoutType;
    }

    public void setCheckoutType ( String checkoutType ) {
        this.checkoutType = checkoutType;
    }

    public int getCustomerId () {
        return customerId;
    }

    public void setCustomerId ( int customerId ) {
        this.customerId = customerId;
    }

    public List<Movie> getMovies () {
        return movies;
    }

    public void setMovies ( List<Movie> movies ) {
        this.movies = movies;
    }
}
