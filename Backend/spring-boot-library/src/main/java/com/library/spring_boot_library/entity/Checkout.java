package com.library.spring_boot_library.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "checkout")
@Data
public class Checkout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "user_email")
    private  String userEmail;
    @Column(name = "book_id")
    private  Long bookId;


    @Column(name = "return_date")
    private  String returnDate;
    @Column(name = "checkout_date")
    private  String checkoutDate;

    public Checkout(){

    }
    public Checkout(String userEmail, String checkoutDate, String returnDate, Long bookId) {
        this.userEmail = userEmail;
        this.bookId = bookId;
        this.returnDate = returnDate;
        this.checkoutDate = checkoutDate;
    }


}
