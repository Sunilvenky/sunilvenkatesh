import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Travel | Sunil Venkatesh",
  description: "Travel is how I've learned to observe before judging. Records from the mountains.",
}

export default function TravelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
