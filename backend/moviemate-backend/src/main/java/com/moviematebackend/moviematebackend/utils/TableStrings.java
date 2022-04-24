package com.moviematebackend.moviematebackend.utils;

public class TableStrings {
    public static String userTable = "CREATE TABLE User( " +
            "id INT, " +
            "email VARCHAR(50) NOT NULL, " +
            "password VARCHAR(50) NOT NULL, " +
            "first_name VARCHAR(50) NOT NULL, " +
            "last_name VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY(id), " +
            "CHECK(id > 0) );";
    public static String adminTable = "CREATE TABLE Admin( " +
            "admin_id INT, " +
            "PRIMARY KEY(admin_id), " +
            "FOREIGN KEY(admin_id) REFERENCES User(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";
    public static String employeeTable = "CREATE TABLE Employee( " +
            "employee_id INT, " +
            "social_insurance_number VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY(employee_id), " +
            "FOREIGN KEY(employee_id) REFERENCES User(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");";
    public static String customerTable = "CREATE TABLE Customer( " +
            "customer_id INT, " +
            "account_status VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY (customer_id), " +
            "FOREIGN KEY (customer_id) REFERENCES User(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");";
    public static String wallet = "CREATE TABLE Wallet( " +
            "customer_id INT, " +
            "wallet_name VARCHAR(50), " +
            "total_amount FLOAT(10, 2) NOT NULL, " +
            "payment_max_limit FLOAT(10, 2) NOT NULL, " +
            "PRIMARY KEY(customer_id, wallet_name), " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ")";
    public static String membershipType = "CREATE TABLE Membership_Type( " +
            "customer_id INT, " +
            "type VARCHAR(50) NOT NULL, " +
            "discount_rate INT NOT NULL, " +
            "PRIMARY KEY(customer_id, type), " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "CHECK(discount_rate >= 0) " +
            ");";

    public static String actor = "CREATE TABLE Actor( " +
            "id INT, " +
            "name VARCHAR(50) NOT NULL, " +
            "surname VARCHAR(50) NOT NULL, " +
            "birth_year DATE NOT NULL, " +
            "PRIMARY KEY(id), " +
            "CHECK(id > 0 )" +
            ");"; // todo date constraint
    public static String genre = "CREATE TABLE Genre( " +
            "id INT, " +
            "name VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY(id), " +
            "CHECK(id > 0) " +
            ");";
    public static String director = "CREATE TABLE Director( " +
            "id INT, " +
            "name VARCHAR(50) NOT NULL, " +
            "surname VARCHAR(50) NOT NULL, " +
            "birth_year DATE NOT NULL, " +
            "PRIMARY KEY(id), " +
            "CHECK(id > 0 ) " +
            ");"; // todo date constraint
    public static String movie = "CREATE TABLE Movie( " +
            "id INT, " +
            "title VARCHAR(50) NOT NULL, " +
            "description VARCHAR(500) NOT NULL, " +
            "production_year INT NOT NULL, " +
            "duration INT NOT NULL, " +
            "price FLOAT(10, 2) NOT NULL, " +
            "image VARCHAR(200) NOT NULL, " +
            "employee_id INT NOT NULL, " +
            "PRIMARY KEY(id), " +
            "FOREIGN KEY(employee_id) REFERENCES Employee(employee_id), " +
            "CHECK(id > 0 AND employee_id > 0 AND price > 0) " +
            ");";
    public static String customerOrder = "CREATE TABLE Customer_Order( " +
            "id INT, " +
            "total_amount FLOAT(10, 2) NOT NULL, " +
            "date DATE NOT NULL, " +
            "checkout_type VARCHAR(50) NOT NULL, " +
            "customer_id INT NOT NULL, " +
            "PRIMARY KEY(id), " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "CHECK(id > 0) " +
            "); ";
    public static String searchHistory = "CREATE TABLE Search_History( " +
            "customer_id INT, " +
            "search_date DATE NOT NULL, " +
            "search_type VARCHAR(50) NOT NULL, " +
            "search_keyword VARCHAR(100) NOT NULL, " +
            "PRIMARY KEY (customer_id, search_date), " +
            "FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";
    public static String requestedMovies = "CREATE TABLE Requested_Movies( " +
            "id INT, " +
            "movie_name VARCHAR(50) NOT NULL, " +
            "movie_director VARCHAR(50) NOT NULL, " +
            "request_date DATE, " +
            "request_status VARCHAR(50) DEFAULT 'pending', " +
            "customer_id INT, " +
            "PRIMARY KEY(id), " +
            "FOREIGN KEY(customer_id) References Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "CHECK(id > 0) " +
            "); ";
    public static String addEmployee = "";
    public static String absentMovieRequest = "";
    public static String banCustomer = "";
    public static String deleteCustomer = "";
    public static String addFriend = "";
    public static String makeOrder = "";
    public static String hasOrder = "";
    public static String recommend = "";
    public static String review = "";
    public static String rate = "";
    public static String addWatchlist = "";
    public static String has = "";
    public static String register = "";
    public static String acts = "";
    public static String hasGenre = "";
    public static String directs = "";
}
