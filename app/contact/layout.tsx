import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Sunil Venkatesh",
  description: "Reach me directly for conversations that feel real and work that feels worth doing.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
