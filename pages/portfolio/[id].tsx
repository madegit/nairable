import { ProjectPage } from "@/components/ProjectPage"
import { useRouter } from "next/router"

export default function PortfolioProjectPage() {
  const router = useRouter()
  const { id } = router.query

  return <ProjectPage projectId={id as string} />
}

