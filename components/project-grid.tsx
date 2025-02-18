import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  imageUrl: string
  ctaText: string
  size?: "large" | "medium" | "small"
}

const projects: Project[] = [
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Platform Redesign",
    category: "UX DESIGN",
    imageUrl: "/placeholder.webp?height=600&width=800",
    ctaText: "View Case Study",
    size: "medium",
  },
  {
    id: "architecture-portfolio",
    title: "Modern Architecture Portfolio",
    category: "WEB DEVELOPMENT",
    imageUrl: "/placeholder.webp?height=600&width=400",
    ctaText: "View Project",
    size: "small",
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    category: "BRANDING",
    imageUrl: "/placeholder.webp?height=600&width=400",
    ctaText: "View Case Study",
    size: "small",
  },
  {
    id: "mobile-app",
    title: "Mobile App Interface",
    category: "UI DESIGN",
    imageUrl: "/placeholder.webp?height=400&width=600",
    ctaText: "View Project",
    size: "medium",
  },
  {
    id: "marketing-campaign",
    title: "Digital Marketing Campaign",
    category: "MARKETING",
    imageUrl: "/placeholder.webp?height=400&width=600",
    ctaText: "View Results",
    size: "medium",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    category: "PHOTOGRAPHY",
    imageUrl: "/placeholder.webp?height=400&width=800",
    ctaText: "View Gallery",
    size: "small",
  },
]

export const ProjectBentoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">Recent Projects.</h2>
        <p className="text-gray-600 tracking-tight mt-2">Our latest and best work selected by our creative team.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
        {projects.map((project) => (
          <Link
            href={`/portfolio/${project.id}`}
            key={project.id}
            className={cn("group relative overflow-hidden rounded-3xl", {
              "md:col-span-2 md:row-span-2": project.size === "large",
              "md:col-span-2": project.size === "medium",
            })}
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 group-hover:to-black/70 transition-colors" />
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white">
                {project.category}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tighter mb-2">{project.title}</h3>
                <span className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">
                  {project.ctaText}
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

