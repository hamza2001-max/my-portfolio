import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ContextProvider from './ContextProvider';

const josefinSans = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Hamza Ali',
  description: 'A Portfolio Website by Hamza Ali.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
