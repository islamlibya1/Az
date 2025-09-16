import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'

// Khata Landing - Dark, animated, Tailwind + Framer Motion
// Drop this single-file React component into Cursor / Next.js page.
// Dependencies: react, framer-motion, lucide-react, tailwindcss

export default function KhataLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] via-[#071023] to-[#0b0812] text-slate-100 antialiased">
      <Header />
      <main className="container mx-auto px-6 lg:px-12">
        <Hero />
        <Features />
        <CoursesShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex gap-8 items-center text-sm">
          <a className="hover:opacity-90" href="#about">عن خطى</a>
          <a className="hover:opacity-90" href="#courses">الدورات</a>
          <a className="hover:opacity-90" href="#contact">اتصل بنا</a>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg transform hover:scale-105 transition">انضم الآن</button>
        </nav>
        <div className="lg:hidden">
          <button aria-label="menu" className="p-2 rounded-md bg-white/5">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#g)" />
        <path d="M7 15L11 9L17 15" stroke="rgba(255,255,255,0.96)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <div className="font-semibold">خطى</div>
        <div className="text-xs text-slate-400">تعليم، تدريب، استشارات</div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="pt-8 lg:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">خطى للتعليم والتدريب والاستشارات
          <span className="block text-indigo-400 mt-2 text-lg font-medium">تعليم وتدريب بلا حدود — تطبيق عملي 100%</span>
        </h1>

        <p className="mt-6 text-slate-300 max-w-xl">منصة عربية رائدة في تطوير مهارات الأعمال. محتوى عملي. أدوات ذكية. دعم شخصي. مصمم لتحويل المتعلم إلى محترف جاهز لسوق العمل السعودي والعربي.</p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg transform hover:scale-105 transition">ابدأ الآن</button>
          <button className="px-6 py-3 rounded-lg bg-white/5 border border-white/6">استكشف الدورات</button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm text-xs text-slate-400">
          <Stat label="دورة" value="+120" />
          <Stat label="مدرب" value="+45" />
          <Stat label="طالب" value="+8k" />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
        <div className="rounded-2xl p-6 bg-gradient-to-b from-white/3 to-white/5 shadow-2xl backdrop-blur-lg border border-white/6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-300">دورة مميزة</div>
              <div className="font-semibold mt-1">بناء المنتجات الرقمية - من الفكرة إلى السوق</div>
              <div className="text-xs text-slate-400 mt-2">مدرب: محمد العلي · مستوى: متوسط · 8 وحدات</div>
            </div>
            <div className="w-28 h-20 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="course" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-slate-400">تقييم الطلاب · 4.8/5</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md bg-white/6">عرض</button>
              <button className="px-3 py-1 rounded-md bg-indigo-600">سجل الآن</button>
            </div>
          </div>
        </div>

        <FloatingSVG />
      </motion.div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-slate-400">{label}</div>
    </div>
  )
}

function FloatingSVG() {
  return (
    <svg className="absolute -right-12 -bottom-12 opacity-80" width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="130" cy="130" r="120" fill="url(#g2)" fillOpacity="0.08" />
      <g opacity="0.9">
        <path d="M40 160 C100 100, 160 120, 220 60" stroke="#7c3aed" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 140 C100 80, 160 100, 220 40" stroke="#06b6d4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

function Features() {
  const items = [
    { title: 'محتوى تطبيقي 100%', desc: 'حالات عملية من شركات رائدة' },
    { title: 'أدوات ذكية', desc: 'قوالب وبيئات عمل جاهزة' },
    { title: 'دعم شخصي', desc: 'جلسات استشارية ومراجعة أداء' },
  ]
  return (
    <section className="mt-16" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.div key={idx} whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 w-12 h-12 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L12 22" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-slate-300 text-sm mt-1">{it.desc}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CoursesShowcase() {
  const cards = Array.from({ length: 6 }).map((_, i) => ({
    title: `دورة ${i + 1} · تطوير مهارات`,
    author: 'خطى',
    price: i % 2 === 0 ? 'مجانية' : '499 SAR',
  }))

  return (
    <section className="mt-16" id="courses">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">الدورات الأكثر شيوعًا</h3>
        <div className="hidden lg:flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 text-sm">
          <Search size={14} />
          <input className="bg-transparent outline-none placeholder:text-slate-400" placeholder="ابحث عن دورة..." />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {cards.map((c, idx) => (
          <motion.div whileHover={{ scale: 1.02 }} key={idx} className="p-4 rounded-2xl bg-white/3 border border-white/6">
            <div className="w-full h-36 rounded-md overflow-hidden">
              <img src={`https://picsum.photos/seed/${idx + 10}/800/600`} alt="course" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="font-semibold">{c.title}</div>
                <div className="text-xs text-slate-400 mt-1">{c.author}</div>
              </div>
              <div className="text-sm font-medium">{c.price}</div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 py-2 rounded-md bg-white/6">عرض</button>
              <button className="py-2 px-4 rounded-md bg-indigo-600">سجل</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="mt-16 py-10 rounded-2xl bg-gradient-to-r from-[#071023] to-[#0b0812] border border-white/6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xl font-bold">انضم اليوم وابدأ رحلتك نحو الاحتراف</div>
          <div className="text-slate-400 mt-2">المعرفة النظرية لا تكفي. التطبيق هو الفارق. سجّل وابدأ التدريب العملي الآن.</div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500">سجل الآن</button>
          <button className="px-6 py-3 rounded-lg bg-white/5">تواصل معنا</button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-white/6">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} خطى · جميع الحقوق محفوظة</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm text-slate-400">+966 5X XXX XXXX</div>
          <div className="text-sm text-slate-400">info@khata.com</div>
        </div>
      </div>
    </footer>
  )
}

// End of file
