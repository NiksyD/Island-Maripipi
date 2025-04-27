import { getDestination } from "@/lib/destinations"
import DestinationPageClient from "../components/DestinationPageClient"

export async function generateMetadata() {
  const destination = getDestination("sambawan")

  if (!destination) {
    return {
      title: "Destination Not Found",
    }
  }

  return {
    title: `${destination.name} - Maripipi Island`,
    description: destination.description,
  }
}

export default function SambawanPage() {
  return <DestinationPageClient destinationSlug="sambawan" />
} 