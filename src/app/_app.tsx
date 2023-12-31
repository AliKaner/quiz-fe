import '@/styles/global.css'
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastProvider } from '../hooks/useToast';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Triviafun',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children:ReactNode
}) {
  return (
    <ToastProvider>
      <div  lang="en" className='bg-light flex flex-col h-screen w-screen'>
        <div className={inter.className}>{children}</div>
      </div>
    </ToastProvider>
  )
}
