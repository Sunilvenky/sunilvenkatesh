"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

export default function TravelDetail() {
  const params = useParams()
  const destinationId = params.id

  const destinations: Record<string, any> = {
    "1": {
      place: "Spiti Valley, India",
      dates: "2023",
      theme: "Silence is productive",
      opening: "Three weeks in one of India's most remote valleys, where the land doesn't entertain you. It waits.",
      description: `At 12,500 feet, the mountains don't react to urgency.
They've outlasted empires. They don't care about your plans.

There was no signal. No background noise.
Just long days, cold air, and thoughts you can't scroll past.

The first discomfort wasn't the altitude.
It was the absence of distraction.

I kept checking my phone out of habit, not need.
There was nothing there. Slowly, that nothing spread inward.

Silence in Spiti isn't empty.
It presses on you.
It removes excuses.

Decisions became simple because there was nothing to hide behind.
No dopamine. No urgency theater. No artificial importance.

What remained felt sharp.

I wrote without purpose.
Thought without outcome.
Not to produce. Just to see what surfaced.`,
      reflection: `Spiti didn't give me inspiration. It gave me subtraction. I didn't come back with more ideas. I came back with fewer, heavier ones. Spiti didn't tell me what to build. It taught me what deserves to be left untouched.`,
      highlights: [
        "Monasteries carved into cliffs, unconcerned with relevance",
        "Prayer flags moving more than my thoughts",
        "Conversations where pauses mattered more than answers",
        "Writing without purpose, just to see what surfaced",
        "Realizing how much effort I waste on things that don't matter",
      ],
    },
    "2": {
      place: "Ladakh, India",
      dates: "2023",
      theme: "Owning less. Carrying more.",
      opening: "The high altitude forces you to slow down. Everything else follows.",
      description: `You can't rush at 14,000 feet. Your body won't let you. Every step is deliberate. Every breath is earned.

Ladakh fixed my relationship with time. I arrived thinking I was "taking a break." I left understanding that my definition of productivity was broken.

No rushed decisions. No back-to-back meetings. Just presence, forced upon you by thin air and vast silence.

Pangong Lake looks unreal in photos. Merak feels unreal in person.

A few homes. Endless wind. Temperatures that hurt your face.
And families who live there like this is normal. Because it is.

They own almost nothing by our standards.
No excess. No backups. No safety nets.

And yet, they lack nothing.

A warm fire.
A shared meal.
Stories that don't need screens.
Silence that isn't empty.

Watching a small family survive brutal cold with ease forces an uncomfortable question:
If they're content with so little, why are we restless with so much?

There was no performance of happiness.
No motivational wisdom.
Just life, lived fully, without complaint.

The landscape is brutal and beautiful in equal measure. Nothing soft survives here. That includes ego.`,
      reflection: `Ladakh doesn't try to inspire you. It exposes you. It shows you how little you actually need. And how much noise you've mistaken for meaning. I learned that productivity isn't speed—it's alignment. Moving slowly with intention beats moving fast without direction. This shift changed how I approach every project.`,
      highlights: [
        "Pangong Lake at sunrise—mirror-still water",
        "Merak in winter—families living without complaint",
        "Khardung La pass, one of the highest motorable roads",
        "Nomadic families who own almost nothing and lack nothing",
        "Nights so dark you remember stars exist",
        "Leaving colder than I arrived, but lighter",
      ],
    },
    "3": {
      place: "Uttarakhand & Panch Kedar",
      dates: "2022",
      theme: "The mountains don't care who you think you are",
      opening: "Five ancient temples. Endless vertical climbs. The Himalayas dismantled every story I told myself about strength.",
      description: `I arrived thinking I was fit. The mountains corrected that assumption within hours.

Panch Kedar is a pilgrimage to five Shiva temples scattered across the Garhwal Himalayas. Each requires days of trekking through terrain that doesn't negotiate. Steep. Unforgiving. Beautiful in a way that makes you feel small.

Tungnath. Rudranath. Madhyamaheshwar. Kalpeshwar. Kedarnath.

Each climb stripped something away. First, the illusion of physical strength. Then, the need to prove anything. Then, the voice that kept asking "why am I doing this?"

What remained was just movement. One foot. Then another. No story. No identity. Just breath and rock and sky.

I broke down on the Rudranath trail. Not from exhaustion, but from surrender. The kind of crying that doesn't come from sadness but from finally putting something down you didn't know you were carrying.

The temples themselves were almost secondary. The real pilgrimage was internal.`,
      reflection: `Panch Kedar taught me that ego isn't defeated by success or failure. It's defeated by insignificance. Standing in front of a mountain that has existed for millions of years, all your accomplishments feel like whispers. And that's freeing. You stop performing. You just exist.`,
      highlights: [
        "The Tungnath climb at dawn - highest Shiva temple in the world",
        "Breaking down on the Rudranath trail and feeling lighter for it",
        "Silence so complete you hear your own heartbeat",
        "Village chai that tasted like survival",
        "Realizing strength has nothing to do with muscles",
      ],
    },
    "4": {
      place: "Europe & The Alps",
      dates: "2022",
      theme: "Order is a form of respect",
      opening: "I didn't go to Europe to conquer mountains. I went to walk through them.",
      description: `Short hikes. Marked trails. Clear paths.
No drama. No bravado.

And somehow, that was the lesson.

The first thing I noticed wasn't the views.
It was the order.

Trails clearly marked.
Signboards exactly where they're needed.
Paths maintained not for spectacle, but for continuity.

Nothing felt rushed.
Nothing felt careless.

People walked without announcing themselves.
No shouting. No loud music. No performance.

Everyone minded their own pace.
And in doing so, respected everyone else's.

Most of my hikes were short.
A few hours. Sometimes less.

But even in that time, something shifted.

You don't fight the Alps.
You follow them.

Trekkers greet each other quietly or not at all.
Nobody proves anything.
Nobody pretends the mountain belongs to them.

The trail exists.
You're allowed to use it if you do so respectfully.

That alone changes how you move.

What struck me most wasn't nature.
It was care.

Steps reinforced where erosion could happen.
Routes redirected instead of forced.
Warnings placed without drama.

This wasn't about control.
It was about coexistence.

The mountain stays intact.
People pass through.

No one leaves a trace.
No one tries to own the experience.

The Alps aren't like the Himalayas.
They don't overwhelm you with scale immediately.

They humble you differently.

By showing what happens when systems are designed with respect.
For land, for people, for time.

Discipline doesn't kill freedom.
It protects it.`,
      reflection: `Europe taught me that order is architecture. Now, when I build systems, digital or otherwise, I think about trails. Clear paths. Minimal noise. Respect for whoever walks next. The best designs are the ones people forget they're using because everything just works.`,
      highlights: [
        "Walking in silence without feeling awkward",
        "Trails that don't need constant correction",
        "People who don't mistake noise for joy",
        "Nature that doesn't ask for attention",
        "Systems that quietly work so humans don't have to fight them",
      ],
    },
  }

  const destination = destinations[destinationId as string] || destinations["1"]
  const allIds = Object.keys(destinations)
  const currentIndex = allIds.indexOf(destinationId as string)
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : null
  const nextId = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 py-6 px-4 sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="max-w-3xl mx-auto">
          <Link href="/travel" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← back to travel
          </Link>
        </div>
      </header>

      {/* Hero section - Cinematic opening */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <p className="text-muted-foreground text-sm tracking-widest">{destination.dates}</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">{destination.place}</h1>
            <p className="font-serif text-xl text-foreground/70 italic">&ldquo;{destination.theme}&rdquo;</p>
          </div>
        </div>
      </section>

      {/* Opening line */}
      <section className="py-16 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
            {destination.opening}
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {destination.description.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="text-foreground/80 text-lg leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Moments */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-background/50 mb-12">Moments that stayed</p>
          <div className="space-y-6">
            {destination.highlights.map((highlight: string, index: number) => (
              <p key={index} className="font-serif text-xl text-background/90">
                {highlight}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground">
            {destination.reflection}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          {prevId ? (
            <Link href={`/travel/${prevId}`} className="text-muted-foreground hover:text-foreground transition-colors">
              ← {destinations[prevId].place}
            </Link>
          ) : <div />}
          {nextId ? (
            <Link href={`/travel/${nextId}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {destinations[nextId].place} →
            </Link>
          ) : <div />}
        </div>
      </section>
    </main>
  )
}
