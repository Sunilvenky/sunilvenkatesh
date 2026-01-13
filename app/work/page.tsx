"use client"

import Link from "next/link"

export default function Work() {
  const projects = [
    {
      id: "whatsapp-ai-system",
      title: "AI-Powered WhatsApp Content System",
      positioning: "Helping creators stay creative while the system handled the boring parts.",
      context:
        "A growing content team was losing time to repetition. Scheduling. Formatting. Distribution. Reporting. Nearly 60% of their week disappeared into logistics.",
      tension:
        "Automation usually steals control. Creators hate tools that feel rigid, cold, or opinionated. The challenge wasn't automation. It was trust.",
      decision:
        "No dashboards first. No complex interfaces. I designed the system to be spoken to. Creators message it like a person. The system interprets intent, not commands. Scheduling, formatting, publishing, analytics — handled quietly. The goal wasn't power. It was invisibility.",
      result:
        "Used daily by 50+ creators. Weekly distribution time dropped from ~4 hours to ~20 minutes. Adoption stuck because it felt collaborative, not controlling. Most importantly, people forgot they were 'using a tool'.",
      learnings: [
        "Natural language forgives imperfection better than interfaces.",
        "Automation compounds only when it respects existing workflows.",
        "If users forget the system exists, you've designed it right.",
      ],
      tags: ["AI", "Automation", "Product Thinking"],
      featured: true,
    },
    {
      id: "content-platform",
      title: "Content-Driven Platform Redesign",
      positioning: "Getting out of the writer's way.",
      context:
        "A publishing platform with excellent writing and a design that kept interrupting it. The content was strong. The reading experience wasn't.",
      tension: "How do you design without leaving fingerprints?",
      decision:
        "I treated typography as the product. Fonts. Line length. Rhythm. Space. Navigation disappeared when reading began. The interface stepped back so the words could step forward. Designed for skimming when tired and immersion when focused.",
      result:
        "Time on page increased by 45%. Readers engaged deeper and shared more. Feedback praised the writing — not the UI. Which was exactly the point.",
      learnings: [
        "Typography is product design.",
        "Space is an active design choice.",
        "Less interface creates more emotional room.",
      ],
      tags: ["Typography", "Content Design", "Aesthetics"],
      featured: false,
    },
    {
      id: "ai-rag-chatbots",
      title: "AI RAG Chatbots for Businesses",
      positioning: "Trust over cleverness.",
      context:
        "Businesses wanted AI support tools. What they got were chatbots that hallucinated. Accuracy mattered more than novelty.",
      tension: "AI sounds confident even when it's wrong. That confidence destroys trust.",
      decision:
        "Ground everything. Responses were built on Retrieval-Augmented Generation. Internal documents first. Generation second. The system was taught to say 'I don't know', match the company's tone, and stay inside its knowledge boundaries.",
      result:
        "Higher accuracy. Increased internal adoption. Support conversations shifted from basic to meaningful. People trusted it enough to rely on it.",
      learnings: [
        "'I don't know' builds more trust than guessing.",
        "RAG beats raw generation for real businesses.",
        "The best AI feels human, not artificial.",
      ],
      tags: ["AI", "RAG", "Reliability"],
      featured: false,
    },
    {
      id: "saas-platform",
      title: "B2B SaaS Platform Redesign",
      positioning: "Respecting complexity without celebrating it.",
      context: "A mature platform with 500+ features. Powerful. Exhausting. Unusable.",
      tension: "Simplify too much and power users revolt. Do nothing and everyone struggles.",
      decision:
        "I didn't remove features. I removed confusion. Rebuilt the information architecture. Designed for scanning first. Depth when needed. Whitespace used deliberately, not decoratively.",
      result:
        "Support tickets dropped 40%. Onboarding time cut in half. Satisfaction scores rose across all user types.",
      learnings: [
        "Simplicity is about obviousness, not reduction.",
        "Whitespace creates cognitive rest.",
        "Information architecture decides usability long before UI.",
      ],
      tags: ["Enterprise UX", "Information Architecture", "Simplification"],
      featured: false,
    },
    {
      id: "travel-dashboards",
      title: "Travel Management Systems & Dashboards",
      positioning: "Operational clarity.",
      context:
        "Travel operators juggling customers, trips, teams, and logistics across eight disconnected tools. Nothing spoke to each other.",
      tension: "Centralization often creates more complexity, not less.",
      decision:
        "Designed for visibility, not control. One dashboard that shows what matters now, reveals detail only when needed, and mirrors how operators actually think.",
      result: "30% less time managing tools. Faster decisions. More time spent serving customers.",
      learnings: [
        "Good systems disappear into the work.",
        "Structure matters more than features.",
        "Domain experts choreograph best when given frameworks.",
      ],
      tags: ["Systems Design", "Operations", "Dashboards"],
      featured: false,
    },
    {
      id: "travel-websites",
      title: "Travel Websites & Booking Experiences",
      positioning: "Building trust at every decision point.",
      context: "A travel brand struggling to convert visitors. The problem wasn't traffic. It was trust.",
      tension: "How do you design a booking experience that doesn't feel like a sales funnel?",
      decision:
        "Redesigned the entire flow to slow users down. Removed unnecessary steps. Reduced cognitive load. Added contextual trust signals—real testimonials at decision points, flexible date handling with price transparency.",
      result:
        "Engagement increased. Drop-offs reduced. Users completed bookings with confidence, not hesitation. Support tickets about booking confusion dropped 60%.",
      learnings: [
        "Slowing users down can increase conversion.",
        "Trust is built through transparency about limitations.",
        "The best booking flow feels like a conversation, not a transaction.",
      ],
      tags: ["UX Design", "Conversion", "Travel"],
      featured: false,
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← home
          </Link>
        </div>
      </header>

      {/* Intro */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Things I've Built</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Not everything. Just enough to understand how I think.
          </p>
        </div>
      </section>

      {/* Aikra Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <p className="text-sm italic text-muted-foreground mb-4">Building the way others should</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Aikra</h2>
            </div>

            <div className="space-y-8">
              <p className="text-foreground/80 text-lg leading-relaxed">
                Everyone's building web apps now. And everyone's doing it the same way.
                Bloated frameworks. Unnecessary complexity. Design that demands attention instead of earning it.
              </p>

              <p className="text-foreground/80 text-lg leading-relaxed">
                Aikra is different. We help businesses build apps that actually work the way their users think.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">What we build</p>
                  <ul className="space-y-2 text-foreground/70">
                    <li>Web applications that don't fight the user</li>
                    <li>Mobile apps designed for clarity, not novelty</li>
                    <li>Next.js systems that scale without becoming chaos</li>
                    <li>RAG-powered chatbots that know their limits and communicate them</li>
                    <li>ML models deployed with intention, not just possibility</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">The difference</p>
                  <p className="text-foreground/80">
                    We don't build features. We build systems. Systems that respect your users. Systems that don't require constant explanation. Systems that disappear into the work because they're designed around it, not against it.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30">
                <a 
                  href="https://aikra.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-foreground hover:text-primary transition-colors text-sm group"
                >
                  Visit Aikra → <span className="inline-block group-hover:translate-x-1 transition-transform">Live</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-20 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <Link href={`/work/${featuredProject.id}`} className="group block">
              <div className="space-y-12">
                {/* Positioning line */}
                <div>
                  <p className="text-sm italic text-muted-foreground mb-4">{featuredProject.positioning}</p>
                  <h2 className="font-serif text-5xl md:text-6xl font-bold group-hover:text-primary transition-colors">
                    {featuredProject.title}
                  </h2>
                </div>

                {/* Context, Tension, Decision */}
                <div className="grid md:grid-cols-3 gap-8 border-t border-border pt-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Context</p>
                    <p className="text-foreground leading-relaxed">{featuredProject.context}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Tension</p>
                    <p className="text-foreground leading-relaxed">{featuredProject.tension}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Decision</p>
                    <p className="text-foreground italic leading-relaxed">{featuredProject.decision}</p>
                  </div>
                </div>

                {/* Result */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Result</p>
                  <p className="text-foreground leading-relaxed">{featuredProject.result}</p>
                </div>

                {/* What stayed with me */}
                <div className="border-t border-border pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-4">
                    What Stayed With Me
                  </p>
                  <ul className="space-y-2">
                    {featuredProject.learnings.map((learning, i) => (
                      <li key={i} className="text-foreground leading-relaxed">
                        • {learning}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <span className="text-foreground font-serif text-sm group-hover:text-primary transition-colors">
                    See inside →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {otherProjects.map((project) => (
              <Link key={project.id} href={`/work/${project.id}`} className="group block">
                <div className="space-y-6">
                  {/* Positioning + Title */}
                  <div>
                    <p className="text-sm italic text-muted-foreground mb-2">{project.positioning}</p>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Context & Tension */}
                  <div className="grid md:grid-cols-2 gap-8 text-foreground leading-relaxed">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Context</p>
                      <p>{project.context}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Tension</p>
                      <p>{project.tension}</p>
                    </div>
                  </div>

                  {/* Decision & Result */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Decision</p>
                      <p className="text-foreground italic leading-relaxed">{project.decision}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Result</p>
                      <p className="text-foreground leading-relaxed">{project.result}</p>
                    </div>
                  </div>

                  {/* See inside link */}
                  <div className="pt-2 text-primary group-hover:translate-x-1 transition-transform inline-block">
                    See inside →
                  </div>
                </div>
                <div className="border-b border-border mt-8" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-muted-foreground font-serif text-lg">
            Other work exists. This is enough to understand how I think.
          </p>
          <Link
            href="/contact"
            className="inline-block text-foreground hover:text-primary transition-colors"
          >
            → Questions? Let's talk
          </Link>
        </div>
      </section>

      {/* Space for bottom nav */}
      <div className="h-24" />
    </main>
  )
}
