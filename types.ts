
import React from 'react';

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export interface CartItem extends CollectionItem {
  quantity: number;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
