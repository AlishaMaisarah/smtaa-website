import Hero from "../components/Hero"
import RegistrationSection from "../components/RegistrationSection"
import AboutSection from "../components/AboutSection"
import AchievementsSection from "../components/AchievementsSection"

function HomePage() {
  return (
    <main>
      <Hero />
      <RegistrationSection />
      <AboutSection />
      <AchievementsSection />
    </main>
  )
}

export default HomePage