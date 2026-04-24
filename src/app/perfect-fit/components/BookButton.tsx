"use client";

import { Button } from "@/components/ui/Button";
import { useBooking } from "@/components/booking/BookingContext";

interface BookButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

/**
 * Client island — the only interactive piece in the hero and final CTA.
 * Extracted so the parent server component doesn't need "use client".
 */
export function BookButton({
  variant = "primary",
  size = "lg",
  className,
  label = "Rezerviraj termin",
}: BookButtonProps) {
  const { openBooking } = useBooking();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={openBooking}
    >
      {label}
    </Button>
  );
}
