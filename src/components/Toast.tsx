import React, { useEffect } from "react";
interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}
import { FcOk } from "react-icons/fc";
const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="  fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex  items-center gap-2 main text-white px-6 py-2 rounded-lg shadow-lg animate-slide-up">
        <FcOk />
        {message}
      </div>
    </div>
  );
};

export default Toast;
