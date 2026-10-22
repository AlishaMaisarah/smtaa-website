import { ArrowRight, BookOpen, GraduationCap, HeartHandshake } from "lucide-react"
import { Link } from "react-router-dom"

const highlights = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Perkembangan Akademik",
    description:
      "Perjalanan pelajar dalam membina asas akademik dan meneroka peluang pendidikan.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Penghayatan Al-Quran",
    description:
      "Usaha membentuk hubungan yang kukuh dengan Al-Quran melalui pendidikan dan amalan.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Pembentukan Sahsiah",
    description:
      "Menyemai nilai akhlak, disiplin dan tanggungjawab dalam kehidupan seharian.",
  },
]

function AchievementsSection() {
  return (
    <section
      id="pencapaian"
      className="scroll-mt-24 bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b08b4f] sm:text-sm">
            Perjalanan SMTAA
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#174936] sm:text-4xl lg:text-5xl">
            Membina Masa Depan,
            <span className="block">Melakar Pencapaian</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            Pendidikan bukan sekadar tentang keputusan, tetapi juga
            perjalanan menimba ilmu, menghayati Al-Quran dan membentuk
            peribadi yang baik.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-[#e8e1d3] bg-white p-7 shadow-sm shadow-[#174936]/5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#d9bd7d]/70 hover:shadow-xl hover:shadow-[#174936]/10 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#174936] text-[#d9bd7d]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-[#b08b4f]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#174936]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-[#b08b4f]/80 transition-all duration-300 ease-out group-hover:w-20 group-hover:bg-[#174936]" />
              </article>
            )
          })}
        </div>

        {/* Testimonial link */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/testimoni"
            className="group inline-flex items-center gap-2 rounded-full bg-[#174936] px-6 py-3.5 font-medium text-white transition hover:bg-[#103b2c]"
          >
            Lihat Testimoni
            <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/*<p className="mt-4 text-center text-xs leading-5 text-gray-400">
          Sorotan ini menerangkan fokus pendidikan SMTAA dan bukan statistik
          atau pengiktirafan rasmi.
        </p>*/}
      </div>
    </section>
  )
}

export default AchievementsSection
