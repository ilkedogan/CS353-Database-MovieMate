package com.moviematebackend.moviematebackend.utils;

public class TableStrings {


    public static String adminTable = "CREATE TABLE Admin( " +
            "admin_id INT AUTO_INCREMENT, " +
            "email VARCHAR(50) NOT NULL UNIQUE, " +
            "password VARCHAR(50) NOT NULL, " +
            "first_name VARCHAR(50) NOT NULL, " +
            "last_name VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY(admin_id)  " +
            "); ";

    public static String employeeTable = "CREATE TABLE Employee( " +
            "employee_id INT AUTO_INCREMENT, " +
            "email VARCHAR(50) NOT NULL UNIQUE, " +
            "password VARCHAR(50) NOT NULL, " +
            "first_name VARCHAR(50) NOT NULL, " +
            "last_name VARCHAR(50) NOT NULL, " +
            "social_insurance_number VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY(employee_id) " +
            ");";

    public static String customerTable = "CREATE TABLE Customer( " +
            "customer_id INT AUTO_INCREMENT, " +
            "email VARCHAR(50) NOT NULL UNIQUE, " +
            "password VARCHAR(50) NOT NULL, " +
            "first_name VARCHAR(50) NOT NULL, " +
            "last_name VARCHAR(50) NOT NULL, " +
            "account_status VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY (customer_id) " +
            ");";

    public static String wallet = "CREATE TABLE Wallet( " +
            "customer_id INT , " +
            "wallet_name VARCHAR(50), " +
            "total_amount FLOAT(10, 2) NOT NULL, " +
            "payment_max_limit FLOAT(10, 2) NOT NULL, " +
            "PRIMARY KEY(customer_id, wallet_name), " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ")";

    public static String membershipType = "CREATE TABLE Membership_Type( " +
            "customer_id INT , " +
            "type VARCHAR(50) NOT NULL, " +
            "discount_rate INT NOT NULL, " +
            "PRIMARY KEY(customer_id, type), " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "CHECK(discount_rate >= 0) " +
            ");";

    public static String actor = "CREATE TABLE Actor( " +
            "id INT AUTO_INCREMENT, " +
            "name VARCHAR(50) NOT NULL, " +
            "surname VARCHAR(50) NOT NULL, " +
            "birth_year DATE NOT NULL, " +
            "PRIMARY KEY(id) " +
            ");"; // todo date constraint

    public static String genre = "CREATE TABLE Genre( " +
            "id INT AUTO_INCREMENT, " +
            "name VARCHAR(50) NOT NULL, " +
            "PRIMARY KEY(id) " +
            ");";

    public static String director = "CREATE TABLE Director( " +
            "id INT AUTO_INCREMENT, " +
            "name VARCHAR(50) NOT NULL, " +
            "surname VARCHAR(50) NOT NULL, " +
            "birth_year DATE NOT NULL, " +
            "PRIMARY KEY(id) " +
            ");"; // todo date constraint

    public static String movie = "CREATE TABLE Movie( " +
            "id INT AUTO_INCREMENT, " +
            "title VARCHAR(50) NOT NULL, " +
            "description VARCHAR(500) NOT NULL, " +
            "production_year INT NOT NULL, " +
            "duration INT NOT NULL, " +
            "price FLOAT(10, 2) NOT NULL, " +
            "image VARCHAR(200) NOT NULL, " +
            "employee_id INT NOT NULL, " +
            "PRIMARY KEY(id), " +
            "FOREIGN KEY(employee_id) REFERENCES Employee(employee_id), " +
            "CHECK(price > 0) " +
            ");";

    public static String customerOrder = "CREATE TABLE Customer_Order( " +
            "id INT AUTO_INCREMENT, " +
            "total_amount FLOAT(10, 2) NOT NULL, " +
            "date DATE NOT NULL, " +
            "checkout_type VARCHAR(50) NOT NULL, " +
            "customer_id INT NOT NULL, " +
            "PRIMARY KEY(id), " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
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
            "id INT AUTO_INCREMENT, " +
            "movie_name VARCHAR(50) NOT NULL, " +
            "movie_director VARCHAR(50) NOT NULL, " +
            "request_date DATE, " +
            "request_status VARCHAR(50) DEFAULT 'pending', " +
            "customer_id INT, " +
            "PRIMARY KEY(id), " +
            "FOREIGN KEY(customer_id) References Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";

