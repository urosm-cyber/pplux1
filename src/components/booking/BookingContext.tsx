"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookingModal from './BookingModal';

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => {
    setIsOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = () => {
    setIsOpen(false);
    // Restore scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <BookingContext.Provider value={{ isOpen, openBooking, closeBooking }}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
