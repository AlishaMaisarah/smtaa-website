import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section
      id="utama"
      className="relative overflow-hidden bg-[#f7f3e9]"
    >
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#dfe9df] opacity-70" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#eadfc8] opacity-60" />

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: Main introduction */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c9a86a]/50 bg-white/70 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#b08b4f]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7a6743]">
                Pendidikan • Al-Quran • Akhlak
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#174936] sm:text-5xl lg:text-6xl xl:text-7xl">
              Membentuk Generasi
              <span className="mt-2 block text-[#b08b4f]">
                Berilmu & Berakhlak
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f625b] sm:text-lg">
              Selamat datang ke Sekolah Menengah Tahfiz Al-Attas.
              Membina generasi huffaz melalui pendidikan Al-Quran,
              pembentukan sahsiah dan peluang pendidikan akademik.
            </p>

            <div className="mt-7 border-l-2 border-[#b08b4f] pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b7145]">
                Program Utama
              </p>
              <p className="mt-2 text-lg font-bold leading-snug text-[#174936] sm:text-xl">
                SMART TAHFIZ FAST TRACK SPM
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Laluan untuk pelajar tahfiz meneroka kelayakan akademik SPM.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/pembelajaran"
                className="group inline-flex items-center gap-2 rounded-full bg-[#174936] px-6 py-3.5 font-medium text-white transition hover:bg-[#103b2c]"
              >
                Terokai Program
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#pengenalan"
                className="inline-flex items-center gap-2 rounded-full border border-[#174936]/25 bg-white/60 px-6 py-3.5 font-medium text-[#174936] transition hover:bg-white"
              >
                Kenali SMTAA
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Right: School photograph */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#c9a86a]/70 sm:-right-4 sm:-top-4" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#174936] shadow-xl">
              <img
                src="/images/smtaa-hero.jpg"
                alt="Sekolah Menengah Tahfiz Al-Attas"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none"
                }}
              />

              {/* Fallback while the school photo is unavailable */}
              <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#174936] via-[#28604b] to-[#102f25] p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d9bd7d]/60">
                  <span className="text-4xl text-[#d9bd7d]">ع</span>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#d9bd7d]">
                  Sekolah Menengah
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Tahfiz Al-Attas
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/75">
                  Ilmu • Iman • Amal
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102f25]/95 via-[#102f25]/60 to-transparent px-6 pb-7 pt-20 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd7d]">
                  Sekolah Menengah Tahfiz Al-Attas
                </p>
                <p className="mt-2 text-lg font-semibold leading-7 text-white">
                  Membina ilmu, memelihara akhlak, meneroka masa depan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
