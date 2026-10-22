import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const navLinks = [
  { label: "Laman Utama", href: "/" },
  { label: "Fasiliti", href: "/fasiliti" },
  { label: "Pembelajaran", href: "/pembelajaran" },
  { label: "Testimoni", href: "/testimoni" },
  { label: "Hubungi Kami", href: "/hubungi" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f7f3e9]/95 shadow-md backdrop-blur-md"
          : "bg-[#f7f3e9]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo-smtaa.png"
              alt="Logo Sekolah Menengah Tahfiz Al-Attas"
              className="h-12 w-12 shrink-0 object-contain"
            />

            <div>
              <p className="text-lg font-bold tracking-wide text-[#174936]">
                SMTAA
              </p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#7a6743]">
                Sekolah Menengah Tahfiz Al-Attas
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    link.href === "/hubungi"
                      ? `rounded-full px-5 py-3 ${
                          isActive
                            ? "bg-[#103b2c]"
                            : "bg-[#174936] hover:bg-[#103b2c]"
                        } text-white`
                      : isActive
                        ? "text-[#b08b4f]"
                        : "text-[#174936] hover:text-[#b08b4f]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-[#174936] lg:hidden"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="mb-4 rounded-2xl border border-[#e8e1d3] bg-white p-5 shadow-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#f7f3e9] text-[#b08b4f]"
                        : "text-[#174936] hover:bg-[#f7f3e9] hover:text-[#b08b4f]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
