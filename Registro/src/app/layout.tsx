import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['português'] })

export const metadata = {
  title: 'Sistema de Registro de União',
  description: 'Sistema para registro de uniões civis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}