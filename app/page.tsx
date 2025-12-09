import Hero from '@/components/Hero'
import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Our Strength Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Our Strength</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
                技術の深化と革新を通じて、
                <br className="hidden sm:inline" />
                お客様のビジネスに新たなルールを創造します
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <ScrollAnimation delay={0.1}>
              <div className="group cursor-pointer">
                <div className="border-b border-gray-200 pb-8 transition-all duration-300 group-hover:border-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">01</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                    システム開発支援サービス
                  </h3>
                  <p className="text-gray-600 leading-relaxed break-words">
                    平均実務経験5年以上の即戦力エンジニアを派遣。Java・PHP・Python・React・Vue.jsなど幅広い技術領域に対応し、プロジェクト成功をサポートします。
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="group cursor-pointer">
                <div className="border-b border-gray-200 pb-8 transition-all duration-300 group-hover:border-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">02</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                    システム受託開発
                  </h3>
                  <p className="text-gray-600 leading-relaxed break-words">
                    要件定義から設計・開発・テスト・リリースまで一貫したシステム開発を提供。アジャイル開発にも対応し、短期間での高品質なシステム構築を実現します。
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="group cursor-pointer">
                <div className="border-b border-gray-200 pb-8 transition-all duration-300 group-hover:border-gray-900">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">03</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                    DX支援サービス
                  </h3>
                  <p className="text-gray-600 leading-relaxed break-words">
                    スタートアップから中堅企業まで、成長ステージに応じて攻めの投資と守りの安定を最適バランスで提供。ワンストップでDX推進を伴走支援します。
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.4}>
            <div className="mt-20 text-center">
            <Link
              href="/business"
              className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-lg group border-b border-gray-900 pb-1"
            >
              Read more
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[12vw] font-black text-gray-100 select-none tracking-tighter">
            PHILOSOPHY
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                私たちが大切にしている理念と価値観
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-12 border border-gray-200 group hover:border-gray-900 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-gray-500 tracking-wider">01</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">Mission</h3>
                <h4 className="text-lg font-medium text-gray-500 mb-6 tracking-wider">存在意義</h4>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-4 font-medium text-center">
                  テクノロジーの可能性を深め、想像以上の未来を創る
                </p>
                <p className="text-gray-600 leading-relaxed">
                  表面的な解決ではなく、技術の本質を追求し根本から変える。常に学習し、テクノロジーの限界を押し広げ続けます。
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-12 border border-gray-200 group hover:border-gray-900 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-gray-500 tracking-wider">02</span>
                  <div className="h-px bg-gray-300 flex-1"></div>
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">Vision</h3>
                <h4 className="text-lg font-medium text-gray-500 mb-6 tracking-wider">目指す未来</h4>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-4 font-medium text-center">
                  企業が本当に求める価値を実現できる社会
                </p>
                <p className="text-gray-600 leading-relaxed">
                  お客様の想像を超える価値を必ず届け、「できません」ではなく「どうやったらできるか」を考え抜きます。
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Our Values</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                私たちの行動指針となる5つの価値観
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { emoji: '🚀', title: 'Deep Innovation', subtitle: '深化革新' },
              { emoji: '⚡', title: 'Beyond Expectation', subtitle: '期待超越' },
              { emoji: '🤝', title: 'One Buddy', subtitle: '真の伴走者' },
              { emoji: '💫', title: 'Lightning Speed', subtitle: '光速実行' },
              { emoji: '🌱', title: 'Flat & Grow', subtitle: 'フラット成長' },
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="border-b border-gray-200 pb-6 group-hover:border-gray-900 transition-colors duration-300">
                    <div className="text-4xl mb-4">{value.emoji}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.subtitle}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.6}>
            <div className="text-center mt-16">
              <Link
                href="/company"
                className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-lg border-b border-gray-900 pb-1"
              >
                会社情報を見る
                <span className="ml-2">→</span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Recruit Section */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[12vw] font-black text-gray-100 select-none tracking-tighter">
            RECRUIT
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Join Our Team</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                技術で未来を創る仲間を募集しています
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            <ScrollAnimation delay={0.1}>
              <div className="group">
                <div className="border-b border-gray-200 pb-8 group-hover:border-gray-900 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider">01</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">派遣・受託開発エンジニア</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-3">フロントエンド</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    React・Vue.jsでのモダンWeb開発
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">経験 3年以上</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="group">
                <div className="border-b border-gray-200 pb-8 group-hover:border-gray-900 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider">02</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">派遣・受託開発エンジニア</h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-3">バックエンド</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Java・PHP・Pythonでのサーバーサイド開発
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">経験 3年以上</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.3}>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Ready to Join Us?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                カジュアル面談からお気軽にご連絡ください
              </p>
              <Link
                href="/recruit"
                className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-lg border-b border-gray-900 pb-1"
              >
                採用情報を見る
                <span className="ml-2">→</span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">News & Updates</h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl">
                最新の情報とアップデートをお届けします
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            <ScrollAnimation delay={0.1}>
              <div className="group cursor-pointer">
                <div className="border-b border-gray-200 pb-8 group-hover:border-gray-900 transition-all duration-300 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-gray-500 tracking-wider">2024.09.01</span>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                        お知らせ
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      ホームページをリプレイスいたしました
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      より使いやすく、分かりやすいWebサイトにリニューアルいたしました。お客様により良い情報提供ができるよう努めてまいります。
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-900 transition-colors ml-6 text-2xl">＞</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
