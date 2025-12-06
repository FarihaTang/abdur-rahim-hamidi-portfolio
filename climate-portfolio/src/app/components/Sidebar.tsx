'use client';
import { navigation, profile } from '@/app/lib/data';
import Magnetic from './Magnetic';
import Reveal from './Reveal';
import ViewResumeButton from './ViewResumeButton';
export default function Sidebar() {
  return (
    <aside
      className="w-full md:w-1/3 
        md:sticky md:top-0 
        md:h-screen 
        border-b md:border-b-0 md:border-r 
        border-slate-800/40 
        px-6 py-10 md:px-10 
        flex flex-col justify-between"
    >
      {/* Top Section */}
      <div className="space-y-10">
        {/* Name */}
        <Reveal>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 mb-2">
              {profile.name}
            </h1>
            {profile.title.map(t => (
              <p key={t.label}>
                <a
                  href={t.link}
                  target="_blank"
                  className="
                text-text-secondary font-medium text-emerald-400
                    hover:text-accent 
                    hover-glow 
                    transition-colors 
                    hover:text-emerald-300
                  "
                >
                  {t.label}
                  <span className="text-xs text-slate-400"> ↗</span>
                </a>
              </p>
            ))}
            <p className="mt-2 text-sm text-slate-400">{profile.location}</p>
          </div>
        </Reveal>
        {/* Summary */}
        <Reveal delay={0.15}>
          <p className="text-sm leading-relaxed max-w-xs text-justify">{profile.sidebarSummary}</p>
        </Reveal>
        {/* Contact */}
        {/* <div className="space-y-1 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="block text-slate-300 hover:text-emerald-400"
          >
            {profile.email}
          </a>
          <span className="block text-slate-400">{profile.phone}</span>
        </div> */}
        {/* Links */}
        <Reveal delay={0.25}>
          {/* University Profile */}
          <div className="flex flex-wrap gap-2 font-medium text-xs mb-2">
            <span className="font-normal">Visit My</span>
            <Magnetic>
              <a
                href={profile.universityProfile}
                target="_blank"
                className="
                    text-xs 
                    text-text-muted 
                    hover:text-accent 
                    hover-glow 
                    transition-colors 
                    hover:text-emerald-400
                  "
              >
                University Profile
              </a>
              <span className="text-xs text-slate-400"> ↗</span>
            </Magnetic>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-400">
            {profile.links.map(link => (
              <Magnetic key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  className="
                    text-text-muted 
                    hover:text-accent 
                    hover-glow 
                    transition-colors 
                    underline underline-offset-4 decoration-slate-700/30
                    hover:decoration-emerald-500
                    hover:text-emerald-400
                  "
                >
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>

        {/* Navigation */}
        <Reveal delay={0.3}>
          <nav className="hidden md:flex flex-row flex-wrap pt-2 text-sm">
            {navigation.map(nav => (
              <div
                className={`group ${nav.id === 'seminars' ? 'w-fit' : 'w-1/2'} pb-4`}
                key={nav.id}
              >
                <button
                  onClick={() =>
                    document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="relative w-fit text-text-muted hover:text-accent transition-colors pb-1.5"
                >
                  {nav.label}

                  {/* Underline animation */}
                  <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] bg-emerald-400 w-0 transition-all duration-300 group-hover:w-full" />
                </button>
              </div>
            ))}
          </nav>
        </Reveal>

        {/* Resume */}
        <Reveal delay={0.35}>
          <ViewResumeButton></ViewResumeButton>
        </Reveal>

        {/* Theme Toggle */}
        {/* <Reveal delay={0.4}>
          <ThemeToggle></ThemeToggle>
        </Reveal> */}
      </div>
      {/* Footer */}
      <p className="text-xs text-text-faded mt-12 text-slate-600">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </aside>
  );
}
