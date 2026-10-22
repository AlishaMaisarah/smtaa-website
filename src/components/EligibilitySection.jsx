import {
  CalendarDays,
  BookOpen,
  BookCheck,
  Calculator,
  HeartPulse,
  CheckCircle2,
  UsersRound,
} from "lucide-react"

const requirements = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Umur 17–19 tahun",
    description:
      "Memenuhi lingkungan umur yang dinyatakan bagi permohonan program.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Latar belakang Tahfiz atau Madrasah",
    description:
      "Mempunyai sijil tamat pengajian madrasah tidak lebih dari 1 tahun.",
  },
  {
    number: "03",
    icon: BookCheck,
    title: "Hafaz Al-Quran minimum 5 JUZUK",
    description:
      "Keutamaan diberikan kepada 30 JUZUK dengan sijil syahadah/khatam hafazan.",
  },
  {
    number: "04",
    icon: Calculator,
    title: "Kemahiran asas 3M",
    description:
      "Boleh membaca, menulis dan mengira.",
  },
  {
    number: "05",
    icon: HeartPulse,
    title: "Kesihatan yang baik",
    description:
      "Berada dalam keadaan fizikal yang sihat untuk mengikuti pengajian.",
  },
  {
    number: "06",
    icon: UsersRound,
    title: "Pelajar Sekolah Pondok",
    description:
      "Pelajar Sekolah Pondok boleh memohon.",
  },
]

function EligibilitySection() {
  return (
    <section
      id="kelayakan"
      className="scroll-mt-24 bg-white px-6 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b08b4f]">
            Permohonan Kemasukan
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#174936] sm:text-5xl">
            Syarat Kelayakan
          </h2>

          <p className="mt-5 leading-8 text-[#6b6d66]">
            Semak syarat asas sebelum membuat permohonan ke
            program Smart Tahfiz Fast Track SPM.
          </p>
        </div>

        {/* Requirements */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#e8e1d3] bg-[#fcfaf5] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9b17e] hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f0e8]">
                    <Icon size={23} className="text-[#174936]" />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-[#b08b4f]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold leading-7 text-[#174936]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6b6d66]">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* Note */}
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-[#e8e1d3] bg-[#f7f3e9] p-5 sm:p-6">
          <CheckCircle2
            size={23}
            className="mt-0.5 shrink-0 text-[#174936]"
          />

          <div>
            <h3 className="font-semibold text-[#174936]">
              Sebelum membuat permohonan
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#6b6d66]">
              Sila hubungi kami untuk mengesahkan syarat
              terkini, dokumen yang diperlukan dan proses kemasukan.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default EligibilitySection
