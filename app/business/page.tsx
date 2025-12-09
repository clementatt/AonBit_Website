import ScrollAnimation from '@/components/ScrollAnimation'
import Link from 'next/link'

// 禁用静态生成，使用动态渲染
export const dynamic = 'force-dynamic'

export default function BusinessPage() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollAnimation>
          <div className="mb-20 pt-8">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">事業内容</h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
              お客様のビジネス成長を支援する、包括的な技術ソリューション
            </p>
          </div>
        </ScrollAnimation>

        {/* Service 01 */}
        <section className="mb-32">
          <ScrollAnimation delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-500 tracking-wider">01</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                システム開発支援サービス
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light mb-8">
                System Development Support Service
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-4">
                平均実務経験5年以上のエンジニアが、ソフトウェアからハードウェアまで一貫して対応可能な技術力でお客様の開発体制を強化します。
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                Web／モバイル／クラウドはもちろん、IoTデバイス開発・組込・基板設計・ファームウェア開発など、幅広い技術領域にフィットした人材をアサインします。
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">主な特徴</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      Java／PHP／Python／React／Vue などのアプリ・Web技術
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      組込C／IoTデバイス／基板設計などのハードウェア領域にも対応
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      金融・製造・小売・物流・通信など多業界での導入実績
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      プロジェクト開始前の技術ヒアリング・スキルマッチングを徹底
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">技術スタック</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {['Java', 'PHP', 'Python', 'React', 'Vue.js', 'Node.js', 'AWS', 'Docker'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['C', 'C++', 'STM32', 'ESP32', 'UART', 'SPI', 'PCB Design（KiCad / Altium / EasyEDA）'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Service 02 */}
        <section className="mb-32">
          <ScrollAnimation delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-500 tracking-wider">02</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                システム受託開発（ソフト＋ハード一体）
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light mb-8">
                System Development（Software & Hardware Integrated）
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-4">
                業務システム・Webサービス開発だけでなく、IoT機器の試作・制御ソフト開発・量産支援まで一体化した受託体制を提供します。
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                要件定義から設計・開発・テスト・リリース・運用まで、"動くモノ"を作り切るフルスタック開発に対応します。
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">主な特徴</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      ソフトウェア～ハードウェアまで一貫した開発フロー
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      アジャイル／ウォーターフォール両方のプロセスを最適化
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      IoT・エッジデバイス・クラウド連携を含むシステム設計
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      長期運用・保守、量産フェーズの支援にも対応
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">技術スタック</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {['AWS', 'Azure', 'GCP', 'Kubernetes', 'CI/CD', 'Microservices'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Embedded Linux', 'Firmware', 'PCB', 'Edge Computing'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Service 03 */}
        <section className="mb-32">
          <ScrollAnimation delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-500 tracking-wider">03</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                OneBuddy（企業成長伴走型DX支援）
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light mb-8">
                Digital Transformation Support
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-4">
                企業の事業モデル・技術スタック・組織状況を踏まえ、DX戦略・内製化・技術基盤整備・運用改善を一体型で支援。
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
                ソフトウェアだけでなく、IoT導入・ハードウェア活用・自動化基盤構築など"現場が本当に動くDX" を実現します。
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">主な特徴</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      DX戦略立案・プロダクトロードマップ策定
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      チームビルディング・組織設計・技術顧問
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      セキュリティ・コンプライアンス対応
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">
                      IoT導入、自動化、データ基盤の構築
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">技術スタック</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'GraphQL', 'Prisma', 'Vercel'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['IoT Platform', 'MQTT', 'Data Pipeline', 'Automation'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-[12vw] font-black text-gray-100 select-none tracking-tighter">
              TOGETHER
            </div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Let's Work Together
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
                お客様のプロジェクトに最適なソリューションを
                <br className="hidden sm:inline" />
                提案いたします。
              </p>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                また現在、ともに成長していけるパートナーも募集しております。
                <br />
                まずはお気軽にご相談ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium text-lg group border-b border-gray-900 pb-1"
              >
                お問い合わせ
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </main>
  )
}
