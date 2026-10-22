import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import FloatingFormButton from "./components/FloatingFormButton"

import HomePage from "./pages/HomePage"
import FacilitiesPage from "./pages/FacilitiesPage"
import LearningPage from "./pages/LearningPage"
import TestimonialsPage from "./pages/TestimonialsPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fasiliti" element={<FacilitiesPage />} />
          <Route path="/pembelajaran" element={<LearningPage />} />
          <Route path="/testimoni" element={<TestimonialsPage />} />
          <Route path="/hubungi" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="bg-[#103b2c] px-6 py-8 text-center text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} Sekolah Menengah Tahfiz Al Attas.
        </p>
        <p className="mt-2 text-[#d9bd7d]">
          Akhlak • Ilmu • Amal
        </p>
      </footer>

      <FloatingFormButton />
    </BrowserRouter>
  )
}

export default App
