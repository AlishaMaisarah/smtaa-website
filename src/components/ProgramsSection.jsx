import {
  BookOpen,
  GraduationCap,
  Clock,
  CalendarDays,
  CheckCircle2,
  Award,
} from "lucide-react"

const subjects = [
  "Bahasa Melayu",
  "Bahasa Inggeris",
  "Matematik",
  "Sains",
  "Sejarah",
  "Pendidikan Syariah Islamiah",
  "Pendidikan Al-Quran Sunnah",
]

function ProgramsSection() {
  return (
    <section
      id="program"
      className="scroll-mt-24 bg-[#f7f3e9] px-6 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b08b4f]">
            Pembelajaran di SMTAA
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#174936] sm:text-5xl">
            Smart Tahfiz
            <span className="block text-[#b08b4f]">
              Fast Track SPM
            </span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#6b6d66]">
            Program pendidikan untuk pelajar tahfiz yang ingin
            meneruskan pengajian sambil membuat persediaan bagi
            mendapatkan kelayakan Sijil Pelajaran Malaysia (SPM).
          </p>
        </div>

        {/* Programme details */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <article className="rounded-3xl border border-[#e8e1d3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9b17e] hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f0e8]">
              <CalendarDays size={24} className="text-[#174936]" />
            </div>

            <p className="mt-6 text-sm text-[#7a6743]">
              Tempoh Pengajian
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#174936]">
              12 Bulan
            </h3>

            <p className="mt-2 text-sm text-[#6b6d66]">
              Satu tahun
            </p>
          </article>

          <article className="rounded-3xl border border-[#e8e1d3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9b17e] hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f0e8]">
              <Clock size={24} className="text-[#174936]" />
            </div>

            <p className="mt-6 text-sm text-[#7a6743]">
              Mod Pengajian
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#174936]">
              Sepenuh Masa
            </h3>

            <p className="mt-2 text-sm text-[#6b6d66]">
              Pengajian secara sepenuh masa
            </p>
          </article>

          <article className="rounded-3xl border border-[#e8e1d3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9b17e] hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f0e8]">
              <Award size={24} className="text-[#174936]" />
            </div>

            <p className="mt-6 text-sm text-[#7a6743]">
              Bantuan Pengajian
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#174936]">
              Peluang Biasiswa
            </h3>

            <p className="mt-2 text-sm text-[#6b6d66]">
              Bantuan pengajian daripada Yayasan Pendidikan
              Bumiputera, tertakluk pada terma dan syarat.
            </p>
          </article>

        </div>

        {/* Subjects */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#e8e1d3] bg-white">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            <div className="bg-[#174936] p-8 text-white sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <GraduationCap size={25} className="text-[#d9bd7d]" />
              </div>

              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
                Subjek Pembelajaran
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Berikut ialah subjek yang disenaraikan pada bahan
                pembelajaran SMTAA.
              </p>

              <div className="mt-8 h-px w-16 bg-[#d9bd7d]" />

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#d9bd7d]">
                Akhlak • Ilmu • Amal
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {subjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex items-start gap-3 rounded-xl bg-[#fcfaf5] p-4"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#63866b]"
                    />

                    <span className="text-sm font-medium leading-6 text-[#174936]">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Admission note */}
        {/*<div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#d9bd7d]/50 bg-[#f1ead8] p-5 sm:p-6">
          <BookOpen
            size={23}
            className="mt-0.5 shrink-0 text-[#174936]"
          />

          <p className="text-sm leading-7 text-[#5e5b50]">
            Untuk maklumat lanjut mengenai pengambilan, subjek,
            bantuan pengajian dan syarat terkini, sila hubungi
            pihak SMTAA.
          </p>
        </div>*/}

      </div>
    </section>
  )
}

export default ProgramsSection
