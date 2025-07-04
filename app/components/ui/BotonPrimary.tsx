import React from "react";

interface BotonPrimaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const BotonPrimary: React.FC<BotonPrimaryProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 bg-[#F77F00] text-white font-semibold rounded-lg hover:bg-[#e76b00] focus-visible:outline-none focus:ring-2 focus:ring-[#F77F00] focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default BotonPrimary; 