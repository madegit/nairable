export interface Project {
  id: string
  title: string
  category: string
  imageUrl: string
  ctaText: string
  size?: "large" | "medium" | "small"
  description: string
  client: string
  date: string
  tags: string[]
  websiteUrl?: string
}

export const projects: Project[] = [
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Platform Redesign",
    category: "UX DESIGN",
    imageUrl: "/placeholder.webp?height=600&width=800",
    ctaText: "View Case Study",
    size: "large",
    description:
      "A complete overhaul of an e-commerce platform, focusing on improving user experience, streamlining the checkout process, and implementing a responsive design for mobile users.",
    client: "TechMart Inc.",
    date: "June 2023",
    tags: ["UX Design", "UI Design", "E-commerce", "Responsive Web Design"],
    websiteUrl: "https://techmart-redesign.com",
  },
  {
    id: "architecture-portfolio",
    title: "Modern Architecture Portfolio",
    category: "WEB DEVELOPMENT",
    imageUrl: "/placeholder.webp?height=600&width=400",
    ctaText: "View Project",
    size: "medium",
    description:
      "A sleek, minimalist portfolio website for a renowned architecture firm, showcasing their projects with immersive 3D renderings and interactive floor plans.",
    client: "ArchVision Studios",
    date: "April 2023",
    tags: ["Web Development", "3D Rendering", "Interactive Design"],
    websiteUrl: "https://archvision-portfolio.com",
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    category: "BRANDING",
    imageUrl: "/placeholder.webp?height=600&width=400",
    ctaText: "View Case Study",
    size: "medium",
    description:
      "Development of a comprehensive brand identity system for a tech startup, including logo design, color palette, typography, and brand guidelines.",
    client: "NexGen Solutions",
    date: "March 2023",
    tags: ["Branding", "Logo Design", "Brand Guidelines"],
  },
  {
    id: "mobile-app",
    title: "Mobile App Interface",
    category: "UI DESIGN",
    imageUrl: "/placeholder.webp?height=400&width=600",
    ctaText: "View Project",
    size: "small",
    description:
      "Design of an intuitive and visually appealing mobile app interface for a fitness tracking application, focusing on user engagement and data visualization.",
    client: "FitTrack",
    date: "May 2023",
    tags: ["UI Design", "Mobile App", "User Experience"],
    websiteUrl: "https://fittrack-app.com",
  },
  {
    id: "marketing-campaign",
    title: "Digital Marketing Campaign",
    category: "MARKETING",
    imageUrl: "/placeholder.webp?height=400&width=600",
    ctaText: "View Results",
    size: "small",
    description:
      "A multi-channel digital marketing campaign for a sustainable fashion brand, incorporating social media, influencer partnerships, and targeted advertising.",
    client: "EcoChic Apparel",
    date: "July 2023",
    tags: ["Digital Marketing", "Social Media", "Influencer Marketing"],
  },
  {
    id: "product-photography",
    title: "Product Photography",
    category: "PHOTOGRAPHY",
    imageUrl: "/placeholder.webp?height=400&width=800",
    ctaText: "View Gallery",
    size: "medium",
    description:
      "A series of high-quality product photographs for a luxury watch brand, showcasing the intricate details and craftsmanship of their timepieces.",
    client: "Chrono Elegance",
    date: "February 2023",
    tags: ["Product Photography", "Luxury Goods", "Visual Storytelling"],
    websiteUrl: "https://chrono-elegance-gallery.com",
  },
]

