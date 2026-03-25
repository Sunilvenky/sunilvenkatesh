import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notes | Sunil Venkatesh",
  description: "Observations that didn't fit anywhere else.",
}

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
