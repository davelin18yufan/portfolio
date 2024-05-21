import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects"
import Clients from "@/components/Clients"
import { FloatingNav } from "@/components/ui/FloatingNavbar"
import { navItems } from "@/data"
import Experiences from "@/components/Experiences"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
      </div>
    </main>
  )
}
