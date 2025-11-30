'use client';
import { navigation, profile } from '@/app/lib/data';
import Magnetic from './Magnetic';
export default function Sidebar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <aside className="sticky top-0 flex h-screen flex-col justify-between border-r border-slate-800 px-6 py-10 max-md:h-auto max-md:static max-md:border-r-0 max-md:pb-4">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-slate-50">{profile.name}</h1>
          <p className="mt-2 text-sm font-medium text-emerald-400">{profile.title}</p>
          <p className="mt-2 text-sm text-slate-400">{profile.location}</p>
        </div>

        <p className="text-sm leading-relaxed text-slate-400">
          I am a climate and disaster risk researcher focusing on{' '}
          <span className="text-slate-200">
            social vulnerability, resilience, and flood risk governance
          </span>{' '}
          in Pakistan and beyond.
        </p>

        <div className="space-y-1 text-sm">
          <a
            href={`mailto:${profile.contacts.email}`}
            className="block text-slate-300 hover:text-emerald-400"
          >
            {profile.contacts.email}
          </a>
          <span className="block text-slate-500">{profile.contacts.phone}</span>
        </div>

        <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-400">
          {profile.links.map(link => (
            <Magnetic key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-slate-600 underline-offset-4 hover:text-emerald-400 hover:decoration-emerald-500"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <nav className="mt-6 hidden flex-col gap-2 text-sm text-slate-400 md:flex">
          {navigation.map(item => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="w-fit text-left transition hover:text-emerald-400"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <p className="mt-10 text-xs text-slate-600 max-md:hidden">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </aside>
  );
}