    public static String addEmployee = "CREATE TABLE Add_Employee( " +
            "admin_id INT, " +
            "employee_id INT, " +
            "PRIMARY KEY(admin_id, employee_id), " +
            "FOREIGN KEY(admin_id) REFERENCES Admin(admin_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(employee_id) REFERENCES Employee(employee_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");";
    
    public static String banCustomer = "CREATE TABLE Ban_Customer( " +
            "employee_id INT, " +
            "customer_id INT, " +
            "date DATE NOT NULL, " +
            "PRIMARY KEY(employee_id, customer_id), " +
            "FOREIGN KEY(employee_id) REFERENCES Employee(employee_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";

    public static String deleteCustomer = "CREATE TABLE Delete_Customer( " +
            "employee_id INT, " +
            "customer_id INT, " +
            "PRIMARY KEY(employee_id, customer_id), " +
            "FOREIGN KEY(employee_id) REFERENCES Employee(employee_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";
    
    public static String addFriend = "CREATE TABLE Add_Friend( " +
            "sender_id INT, " +
            "receiver_id INT, " +
            "status INT DEFAULT 0, " +
            "PRIMARY KEY(sender_id, receiver_id), " +
            "FOREIGN KEY(receiver_id ) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(sender_id ) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";
    
    public static String hasOrder = "CREATE TABLE Has_Order( " +
            "order_id INT, " +
            "movie_id INT, " +
            "number_of_days INT NOT NULL, " +
            "PRIMARY KEY(order_id, movie_id), " +
            "FOREIGN KEY(order_id) REFERENCES Customer_Order(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";
    
    public static String recommend = "CREATE TABLE Recommend( " +
            "movie_id INT, " +
            "recommender_id INT, " +
            "friends_id INT, " +
            "date INT NOT NULL, " +
            "PRIMARY KEY(movie_id ), " +
            "FOREIGN KEY(movie_id ) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(recommender_id ) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(friends_id ) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            "); ";

    public static String review = "CREATE TABLE Review(  " +
            "movie_id INT, " +
            "customer_id INT, " +
            "comment VARCHAR(200), " +
            "PRIMARY KEY(movie_id),  " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");  ";

    public static String rate = "CREATE TABLE Rate(  " +
            "movie_id INT, " +
            "customer_id INT, " +
            "point INT NOT NULL, " +
            "PRIMARY KEY(movie_id, customer_id),  " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "CHECK(point >= 0 " +
            "AND point <= 5) " +
            ");  ";

    public static String addWatchlist = "CREATE TABLE Add_Watch_List(  " +
            "movie_id INT, " +
            "customer_id INT, " +
            "PRIMARY KEY(movie_id, customer_id),  " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(customer_id) REFERENCES Customer(customer_id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");  ";

    public static String acts = "CREATE TABLE Acts( " +
            "movie_id INT, " +
            "actor_id INT, " +
            "PRIMARY KEY(movie_id, actor_id), " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(actor_id) REFERENCES Actor(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");  ";

    public static String hasGenre = "CREATE TABLE Has_Genre(  " +
            "movie_id INT, " +
            "genre_id INT, " +
            "PRIMARY KEY(movie_id, genre_id), " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(genre_id) REFERENCES Genre(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");  ";
    
    public static String directs = "CREATE TABLE Directs(  " +
            "movie_id INT, " +
            "director_id INT, " +
            "PRIMARY KEY(movie_id, director_id), " +
            "FOREIGN KEY(movie_id) REFERENCES Movie(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE, " +
            "FOREIGN KEY(director_id) REFERENCES Director(id) " +
            "ON DELETE CASCADE " +
            "ON UPDATE CASCADE " +
            ");  ";
}
