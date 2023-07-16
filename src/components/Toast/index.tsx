import { APP_NAME } from '@/shared/constants';
import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-red-200 text-white px-4 py-2 rounded shadow">
        <div className='flex flex-row items-between'>
            {APP_NAME}
            <div onClick={onClose}> 
            </div>
        </div>
      {message}
    </div>
  );
};

export default Toast;
