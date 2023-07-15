import Toast from '@/components/Toast';
import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

interface ToastContextProps {
  showToast: (message: string) => void;
}

interface ToastProviderProps {
    children: ReactNode;
}

const ToastContext = createContext<ToastContextProps>({showToast: () => {}});

export const ToastProvider:FC<ToastProviderProps> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  return context;
};
