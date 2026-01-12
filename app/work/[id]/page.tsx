"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string

  const projectsData: Record<string, any> = {
    "whatsapp-ai-system": {
      title: "AI-Powered WhatsApp Content System",
      year: "2024",
      role: "Full Stack Engineer & Product Designer",
      context:
        "A growing content team was spending 60% of their time on repetitive tasks—scheduling, formatting, distribution, analytics compilation. The manual workflow was becoming a bottleneck to their growth.",
      challenge:
        "How do you automate the messy parts of content operations without making creators feel like they've lost control? Automation can feel cold and disconnecting when not done right.",
      solution:
        "Built an intelligent WhatsApp bot that understands context from natural language instructions. Instead of clicking through interfaces, creators just message the system. It handles scheduling, format conversion, multi-platform publishing, and analytics aggregation. The magic was in making it feel like a smart assistant, not a restrictive system.",
      impact:
        "50+ content creators now use it daily. Content distribution time dropped from 4 hours to 20 minutes per week per creator. Most importantly—they report the system feels like it's working with them, not against them. Monthly improvements based on real usage patterns.",
      learnings: [
        "Natural language interfaces are more forgiving than structured forms. Users are patient with imperfection if they feel understood.",
        "Automation value compounds when you respect the creator's workflow, not enforce your own.",
        "Invisible systems beat flashy ones. If people forget they're using a tool, it's working.",
        "Iterate with real creators early. Your assumptions about their pain points will be wrong.",
      ],
      focusAreas: ["AI/ML", "Automation", "Product Thinking", "Creator Tools"],
      image: "/whatsapp-ai-content-system.jpg",
    },
    "travel-websites": {
      title: "Travel Websites & Booking Experiences",
      year: "2023-2024",
      role: "Product Designer & UX Lead",
      context:
        "A travel company with strong marketing was puzzled by low conversion rates. Traffic was high but bookings weren't following. The problem wasn't awareness—it was trust and clarity during the booking journey.",
      challenge:
        "How do you design a booking experience that doesn't feel like a sales funnel? Travelers have deep questions about destinations, logistics, and themselves. Traditional booking flows force speed over understanding.",
      solution:
        "Redesigned the entire journey to honor how people actually decide. Added contextual trust signals—real traveler testimonials at decision points, flexible date handling with price transparency, a staged disclosure that revealed complexity only when needed. Slowed the process down intentionally. Reduced steps but increased clarity.",
      impact:
        "Engagement metrics improved significantly. Users spent more time on critical pages but didn't drop off. Conversion rates increased. Most meaningful: support tickets about booking confusion dropped by 60%.",
      learnings: [
        "Slowing users down can increase conversion if they're converting toward confidence, not speed.",
        "Trust is built through transparency about limitations, not glossing over them.",
        "The best booking flow is one that feels like a conversation, not a transaction.",
        "Real user research at each step beats assumptions. What seems like friction might be necessary reflection.",
      ],
      focusAreas: ["UX Design", "Conversion Optimization", "Travel", "Trust Design"],
      image: "/travel-booking-experience.jpg",
    },
    "travel-dashboards": {
      title: "Travel Management Systems & Dashboards",
      year: "2023",
      role: "Systems Designer",
      context:
        "Travel operators were managing customer relationships, trip logistics, operations, and communications across 8+ disconnected tools. Information lived in different places. Nothing connected.",
      challenge:
        "How do you consolidate complex travel operations into one coherent system without oversimplifying the reality of the business?",
      solution:
        "Built centralized dashboards that showed operators exactly what mattered—without drowning them in data. Focused on visibility over control. Made it easy to see customer journeys, trip statuses, and team workflows from one place. Designed information hierarchies that scaled from overview to deep detail without friction.",
      impact:
        "Teams reported spending 30% less time managing tools and more time serving customers. Operational clarity improved. Decision-making got faster.",
      learnings: [
        "Good systems disappear into the work. If people remember they're using a dashboard, the design failed.",
        "Centralization without simplification creates new problems. Structure matters more than features.",
        "Operators know their domain better than designers. Build frameworks, let them define the choreography.",
      ],
      focusAreas: ["Systems Design", "Operations", "Dashboard Design", "Information Architecture"],
      image: "/travel-management-dashboard.jpg",
    },
    "saas-platform": {
      title: "B2B SaaS Platform Redesign",
      year: "2023",
      role: "Product Designer",
      context:
        "A mature B2B platform had accumulated 500+ features over years of updates. Users complained they couldn't find anything. New users were overwhelmed. The platform was powerful but unusable.",
      challenge: "How do you simplify without removing the depth that enterprise users depend on?",
      solution:
        "Didn't remove features—reorganized the entire information architecture. Removed visual noise. Used white space strategically. Designed for scanability first, depth second. Made common tasks obvious. Buried advanced settings where power users could find them.",
      impact:
        "Support tickets dropped 40%. User satisfaction scores improved significantly across all user segments. Onboarding time for new users cut in half.",
      learnings: [
        "Simplicity isn't about having fewer features. It's about making the right ones obvious and the rest accessible.",
        "Whitespace is a tool, not decoration. It creates cognitive rest.",
        "Information architecture is the unsung hero of product design.",
      ],
      focusAreas: ["Product Design", "Information Architecture", "Simplification", "Enterprise UX"],
      image: "/saas-platform-redesign.jpg",
    },
    "ai-rag-chatbots": {
      title: "AI RAG Chatbots for Businesses",
      year: "2024",
      role: "AI Engineer & Product Designer",
      context:
        "Businesses wanted AI assistance for customer support but generic chatbots that hallucinated information eroded trust. They needed accuracy grounded in their specific knowledge.",
      challenge:
        "How do you build AI that feels intelligent but maintains accuracy? How do you make it speak the business's language, not AI language?",
      solution:
        "Implemented Retrieval-Augmented Generation (RAG) systems tailored to each business's knowledge base. Instead of generating from general training, the system retrieves from internal docs first, then generates answers. Focused heavily on preventing hallucinations and maintaining tone consistency with the brand.",
      impact:
        "Businesses reported higher accuracy and user trust. Internal teams actually used the tool because they trusted it. Support volume shifted from basic questions to complex ones.",
      learnings: [
        "Users trust systems that are transparent about limitations. 'I don't know' builds more trust than uncertain confidence.",
        "Grounding AI in real data is as important as the model itself. RAG > raw generation for business use.",
        "The best AI interfaces are invisible. Users should feel like they're talking to a knowledgeable person, not a system.",
      ],
      focusAreas: ["AI/ML", "RAG", "Reliability", "Chatbot Design"],
      image: "/ai-rag-chatbot-system.jpg",
    },
    "content-platform": {
      title: "Content-Driven Platform Redesign",
      year: "2023",
      role: "Design Lead",
      context:
        "A publishing platform had excellent writers but the design buried their work. Beautiful writing felt cramped and secondary to interface elements.",
      challenge: "How do you design a reading experience that gets out of the way and lets writing shine?",
      solution:
        "Stripped back the interface. Focused on typography—careful font choices, sizing, line height, measure. Added breathing room. Removed navigation clutter from the reading view. Designed for different reading speeds and moods.",
      impact:
        "Time on page increased 45%. Readers engaged deeper. User comments and shares indicated higher appreciation for the writing itself.",
      learnings: [
        "Typography is product design. Font choice, size, spacing—these are feature decisions.",
        "Less interface creates more possibility for connection with content.",
        "Readers have different modes. Design for skimming and deep reading, not one or the other.",
      ],
      focusAreas: ["Design", "Typography", "Content Design", "Aesthetics"],
      image: "/content-platform-design.jpg",
    },
  }

  const project = projectsData[projectId]

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Project not found</h1>
          <Link href="/work" className="text-primary hover:text-primary/80">
            Back to work →
          </Link>
        </div>
      </main>
    )
  }

  const allProjectIds = Object.keys(projectsData)
  const currentIndex = allProjectIds.indexOf(projectId)
  const nextProjectId = allProjectIds[(currentIndex + 1) % allProjectIds.length]
  const prevProjectId = allProjectIds[(currentIndex - 1 + allProjectIds.length) % allProjectIds.length]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border py-6 px-4 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/work" className="text-accent hover:text-accent/80 transition-colors text-sm">
            ← back to work
          </Link>
          <div className="text-xs text-muted-foreground">
            {currentIndex + 1} of {allProjectIds.length}
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-4">{project.year}</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4">{project.title}</h1>
            <p className="text-muted-foreground">Role: {project.role}</p>
          </div>

          {/* Hero image */}
          <div className="rounded-lg overflow-hidden border border-border">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Context */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Context</p>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl">{project.context}</p>
          </div>

          {/* Challenge */}
          <div className="space-y-4 border-t border-border pt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">The Challenge</h2>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-4 border-t border-border pt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">The Solution</h2>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl">{project.solution}</p>
          </div>

          {/* Impact */}
          <div className="space-y-4 border-t border-border pt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">The Impact</h2>
            <p className="text-lg text-foreground leading-relaxed max-w-3xl">{project.impact}</p>
          </div>

          {/* Key Learnings */}
          <div className="space-y-8 border-t border-border pt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Key Learnings</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.learnings.map((learning: string, index: number) => (
                <div key={index} className="p-6 bg-background border border-border rounded-lg">
                  <p className="text-foreground leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="space-y-4 border-t border-border pt-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {project.focusAreas.map((area: string) => (
                <span
                  key={area}
                  className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/30 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-8">Continue exploring</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href={`/work/${prevProjectId}`} className="group">
              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group-hover:bg-card/50">
                <p className="text-xs text-muted-foreground mb-2">← Previous</p>
                <h4 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">
                  {projectsData[prevProjectId].title}
                </h4>
              </div>
            </Link>
            <Link href={`/work/${nextProjectId}`} className="group">
              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group-hover:bg-card/50">
                <p className="text-xs text-muted-foreground mb-2">Next →</p>
                <h4 className="font-serif text-lg font-bold group-hover:text-primary transition-colors">
                  {projectsData[nextProjectId].title}
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to work CTA */}
      <section className="py-20 px-4 bg-card text-center border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8">Ready to see what else I've built?</p>
          <Link href="/work" className="inline-block text-primary hover:text-primary/80 transition-colors font-serif">
            Back to all work →
          </Link>
        </div>
      </section>
    </main>
  )
}
