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
            تركيب الرموش
            <br />
            <span className="text-slate-900">الاحترافي</span>
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              شاهدي هذا التحول: من الرموش الطبيعية إلى رموش بكثافة مذهلة تبرز جمال نظرتك بالكامل. يتيح لك تركيب الرموش الاحترافي الحصول على مظهر جذاب وطبيعي في آن واحد، باستخدام تقنيات تتكيف مع كل شكل عين والأسلوب المرغوب.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">في هذه الوحدة، ستتعلمين:</h2>

            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                    إتقان تقنيتين رئيسيتين مع فيديوهات عملية (التقنية الكلاسيكية + الحجم الروسي).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span> اكتشاف 3 تقنيات متقدمة (الحجم ثلاثي الأبعاد/الهجين، عين القطة، العين المفتوحة).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>تخطيط شكل العين واختيار التقنية المناسبة.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>تطبيق خطوات التركيب الـ 17.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-slate-800 rounded-full mt-2 flex-shrink-0"></div>
                <span>فهم موانع الاستعمال ونصائح العناية اللاحقة.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
