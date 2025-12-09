import Hero from '@/components/Hero'
import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic'

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
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed mb-4">
                技術の深化と革新で、ビジネスに新たな価値基準を創造する
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
                Through deepened expertise and continuous innovation, we create new value standards for our clients' businesses.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <ScrollAnimation delay={0.1}>
              <div className="group cursor-pointer h-full flex flex-col">
                <div className="border-b border-gray-200 pb-8 transition-all duration-300 group-hover:border-gray-900 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">01</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors leading-tight">
                    システム開発支援サービス（ソフトウェア／ハードウェア）
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 font-medium">
                    即戦力エンジニアによる、現場に効く開発支援
                  </p>
                  <p className="text-gray-600 leading-relaxed break-words flex-grow">
                    平均5年以上の実務経験を持つエンジニアが、ソフトウェア（Java・PHP・Python・React・Vue）から、組込開発・IoT・基板設計などのハードウェア領域まで幅広く対応。プロジェクトフェーズに合わせて最適な人材をアサインし、"動くものを、動く形で" 確実に届ける開発体制を構築します。
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="group cursor-pointer h-full flex flex-col">
                <div className="border-b border-gray-200 pb-8 transition-all duration-300 group-hover:border-gray-900 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">02</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors leading-tight">
                    フルスタック受託開発（ソフト＋ハード一体）
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 font-medium">
                    要件定義から量産・運用までをワンストップで実現
                  </p>
                  <p className="text-gray-600 leading-relaxed break-words flex-grow">
                    システム設計・モバイル／Webアプリ開発はもちろん、ハードウェア試作、ファームウェア開発、量産サポートまで一貫対応。アジャイル開発にも柔軟に対応し、短期間でプロダクトを「実物」へと具現化するフルスタック開発を提供します。
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="group cursor-pointer h-full flex flex-col">
                <div className="border-b border-gray-200 pb-8 transition-all duration-300 group-hover:border-gray-900 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">03</span>
                    <div className="text-gray-400 group-hover:text-gray-900 transition-colors">→</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors leading-tight">
                    DX推進・技術顧問サービス
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 font-medium">
                    成長ステージに合わせた技術戦略で、事業を前へ進める
                  </p>
                  <p className="text-gray-600 leading-relaxed break-words flex-grow">
                    スタートアップから中堅企業まで、デジタル化・自動化・省人化・IoT導入・業務最適化を総合支援。攻めの新規開発と、守りの運用改善を最適バランスで設計し、技術とビジネス両面から"勝てる仕組み"を作るDX伴走サービスを提供します。
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
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mb-4">
                私たちが拠り所とする理念・未来像・価値観
              </p>
              <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                The beliefs, aspirations, and values that define us.
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
                  技術で"まだ形になっていない価値"を創り出す。
                </p>
                <p className="text-sm md:text-base text-gray-500 mb-4 text-center italic">
                  Creating value that has yet to take shape through technology.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  私たちの使命は、ソフトとハードの境界を越え、世の中がまだ気づいていない課題や可能性を可視化し、新しい解決策として実装すること。既存の仕組みを補修するのではなく、ゼロから再発明し、よりよい未来の当たり前をつくることを目指します。
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
                <h4 className="text-lg font-medium text-gray-500 mb-6 tracking-wider">目指す姿</h4>
                <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-4 font-medium text-center">
                  挑戦が確実に実現へ近づく社会をつくる。
                </p>
                <p className="text-sm md:text-base text-gray-500 mb-4 text-center italic">
                  Building a society where every challenge moves closer to realization.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  企業が新しい挑戦をするとき、技術は壁ではなく、前に進むための力であるべきです。制約に縛られず、「できるかどうか」ではなく「どう実現するか」を選択できる世界。その実現のために、私たちは技術革新と実行力で応え続けます。
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Value</h3>
              <h4 className="text-lg font-medium text-gray-500 mb-2 tracking-wider">価値観</h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                私たちの判断と行動を支える信念
              </p>
              <p className="text-base text-gray-500 italic">
                The principles that guide our decisions and actions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <ScrollAnimation delay={0.1} className="h-full">
              <div className="h-full bg-white p-8 border border-gray-200 group hover:border-gray-900 transition-colors duration-300 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  1. Craft Beyond Code
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4">
                  コードを超えて、価値をつくる。
                </p>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  ソフトやハードを単体で作るのではなく、"使われた瞬間に価値が生まれるか" を基準に設計する。見た目や仕様よりも、本当に機能する仕組みを優先します。
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2} className="h-full">
              <div className="h-full bg-white p-8 border border-gray-200 group hover:border-gray-900 transition-colors duration-300 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  2. Challenge First
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4">
                  できない理由より、実現する方法を探す。
                </p>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  困難や制約を前提にせず、実現の可能性を最大化するアプローチを常に選ぶ。挑戦を止めるのではなく、推進する側であること。
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3} className="h-full">
              <div className="h-full bg-white p-8 border border-gray-200 group hover:border-gray-900 transition-colors duration-300 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  3. Learn, Break, Reinvent
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4">
                  学び続け、壊し、再発明する。
                </p>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  技術・市場・社会は常に変化します。過去の成功にとらわれず、学習 → 実験 → 改善 → 再構築を繰り返すことで最適解を常にアップデートし続けます。
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4} className="h-full">
              <div className="h-full bg-white p-8 border border-gray-200 group hover:border-gray-900 transition-colors duration-300 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  4. Integrity in Execution
                </h4>
                <p className="text-base font-medium text-gray-700 mb-4">
                  誠実に、確実に、最後まで届ける。
                </p>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  妥協せず、逃げず、約束した価値を必ず届ける。「作って終わり」ではなく「成果が出るまで伴走する」姿勢を大切にします。
                </p>
              </div>
            </ScrollAnimation>
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

      {/* Recruit Section - 暂时注释掉 */}
      {/* <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
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
      </section> */}

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
                      <span className="text-sm font-medium text-gray-500 tracking-wider">2025.12.09</span>
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
