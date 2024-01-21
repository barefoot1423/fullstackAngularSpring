package com.ecommerce.springbootecommerce.dao;

import com.ecommerce.springbootecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}