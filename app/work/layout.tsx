import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work | Sunil Venkatesh",
  description: "Selected artifacts, systems design, and product engineering portfolio.",
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
