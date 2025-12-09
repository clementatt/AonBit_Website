import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AonBit株式会社 | システム開発支援・システム受託開発・DX支援専門企業',
  description: 'AonBit株式会社はシステム開発支援・システム受託開発・DX支援を提供する専門企業です。システム開発支援、システム開発、企業成長伴走型DX支援で、お客様の成功をトータルサポート。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="antialiased font-sans">
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
