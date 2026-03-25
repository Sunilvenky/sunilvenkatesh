"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Magnetic } from "@/components/ui/magnetic"
import { PageHeader } from "@/components/ui/page-header"
import { SectionCTA } from "@/components/ui/section-cta"
import { SectionReveal } from "@/components/ui/section-reveal"
import { ArrowUpRight, ArrowRight } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export default function Work() {
  const projects = [
    {
      id: "whatsapp-ai-system",
      title: "WhatsApp AI System",
      positioning: "Removing logistics from creativity.",
      decision: "No dashboards. I designed the system to be spoken to. Creators message it like a person.",
      tags: ["AI", "Architecture"],
      featured: true,
      gridSpan: "md:col-span-2 md:row-span-2",
      image: "/whatsapp-ai-content-system.jpg",
    },
    {
      id: "content-platform",
      title: "Platform Redesign",
      positioning: "Typography as the product.",
      decision: "Navigation disappeared when reading began. The interface stepped back.",
      tags: ["Typography", "Design"],
      gridSpan: "md:col-span-1 md:row-span-1",
      image: "/content-platform-design.jpg",
    },
    {
      id: "ai-rag-chatbots",
      title: "RAG Systems",
      positioning: "Trust over cleverness.",
      decision: "Ground everything. The system was taught to say 'I don't know'.",
      tags: ["AI", "RAG"],
      gridSpan: "md:col-span-1 md:row-span-1",
      image: "/ai-rag-chatbot-system.jpg",
    },
    {
      id: "saas-platform",
      title: "B2B SaaS",
      positioning: "Obviousness over complexity.",
      decision: "I removed confusion, not features. Information architecture decided usability.",
      tags: ["UX", "Enterprise"],
      gridSpan: "md:col-span-1 md:row-span-2",
      image: "/saas-platform-redesign.jpg",
    },
    {
      id: "travel-dashboards",
      title: "Travel Ops",
      positioning: "Operational clarity.",
      decision: "Designed for visibility, not control. Mirrors how operators actually think.",
      tags: ["Systems", "Dashboards"],
      gridSpan: "md:col-span-2 md:row-span-1",
      image: "/travel-management-dashboard.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground pb-48">
      {/* Navigation handled by global Navigation component */}

      {/* Intro */}
      <PageHeader 
        title="Artifacts" 
        subtitle="Not everything. Just enough to understand how I think."
        label="Selected Work"
      />

      {/* Bento Grid */}
      <section className="px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Aikra Action */}
      <section className="px-8 border-t border-border/10 py-32 bg-[oklch(0.12_0_0)] text-[oklch(0.95_0_0)]">
        <SectionReveal className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
          <div className="max-w-2xl space-y-8">
            <p className="font-sans text-xs uppercase tracking-[0.4em] opacity-40">The Studio</p>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-tight">Aikra</h2>
            <p className="text-xl md:text-2xl font-sans font-light opacity-80 leading-relaxed">
              Helping businesses build apps that actually work the way their users think. 
              We don't build features. We build systems that disappear into the work.
            </p>
          </div>
          
          <div className="pb-4">
            <Magnetic strength={0.4}>
              <a 
                href="https://aikra.live" 
                target="_blank" 
                className="group relative inline-flex h-48 w-48 items-center justify-center rounded-full border border-[oklch(0.95_0_0)]/20 transition-colors hover:bg-[oklch(0.95_0_0)] hover:text-black"
              >
                <span className="font-serif text-lg">Visit live</span>
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </Magnetic>
          </div>
        </SectionReveal>
      </section>

      {/* Closing CTA */}
      <SectionCTA message="Other work exists. This is enough to understand how I think." />
    </main>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isImageHoverScale = "group-hover:scale-105"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl surface-elevated transform-gpu",
        project.gridSpan
      )}
    >
      <Link href={`/work/${project.id}`} className="absolute inset-0 z-20" />
      
      {/* Background Image & Scrim */}
      <img 
        src={project.image} 
        alt={project.title}
        className={cn("absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out z-0", isImageHoverScale)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-0 transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 p-10 flex flex-col justify-between h-full text-[oklch(0.95_0_0)]">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest opacity-60 font-sans glass px-3 py-1 rounded-full border-white/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs opacity-40 font-medium">0{index + 1} / 05</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white text-black w-8 h-8 rounded-full flex justify-center items-center">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <h3 className="font-serif text-3xl md:text-5xl leading-tight text-balance">
            {project.title}
          </h3>
          <p className="font-sans text-sm italic opacity-70 border-l-2 border-white/30 pl-4">{project.positioning}</p>
          
          <div className="pt-6 overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-2">The Core Decision</p>
            <p className="text-sm font-sans font-light leading-relaxed text-balance">
              {project.decision}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
