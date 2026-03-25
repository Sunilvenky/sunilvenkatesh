import Link from 'next/link'
import { PageHeader } from '@/components/ui/page-header'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-center pb-32">
      <PageHeader 
        title="404" 
        subtitle="This space doesn't exist." 
        label="Missing Artifact" 
      />
      <div className="max-w-7xl mx-auto px-8">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors font-sans uppercase tracking-widest text-xs border-b border-border hover:border-foreground pb-2">
          Return to coordinates
        </Link>
      </div>
    </main>
  )
}
