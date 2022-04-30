package com.moviematebackend.moviematebackend.models.responseMoldes;

public class Movie {
    private int id;
    private String title;
    private String description;
    private int duration;
    private int productionYear;
    private double price;
    private String image;
    private int employeeId;

    public Movie ( int id , String title , String description , int duration , int productionYear , double price ,
                   String image , int employeeId ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.productionYear = productionYear;
        this.price = price;
        this.image = image;
        this.employeeId = employeeId;
    }

    public int getEmployeeId () {
        return employeeId;
    }

    public void setEmployeeId ( int employeeId ) {
        this.employeeId = employeeId;
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
}
