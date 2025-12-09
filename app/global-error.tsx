'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ja">
      <body className="antialiased font-sans">
        <main className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-4">500</h1>
            <p className="text-xl text-gray-600 mb-8">エラーが発生しました</p>
            <button
              onClick={reset}
              className="text-gray-900 hover:text-gray-700 font-medium border-b border-gray-900 pb-1"
            >
              再試行
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}

