import ScrollAnimation from '@/components/ScrollAnimation'

export default function CompanyPage() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollAnimation>
          <div className="mb-20 pt-8">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">会社情報</h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
              Company Overview
            </p>
          </div>
        </ScrollAnimation>

        {/* Company Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <ScrollAnimation delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">会社概要</h2>
              <dl className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    会社名
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">AonBit株式会社</dd>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    設立
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">—</dd>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    資本金
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">—</dd>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    代表取締役
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">—</dd>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    従業員数
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">—</dd>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    所在地
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">
                    〒111-0052
                    <br />
                    東京都台東区柳橋1丁目16-3
                    <br />
                    Gran+Asakusabashi―III 4F 5F
                  </dd>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    TEL
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">—</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-gray-500 tracking-wider mb-2 uppercase">
                    メール
                  </dt>
                  <dd className="text-lg md:text-xl text-gray-900">—</dd>
                </div>
              </dl>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Access</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">本社所在地</h3>
                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    <p>〒111-0052</p>
                    <p>東京都台東区柳橋1丁目16-3</p>
                    <p>Gran+Asakusabashi―III 4F 5F</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">アクセス</h3>
                  <div className="text-lg text-gray-600 leading-relaxed mb-6">
                    <p>浅草橋駅A1出口から徒歩約2分</p>
                  </div>
                  <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.51265605386433!2d139.78823134068915!3d35.69663421539265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188eb37d92d241%3A0x8f6c4abc585d1a7e!2z44CSMTExLTAwNTIgVG9reW8sIFRhaXRvIENpdHksIFlhbmFnaWJhc2hpLCAxLWNoxY1tZeKIkjE24oiSMyDvvLPvvLPnrKzvvJLjg5Pjg6s!5e0!3m2!1szh-CN!2sjp!4v1765251940483!5m2!1szh-CN!2sjp"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </main>
  )
}
