'use client'; // Indica que este archivo es un componente del lado del cliente

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos el tipo de los datos del pedido
type Order = {
  collectionAdress: string;
  scheduledDate: string;
  firstName: string;
  lastname: string;
  email: string;
  phone?: string;
  destinationAddress: string;
  department: string;
  municipality: string;
  referencePoint?: string;
  instructions?: string;
};

const OrderContext = createContext<any | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

interface OrderProviderProps {
  children: ReactNode;  
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order | null>(null);

  const addOrder = (newOrder: Order) => {
    setOrders(newOrder);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
