import './globals.css'
import { Metadata, ResolvingMetadata } from 'next'

export const metadata = {
  title: 'ZechtCrowd',
  description: 'Music App',
  openGraph: {
    images: ['/some-specific-page-image.jpg', ...previousImages],
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
