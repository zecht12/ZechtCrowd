import './globals.css'
import { Metadata, ResolvingMetadata } from 'next'

export const metadata = {
  title: 'ZechtCrowd',
  description: 'Music App',
  openGraph: {
    images: ['./public/assets/logo3.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
