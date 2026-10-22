import { BookOpen, GraduationCap, Landmark, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

function AboutSection() {
  return (
    <section
      id="pengenalan"
      className="scroll-mt-24 bg-[#f7f3e9] px-6 py-20 lg:px-8 lg:py-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* LEFT: School introduction */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b08b4f]">
            Pengenalan SMTAA
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#174936] sm:text-4xl lg:text-5xl">
            Membina Generasi Huffaz Berilmu dan Berakhlak
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Sekolah Menengah Tahfiz Al-Attas (SMTAA) merupakan sebuah
            institusi pendidikan tahfiz yang berdaftar di bawah Jabatan
            Hal Ehwal Agama Islam Negeri Sembilan (JHEAINS). SMTAA
            beriltizam untuk memartabatkan Al-Quran serta melahirkan
            generasi huffaz yang berilmu, berakhlak dan berdaya saing.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            Melalui program{" "}
            <span className="font-semibold text-[#174936]">
              SMART TAHFIZ FAST TRACK SPM
            </span>
            , pelajar daripada latar belakang tahfiz, madrasah dan pondok
            berpeluang memperoleh kelayakan Sijil Pelajaran Malaysia (SPM)
            serta meneroka laluan pendidikan lanjutan.
          </p>

          <Link
            to="/pembelajaran"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#174936] px-6 py-3 font-medium text-white transition hover:bg-[#103b2c]"
          >
            Kenali Program Kami
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* RIGHT: Key information cards */}
        <div className="relative">
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-[#d9bd7d]/20 blur-2xl" />

          <div className="relative space-y-5">
            <div className="rounded-3xl border border-[#e8e1d3] bg-white p-7 shadow-sm shadow-[#174936]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#174936]/10 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#174936] text-[#d9bd7d]">
                <BookOpen size={27} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#174936]">
                Memartabatkan Al-Quran
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Membentuk generasi yang menghargai ilmu Al-Quran,
                mengamalkan nilai murni dan mengutamakan pembentukan sahsiah.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#e8e1d3] bg-white p-6 shadow-sm shadow-[#174936]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#174936]/10">
                <GraduationCap
                  size={29}
                  className="text-[#b08b4f]"
                  strokeWidth={1.7}
                />

                <h3 className="mt-4 font-bold text-[#174936]">
                  Laluan Akademik
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Peluang memperoleh kelayakan SPM dan menyokong laluan pendidikan lanjutan ke peringkat Diploma atau TVET.
                </p>
              </div>

              <div className="rounded-3xl border border-[#e8e1d3] bg-white p-6 shadow-sm shadow-[#174936]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#174936]/10">
                <Landmark
                  size={29}
                  className="text-[#b08b4f]"
                  strokeWidth={1.7}
                />

                <h3 className="mt-4 font-bold text-[#174936]">
                  Latar Belakang
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Institusi tahfiz yang memberi tumpuan kepada ilmu,
                  Al-Quran dan pembentukan generasi masa hadapan.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
