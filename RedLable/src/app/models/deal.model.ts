// src/app/models/deal.model.ts
export interface Deal {
    id: number;
    title: string;
    description: string;
    expiryDate: Date;
    store: string;
    mainCategory: string; // e.g., 'dairy', 'bread', etc.
    subCategory: string;  // e.g., 'milk', 'cheese', or 'baguette', 'sourdough'
    price: number;
    originalPrice: number;
    imageUrl?: string;
  }
  