import React from "react";

interface NotificationProps {
  type: "success" | "error";
  message: string;
  show: boolean;
  onClose?: () => void;
}

const colors = {
  success: {
    bg: "bg-green-100",
    border: "border-green-400",
    text: "text-green-800",
    icon: "✅",
  },
  error: {
    bg: "bg-red-100",
    border: "border-red-400",
    text: "text-red-800",
    icon: "❌",
  },
};

export const Notification: React.FC<NotificationProps> = ({ type, message, show, onClose }) => {
  if (!show) return null;
  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-fade-in ${colors[type].bg} ${colors[type].border} ${colors[type].text}`}
      role="alert"
    >
      <span className="text-2xl">{colors[type].icon}</span>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-lg font-bold opacity-60 hover:opacity-100 transition"
          aria-label="Fechar notificação"
        >
          ×
        </button>
      )}
    </div>
  );
}; 