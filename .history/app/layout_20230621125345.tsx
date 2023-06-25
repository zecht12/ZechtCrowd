import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'

const inter = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'ZechtCrowd',
  description: 'Music App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const products = await({:});
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <UserProvider>
          <ModalProvider products={products} />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
        </body>
    </html>
  )
}
