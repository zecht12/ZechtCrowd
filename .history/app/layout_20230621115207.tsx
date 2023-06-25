import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'

const inter = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'ZechtCrowd',
  description: 'Music App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <UserProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SupabaseProvider>
        </body>
    </html>
  )
}
