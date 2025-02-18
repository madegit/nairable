import Image from "next/image"
import { ArrowLeft, Calendar, User, Tag, LinkIcon } from "lucide-react"
import Link from "next/link"
import { ProjectPageLayout } from "./ProjectPageLayout"

interface Project {
  id: string
  title: string
  category: string
  imageUrl: string
  description: string
  client: string
  date: string
  tags: string[]
  websiteUrl?: string
}

const projectsData: Record<string, Project> = {
  "ecommerce-redesign": {
    id: "ecommerce-redesign",
    title: "E-Commerce Platform Redesign",
    category: "UX DESIGN",
    imageUrl: "/placeholder.webp?height=600&width=800",
    description:
      "A complete overhaul of an e-commerce platform, focusing on improving user experience, streamlining the checkout process, and implementing a responsive design for mobile users.",
    client: "TechMart Inc.",
    date: "June 2023",
    tags: ["UX Design", "UI Design", "E-commerce", "Responsive Web Design"],
    websiteUrl: "https://techmart-redesign.com",
  },
  // Add other projects here...
}

export const ProjectPage = ({ projectId }: { projectId: string }) => {
  const project = projectsData[projectId]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <ProjectPageLayout>
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <Link href="/portfolio" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="relative h-[400px]">
            <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-end">
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl font-bold text-white tracking-tighter">{project.title}</h1>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="col-span-2">
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-600">{project.client}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-gray-400" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.websiteUrl && (
                  <div className="flex items-center">
                    <LinkIcon className="w-5 h-5 mr-2 text-gray-400" />
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  )
}

