// app/page.tsx
import Sidebar from '@/app/components/Sidebar';
import Section from '@/app/components/Section';
import { awards, education, experience, publications, skills, profile } from '@/app/lib/data';

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <Sidebar />
      </div>

      <div className="w-full md:w-2/3 px-6 py-10 md:py-16 md:px-10 space-y-16">
        {/* About */}
        <Section id="about" title="About">
          {profile.summary.map(p => (
            <p key={p}>{p}</p>
          ))}
        </Section>

        {/* Publications */}
        <Section id="publications" title="Selected Publications">
          <ul className="space-y-4">
            {publications.map(pub => (
              <li key={pub.title} className="space-y-1">
                <p className="text-sm font-medium text-slate-100">{pub.title}</p>
                <p className="text-xs text-slate-400">{pub.authors}</p>
                <p className="text-xs text-slate-500 italic">
                  {pub.journal} · {pub.year}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-xs text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                  >
                    View publication
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-8">
            {experience.map(job => (
              <div key={job.role} className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-medium text-slate-100">{job.role}</p>
                  <p className="text-xs text-slate-500">{job.period}</p>
                </div>
                <p className="text-xs text-slate-400">
                  {job.org} · {job.location}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                  {job.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <div className="space-y-6">
            {education.map(ed => (
              <div key={ed.degree} className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-medium text-slate-100">{ed.degree}</p>
                  <p className="text-xs text-slate-500">{ed.period}</p>
                </div>
                <p className="text-xs text-slate-400">
                  {ed.school} · {ed.location}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-300">
                  {ed.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Tools">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase text-slate-400">
                Research & Thematic
              </h3>
              <ul className="mt-2 space-y-1 text-xs">
                {skills.research.map(s => (
                  <li key={s} className="text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-slate-400">Methods</h3>
              <ul className="mt-2 space-y-1 text-xs">
                {skills.methods.map(s => (
                  <li key={s} className="text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase text-slate-400">Software & Tools</h3>
              <ul className="mt-2 space-y-1 text-xs">
                {skills.tools.map(s => (
                  <li key={s} className="text-slate-300">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards & Scholarships">
          <ul className="space-y-2 text-xs">
            {awards.map(a => (
              <li key={a} className="text-slate-300">
                {a}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}
