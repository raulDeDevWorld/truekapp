
import { UserProvider } from '../context/Context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-dark.svg" />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/logo-dark.svg' />
        <meta name="theme-color" content="#00A5DD" />
        <meta name="msapplication-navbutton-color" content="#00A5DD" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#00A5DD" />
        <meta name="description" content="Truekes, Ofertas, comunidades y mucho mas" />
        <meta name="keywords" content="Logistics Gear" />
        <meta name="author" content="Logistics Gear" />
        <title>Truek App</title>  
      </head>
      <body className={inter.className}>
        <UserProvider>
          <main className='h-screen'>
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  )
}