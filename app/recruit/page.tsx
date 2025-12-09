// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic'

export default function RecruitPage() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">採用情報</h1>
          <div className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded">
            <p className="text-lg md:text-xl text-gray-700 font-medium">現在募集停止中</p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            現在、新規の採用募集を停止しております。ご応募いただきありがとうございます。
            <br />
            募集を再開する際は、こちらでお知らせいたします。
          </p>
        </div>
      </div>
    </main>
  )
}

