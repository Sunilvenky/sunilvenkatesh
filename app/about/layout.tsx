import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Sunil Venkatesh",
  description: "The timeline of becoming a systems thinker and product designer.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
