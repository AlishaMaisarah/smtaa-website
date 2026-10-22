import { MapPin, Phone, ArrowUpRight, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Alamat",
    value:
      "Lot 1, GF, Jalan Kaunselor 2, College Height Garden Resort, 71700 Pajam, Mantin, Negeri Sembilan",
  },
  {
    icon: Phone,
    title: "Cik Nadirah",
    value: "011 271 62689",
  },
]

function ContactSection() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Sekolah+Menengah+Tahfiz+Al+Attas+Pajam+Mantin+Negeri+Sembilan"

  return (
    <section
      id="hubungi"
      className="scroll-mt-24 bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#b08b4f]">
            Hubungi Kami
          </p>

          <h2 className="max-w-lg text-3xl font-bold leading-tight text-[#174936] sm:text-4xl">
            Mulakan perjalanan pendidikan anda bersama SMTAA
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-600">
            Ingin mengetahui lebih lanjut tentang program Smart Tahfiz Fast
            Track SPM, syarat kemasukan atau bantuan pengajian? Hubungi kami untuk mendapatkan maklumat terkini.
          </p>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#174936] px-6 py-3 font-medium text-white transition hover:bg-[#103b2c]"
          >
            Lihat Lokasi <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="space-y-4">
          {contactDetails.map((item) => {
            const Icon = item.icon

            let href = null

            if (item.title === "Telefon") {
              href = "tel:+6067582400"
            } else if (item.title === "E-mel") {
              href = `mailto:${item.value}`
            }

            const content = (
              <div className="flex items-start gap-5 rounded-2xl border border-[#e8e1d3] bg-[#f7f3e9]/60 p-6 transition hover:border-[#c9b995] hover:bg-[#f7f3e9]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174936] text-[#d9bd7d]">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#174936]">
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words text-sm leading-7 text-gray-600">
                    {item.value}
                  </p>
                </div>
              </div>
            )

            return href ? (
              <a
                key={item.title}
                href={href}
                className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#b08b4f]"
              >
                {content}
              </a>
            ) : (
              <div key={item.title}>{content}</div>
            )
          })}

          <div className="flex items-start gap-5 rounded-2xl bg-[#174936] p-6 text-white">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9bd7d]">
              <Clock size={23} strokeWidth={1.7} />
            </div>

            <div>
              <h3 className="font-semibold">Pertanyaan Kemasukan</h3>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Hubungi kami untuk mengesahkan tarikh pengambilan,
                syarat kemasukan dan waktu urusan terkini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection