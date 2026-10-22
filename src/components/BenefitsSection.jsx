import {
  GraduationCap,
  BookOpen,
  Award,
  School,
  UsersRound,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

const benefits = [
  {
    number: "01",
    icon: Award,
    title: "Bantuan Biasiswa",
    description:
      "Peluang menerima biasiswa pengajian daripada Yayasan Pendidikan Bumiputera, tertakluk pada terma dan kelayakan yang ditetapkan.",
  },
  {
    number: "02",
    icon: School,
    title: "Penginapan Disediakan",
    description:
      "Kemudahan asrama disediakan untuk menyokong kehidupan dan pembelajaran pelajar.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Laluan Pendidikan Lanjutan",
    description:
      "Membuka peluang untuk sambung pengajian ke peringkat diploma atau laluan TVET selepas SPM.",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Bimbingan Pengajar",
    description:
      "Pembelajaran dibimbing oleh tenaga pengajar bertauliah dan berpengalaman dalam jurusan Akademik dan Al-Quran.",
  },
  {
    number: "05",
    icon: UsersRound,
    title: "Persekitaran Pembelajaran",
    description:
      "Fasiliti bertaraf IPT yang menyokong perkembangan ilmu dan pembentukan sahsiah pelajar.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Diiktiraf Kerajaan",
    description:
      "Mendapat pengiktirafan daripada Jabatan Hal Ehwal Agama Islam Negeri Sembilan.",
  },
]

function BenefitsSection() {
  return (
    <section
      id="kelebihan"
      className="scroll-mt-24 bg-[#174936] px-6 py-16 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d9bd7d]">
            Mengapa SMTAA?
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Kelebihan
            <span className="block text-[#d9bd7d]">
              Program Kami
            </span>
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Sokongan pendidikan dan peluang perkembangan diri untuk
            membantu pelajar merancang langkah seterusnya selepas
            pengajian tahfiz.
          </p>
        </div>

        {/* Benefit cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d9bd7d]/50 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9bd7d]/10">
                    <Icon size={23} className="text-[#d9bd7d]" />
                  </div>

                  <span className="text-sm tracking-widest text-[#d9bd7d]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#d9bd7d]">
              Akhlak • Ilmu • Amal
            </p>

            <p className="mt-2 text-xl font-semibold">
              Membina masa depan melalui pendidikan.
            </p>
          </div>

          {/*<a
            href="#hubungi"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#d9bd7d] px-6 py-3 font-semibold text-[#174936] transition hover:bg-white"
          >
            Hubungi Kami
            <ArrowRight size={18} />
          </a>*/}
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection
