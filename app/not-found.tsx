export default function NotFound() {
  return (
    <html lang="ja">
      <body className="antialiased font-sans">
        <main className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">ページが見つかりません</p>
            <a href="/" className="text-gray-900 hover:text-gray-700 font-medium border-b border-gray-900 pb-1">
              ホームに戻る
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
