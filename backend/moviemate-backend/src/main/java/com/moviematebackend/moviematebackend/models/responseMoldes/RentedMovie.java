package com.moviematebackend.moviematebackend.models.responseMoldes;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RentedMovie {
    private int id;
    private String title;
    private String description;
    private int duration;
    private int productionYear;
    private double price;
    private String image;
    private int employeeId;
    private int day;
    private Date rentDate;
    private List<Actor> actors;
    private List<Actor> directors;
    private List<Genre> genres;
    private List<Rate> rates;
    private List<Review> reviews;

    public RentedMovie ( int id , String title , String description , int duration , int productionYear , double price ,
                         String image , int employeeId , int day , Date rentDate ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.productionYear = productionYear;
        this.price = price;
        this.image = image;
        this.employeeId = employeeId;
        this.day = day;
        this.rentDate = rentDate;
        this.actors = new ArrayList<>();
        this.directors = new ArrayList<>();
        this.genres = new ArrayList<>();
        this.rates = new ArrayList<>();
        this.reviews = new ArrayList<>();
    }

    public int getId () {
        return id;
    }

    public void setId ( int id ) {
        this.id = id;
    }

    public String getTitle () {
        return title;
    }

    public void setTitle ( String title ) {
        this.title = title;
    }

    public String getDescription () {
        return description;
    }

    public void setDescription ( String description ) {
        this.description = description;
    }

    public int getDuration () {
        return duration;
    }

    public void setDuration ( int duration ) {
        this.duration = duration;
    }

    public int getProductionYear () {
        return productionYear;
    }

    public void setProductionYear ( int productionYear ) {
        this.productionYear = productionYear;
    }

    public double getPrice () {
        return price;
    }

    public void setPrice ( double price ) {
        this.price = price;
    }

    public String getImage () {
        return image;
    }

    public void setImage ( String image ) {
        this.image = image;
    }

    public int getEmployeeId () {
        return employeeId;
    }

    public void setEmployeeId ( int employeeId ) {
        this.employeeId = employeeId;
    }

    public int getDay () {
        return day;
    }

    public void setDay ( int day ) {
        this.day = day;
    }

    public Date getRentDate () {
        return rentDate;
    }

    public void setRentDate ( Date rentDate ) {
        this.rentDate = rentDate;
    }

    public List<Actor> getActors () {
        return actors;
    }

    public void setActors ( List<Actor> actors ) {
        this.actors = actors;
    }

    public List<Actor> getDirectors () {
        return directors;
    }

    public void setDirectors ( List<Actor> directors ) {
        this.directors = directors;
    }

    public List<Genre> getGenres () {
        return genres;
    }

    public void setGenres ( List<Genre> genres ) {
        this.genres = genres;
    }

    public List<Rate> getRates () {
        return rates;
    }

    public void setRates ( List<Rate> rates ) {
        this.rates = rates;
    }

    public List<Review> getReviews () {
        return reviews;
    }

    public void setReviews ( List<Review> reviews ) {
        this.reviews = reviews;
    }
}
