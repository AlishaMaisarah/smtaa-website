import { MessageCircle, ArrowUpRight } from "lucide-react"

function FloatingFormButton() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScjBpUoB8WA6yjRKg3RDXUscPeC8akhnwhNWa8puKbidQHLUQ/viewform"

  return (
    <a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buka borang pertanyaan SMTAA"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full bg-[#174936] py-3 pl-4 pr-5 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#103b2c] focus:outline-none focus:ring-4 focus:ring-[#d9bd7d]/60 sm:bottom-7 sm:right-7"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9bd7d] text-[#174936]">
        <MessageCircle size={23} strokeWidth={2} />
      </span>

      <span className="text-left">
        <span className="block text-sm font-bold">
          Anda berminat?
        </span>
        <span className="block text-xs text-white/75">
          DAFTAR SEKARANG
        </span>
      </span>

      <ArrowUpRight
        size={17}
        className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  )
}

export default FloatingFormButton
