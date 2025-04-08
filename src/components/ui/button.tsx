import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}