import MicrobladingSlider from "./microblading-slider"

export default function IntroSlide() {
  return (
    <div className="min-h-screen p-8 pt-0" style={{ backgroundColor: "#ded8fd" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Interactive slider */}
        <div className="flex flex-col justify-center">
          <div className="w-full max-w-lg mx-auto">
            <MicrobladingSlider />
          </div>
        </div>

        {/* Right side - Course content */}
        <div className="text-slate-800 space-y-6" dir="rtl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            إضافات الرموش
            <br />
            <span className="text-slate-900">الاحترافية</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              شاهد هذا التحول: من الرموش الطبيعية إلى إضافات الحجم المذهلة التي تكشف بالكامل
              عن قوة نظرك.
            </p>

            <p>
              إضافات الرموش الاحترافية تتيح لك الحصول على مظهر درامي وطبيعي في نفس الوقت،
              بتقنيات متكيفة مع كل شكل عين والنمط المطلوب.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">في هذا الوحدة، ستتعلم:</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                    إتقان تقنيتين رئيسيتين مع فيديوهات عملية (التقنية الكلاسيكية + الحجم الروسي)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span> اكتشاف 3 تقنيات متقدمة (الحجم ثلاثي الأبعاد/الهجين، عين الغزال، عين مفتوحة)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>إجراء خرائط العين واختيار التقنية المناسبة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>تطبيق بروتوكول التركيب المكون من 17 خطوة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>فهم موانع الاستخدام ونصائح العناية اللاحقة</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
