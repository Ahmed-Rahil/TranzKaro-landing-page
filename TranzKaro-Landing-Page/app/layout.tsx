import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TranzKaro - Travel Smart, Travel Now!',
  description: 'Your ticket to freedom, fun, and adventure. Book tickets instantly through chat.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>{children}</body>
    </html>
  )
}
