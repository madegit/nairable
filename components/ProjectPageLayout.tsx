import type React from "react"
import { NavHeader } from "./nav-header"
import { Footer } from "./footer"

export const ProjectPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavHeader />
      <main className="flex-grow mt-20">{children}</main>
      <Footer />
    </div>
  )
}

