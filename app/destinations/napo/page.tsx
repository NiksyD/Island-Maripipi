import { getDestination } from "@/lib/destinations"
import DestinationPageClient from "../components/DestinationPageClient"

export async function generateMetadata() {
  const destination = getDestination("napo")

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

export default function NapoPage() {
  return <DestinationPageClient destinationSlug="napo" />
} 