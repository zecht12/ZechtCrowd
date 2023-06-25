import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

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
        <SupabaseProvider
        <Sidebar>
        {children}
        </Sidebar>
        </body>
    </html>
  )
}
