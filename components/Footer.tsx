import Link from 'next/link'

export default function Footer() {
  const navItems = [
    { href: '/', label: 'トップ' },
    { href: '/business', label: '事業内容' },
    { href: '/company', label: '会社情報' },
    { href: '/recruit', label: '採用情報' },
    { href: '/contact', label: 'お問い合わせ' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AONBIT</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-sm">株式会社AonBit</p>
                <p className="text-sm">〒171-0014 東京都豊島区池袋4-27-12 CPビル3F</p>
                <p className="text-sm">TEL: 03-6821-2456</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サイトマップ</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} 株式会社AonBit All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                個人情報保護方針
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
