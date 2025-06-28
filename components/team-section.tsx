
"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Linkedin, Twitter, Mail } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Creative Director",
    bio: "Passionate about creating meaningful digital experiences with over 8 years in design.",
    image: "/user1.JPG",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    email: "alex@nairable.com"
  },
  {
    id: "2", 
    name: "Sarah Chen",
    role: "UX/UI Designer",
    bio: "Specializes in user-centered design and creating intuitive digital interfaces.",
    image: "/user2.JPG",
    linkedin: "https://linkedin.com/in/sarahchen",
    email: "sarah@nairable.com"
  },
  {
    id: "3",
    name: "Marcus Williams",
    role: "Frontend Developer",
    bio: "Expert in React, Next.js and modern web technologies. Loves bringing designs to life.",
    image: "/user3.JPG",
    linkedin: "https://linkedin.com/in/marcuswilliams",
    twitter: "https://twitter.com/marcuswilliams",
    email: "marcus@nairable.com"
  },
  {
    id: "4",
    name: "Emma Davis",
    role: "Digital Marketing Strategist",
    bio: "Data-driven marketer focused on growth strategies and brand development.",
    image: "/user4.JPG",
    linkedin: "https://linkedin.com/in/emmadavis",
    email: "emma@nairable.com"
  },
  {
    id: "5",
    name: "David Rodriguez",
    role: "Brand Strategist",
    bio: "Helps brands find their voice and create compelling narratives that resonate.",
    image: "/user5.JPG",
    linkedin: "https://linkedin.com/in/davidrodriguez",
    twitter: "https://twitter.com/davidrodriguez",
    email: "david@nairable.com"
  },
  {
    id: "6",
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Ensures seamless project delivery with exceptional attention to detail and communication.",
    image: "/user6.jpg",
    linkedin: "https://linkedin.com/in/lisathompson",
    email: "lisa@nairable.com"
  }
]

export function TeamSection() {
  return (
    <section className="py-20 px-5 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Meet Our
            <br />
            <span className="text-gray-600">Creative Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto tracking-tight">
            We're a diverse group of creatives, strategists, and technologists 
            passionate about bringing your vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-3 border-white" />
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold tracking-tighter mb-2">{member.name}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gray-600" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold tracking-tighter mb-4">
            Ready to work with us?
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Let's discuss your project and see how our team can help bring your vision to life.
          </p>
          <a href="https://wa.me/message/HZ7KP2RUZNY2G1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black text-white px-8 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-black/90">
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
