import { MessageCircle, ArrowUpRight, CalendarDays } from "lucide-react"

const contacts = [
  {
    name: "CIK NADIRAH",
    phone: "011 271 62689",
    whatsapp: "601127162689",
  },
  {
    name: "CIK SYAHIDAH",
    phone: "011-11800572",
    whatsapp: "601111800572",
  },
]

function RegistrationSection() {
  return (
    <section
      id="pendaftaran"
      className="scroll-mt-24 overflow-hidden bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Registration information */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9bd7d] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8d6b34]">
            <CalendarDays size={15} />
            Kemasukan Sesi 2027
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#174936] sm:text-4xl lg:text-5xl">
            Pendaftaran 2027
            <span className="mt-1 block text-[#b08b4f]">
              Kini Dibuka
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-600">
            Mulakan langkah membina masa depan bersama Sekolah Menengah
            Tahfiz Al-Attas melalui program SMART TAHFIZ FAST TRACK SPM.
            Hubungi kami untuk mendapatkan maklumat lanjut
            mengenai program dan proses pendaftaran.
          </p>

          <div className="mt-8 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#174936]">
              Pertanyaan dan pendaftaran
            </p>

            {contacts.map((contact) => (
              <a
                key={contact.whatsapp}
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  "Assalamualaikum, saya ingin bertanya tentang pendaftaran SMTAA sesi 2027."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#e8e1d3] bg-white p-4 shadow-sm shadow-[#174936]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b08b4f]/60 hover:shadow-lg hover:shadow-[#174936]/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8f0e9] text-[#174936] transition-colors duration-300 group-hover:bg-[#174936] group-hover:text-white">
                  <MessageCircle size={23} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-[#174936]">
                    {contact.name}
                  </span>
                  <span className="mt-1 block text-sm text-gray-500">
                    {contact.phone}
                  </span>
                </span>

                <span className="flex items-center gap-1 text-sm font-semibold text-[#237a45]">
                  WhatsApp
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Official registration poster */}
        <div className="mx-auto w-full max-w-md lg:ml-auto">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#174936]">
              Maklumat Kemasukan
            </p>
            <span className="rounded-full border border-[#d9bd7d]/50 bg-[#f7f3e9] px-3 py-1 text-xs font-semibold text-[#7a6743]">
              Sesi 2027
            </span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#e8e1d3] bg-white p-2 shadow-xl shadow-[#174936]/10">
            <img
              src="/images/poster-pendaftaran-2027.png"
              alt="Poster rasmi pendaftaran Sekolah Menengah Tahfiz Al-Attas sesi 2027"
              className="h-auto w-full rounded-2xl object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none"
                event.currentTarget.nextElementSibling.style.display = "flex"
              }}
            />

            <div
              className="min-h-80 flex-col items-center justify-center gap-3 rounded-2xl bg-[#f7f3e9] p-8 text-center"
              style={{ display: "none" }}
            >
              <CalendarDays size={38} className="text-[#b08b4f]" />
              <p className="font-semibold text-[#174936]">
                Poster Pendaftaran 2027
              </p>
              <p className="text-sm leading-6 text-gray-500">
                Letakkan poster rasmi anda di public/images/poster-pendaftaran-2027.png
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-xs leading-5 text-gray-500">
            Hubungi kami untuk maklumat lanjut tentang kemasukan.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSection
