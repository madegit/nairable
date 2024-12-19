import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TopGainers() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Card
            title="WGMI Jam"
            time="3:47h"
            bgColor="bg-red-500"
            image="/placeholder.svg?height=200&width=200"
          />
          <Card
            title="WGMI 3D"
            time="5:28 PM"
            bgColor="bg-purple-500"
            image="/placeholder.svg?height=200&width=200"
          />
          <Card
            title="WGMI Podcast"
            time="2:03 PM"
            bgColor="bg-gray-800"
            image="/placeholder.svg?height=200&width=200"
          />
        </div>
      </div>
    </section>
  )
}

function Card({ title, time, bgColor, image }: { 
  title: string
  time: string
  bgColor: string
  image: string
}) {
  return (
    <div className={`${bgColor} rounded-3xl p-4 sm:p-6 aspect-[4/5] flex flex-col justify-between`}>
      <div className="relative h-36 sm:h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-xs sm:text-sm opacity-75">{time}</p>
      </div>
    </div>
  )
}

