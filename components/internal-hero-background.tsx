import Image from 'next/image'

export default function InternalHeroBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/images/internal-hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-right"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: [
            'linear-gradient(105deg, oklch(0.12 0.07 258 / 0.35) 0%, transparent 55%)',
            'linear-gradient(90deg, oklch(0.14 0.07 258 / 0.88) 0%, oklch(0.15 0.06 258 / 0.78) 45%, oklch(0.16 0.06 258 / 0.72) 100%)',
          ].join(', '),
        }}
      />
    </div>
  )
}
