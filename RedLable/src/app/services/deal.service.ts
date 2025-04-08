import { Injectable } from '@angular/core';
import { Deal } from '../models/deal.model';

@Injectable({
  providedIn: 'root'
})
export class DealService {
    private deals: Deal[] = [
        // Dairy Deals (sub-categories: milk, cheese)
        {
          id: 1,
          title: 'Discount Milk',
          description: '1 gallon of whole milk at 30% off',
          expiryDate: new Date(2025, 3, 20),
          store: 'Local Grocery',
          mainCategory: 'dairy',
          subCategory: 'milk',
          price: 2.00,
          originalPrice: 2.80,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 2,
          title: 'Cheddar Cheese Special',
          description: 'Mature cheddar cheese now 25% off',
          expiryDate: new Date(2025, 3, 21),
          store: 'Health Foods',
          mainCategory: 'dairy',
          subCategory: 'cheese',
          price: 4.00,
          originalPrice: 5.00,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 3,
          title: 'Skim Milk Offer',
          description: 'Low-fat skim milk available at 20% off',
          expiryDate: new Date(2025, 3, 22),
          store: 'Local Grocery',
          mainCategory: 'dairy',
          subCategory: 'milk',
          price: 1.80,
          originalPrice: 2.25,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 4,
          title: 'Blue Cheese Deal',
          description: 'Blue cheese at a special 15% discount',
          expiryDate: new Date(2025, 3, 23),
          store: 'Health Foods',
          mainCategory: 'dairy',
          subCategory: 'cheese',
          price: 5.00,
          originalPrice: 5.80,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 5,
          title: 'Organic Milk',
          description: 'Organic milk now 10% off',
          expiryDate: new Date(2025, 3, 24),
          store: 'Local Grocery',
          mainCategory: 'dairy',
          subCategory: 'milk',
          price: 2.50,
          originalPrice: 2.80,
          imageUrl: 'assets/images/temp-img.png'
        },
        // Bread Deals (sub-categories: baguette, sourdough)
        {
          id: 6,
          title: 'Fresh Baguette',
          description: 'Crispy baguette freshly baked',
          expiryDate: new Date(2025, 3, 25),
          store: 'Downtown Bakery',
          mainCategory: 'bread',
          subCategory: 'baguette',
          price: 1.80,
          originalPrice: 2.00,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 7,
          title: 'Sourdough Special',
          description: 'Traditional sourdough bread at discount',
          expiryDate: new Date(2025, 3, 26),
          store: 'Downtown Bakery',
          mainCategory: 'bread',
          subCategory: 'sourdough',
          price: 2.00,
          originalPrice: 2.50,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 8,
          title: 'Artisan Baguette',
          description: 'Handcrafted artisan baguette at 20% off',
          expiryDate: new Date(2025, 3, 27),
          store: 'Downtown Bakery',
          mainCategory: 'bread',
          subCategory: 'baguette',
          price: 2.20,
          originalPrice: 2.80,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 9,
          title: 'Whole Grain Sourdough',
          description: 'Healthy whole grain sourdough now 15% off',
          expiryDate: new Date(2025, 3, 28),
          store: 'Local Grocery',
          mainCategory: 'bread',
          subCategory: 'sourdough',
          price: 2.50,
          originalPrice: 3.00,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 10,
          title: 'Rustic Baguette',
          description: 'Rustic baguette baked fresh daily',
          expiryDate: new Date(2025, 3, 29),
          store: 'Downtown Bakery',
          mainCategory: 'bread',
          subCategory: 'baguette',
          price: 1.90,
          originalPrice: 2.20,
          imageUrl: 'assets/images/temp-img.png'
        },
        // Fruit Deals (sub-categories: apples, oranges)
        {
          id: 11,
          title: 'Red Apple Deal',
          description: 'Fresh red apples at 20% off',
          expiryDate: new Date(2025, 3, 30),
          store: 'Health Foods',
          mainCategory: 'fruit',
          subCategory: 'apples',
          price: 3.00,
          originalPrice: 3.80,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 12,
          title: 'Juicy Oranges',
          description: 'Citrus oranges with a 25% discount',
          expiryDate: new Date(2025, 4, 1),
          store: 'Local Grocery',
          mainCategory: 'fruit',
          subCategory: 'oranges',
          price: 2.50,
          originalPrice: 3.20,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 13,
          title: 'Green Apples Offer',
          description: 'Crisp green apples on sale at 30% off',
          expiryDate: new Date(2025, 4, 2),
          store: 'Health Foods',
          mainCategory: 'fruit',
          subCategory: 'apples',
          price: 3.20,
          originalPrice: 4.00,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 14,
          title: 'Mandarin Oranges',
          description: 'Sweet mandarins now 20% off',
          expiryDate: new Date(2025, 4, 3),
          store: 'Local Grocery',
          mainCategory: 'fruit',
          subCategory: 'oranges',
          price: 2.80,
          originalPrice: 3.50,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 15,
          title: 'Mixed Citrus',
          description: 'Assortment of citrus fruits at a special price',
          expiryDate: new Date(2025, 4, 4),
          store: 'Health Foods',
          mainCategory: 'fruit',
          subCategory: 'oranges',
          price: 4.50,
          originalPrice: 5.50,
          imageUrl: 'assets/images/temp-img.png'
        },
        // Meat Deals (sub-categories: beef, chicken)
        {
          id: 16,
          title: 'Beef Steak Special',
          description: 'Premium beef steak available at 15% off',
          expiryDate: new Date(2025, 4, 5),
          store: 'Butcher Shop',
          mainCategory: 'meat',
          subCategory: 'beef',
          price: 10.00,
          originalPrice: 12.00,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 17,
          title: 'Chicken Breast Deal',
          description: 'Boneless chicken breast with a 20% discount',
          expiryDate: new Date(2025, 4, 6),
          store: 'Butcher Shop',
          mainCategory: 'meat',
          subCategory: 'chicken',
          price: 8.00,
          originalPrice: 10.00,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 18,
          title: 'Ground Beef Offer',
          description: 'Fresh ground beef now at 10% off',
          expiryDate: new Date(2025, 4, 7),
          store: 'Local Grocery',
          mainCategory: 'meat',
          subCategory: 'beef',
          price: 7.50,
          originalPrice: 8.50,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 19,
          title: 'Organic Chicken',
          description: 'Organic chicken available at 18% off',
          expiryDate: new Date(2025, 4, 8),
          store: 'Butcher Shop',
          mainCategory: 'meat',
          subCategory: 'chicken',
          price: 9.00,
          originalPrice: 10.80,
          imageUrl: 'assets/images/temp-img.png'
        },
        {
          id: 20,
          title: 'Beef Roast',
          description: 'Juicy beef roast available at 20% off',
          expiryDate: new Date(2025, 4, 9),
          store: 'Butcher Shop',
          mainCategory: 'meat',
          subCategory: 'beef',
          price: 12.00,
          originalPrice: 15.00,
          imageUrl: 'assets/images/temp-img.png'
        }
      ];

  getDeals(): Deal[] {
    return this.deals;
  }
}
