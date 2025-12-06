'use client';

import Sidebar from '@/app/components/Sidebar';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Reveal from '@/app/components/Reveal';
import Magnetic from '@/app/components/Magnetic';
import Image from 'next/image';

import {
  profile,
  publications,
  manuscripts,
  experience,
  education,
  skills,
  grants,
  trainings,
  awards,
  leadership,
  seminars,
} from '@/app/lib/data';
import GoToTopButton from './components/GotoTopButton';

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row max-w-[1500px] mx-auto min-h-screen">
      <div className="hidden md:block pr-[50px]">
        <div className="sticky top-[50px]">
          <Image
            src="/Abdur.JPG"
            alt="Profile photo"
            width={240}
            height={240}
            className="rounded-2xl object-cover shadow-md dark:shadow-black/40"
          />
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <Container>
        {/* ABOUT */}
        <Section id="about" title="About Me" immediate>
          {profile.summary.map((p, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <p className="text-text-body text-justify">{p}</p>
            </Reveal>
          ))}
        </Section>

        {/* PUBLICATIONS */}
        <Section id="publications" title="Publications">
          <ul className="space-y-6">
            {publications.map((pub, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <li className="space-y-1">
                  <p className="font-medium text-text-secondary">{pub.title}</p>
                  <p className="text-xs text-text-muted">{pub.authors}</p>
                  <p className="text-xs italic text-text-faded">
                    {pub.journal} · {pub.year}
                  </p>

                  {pub.link && (
                    <Magnetic>
                      <a
                        href={pub.link}
                        target="_blank"
                        className="text-accent hover:text-emerald-300 hover-glow text-xs underline underline-offset-4"
                      >
                        View Publication
                      </a>
                    </Magnetic>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </Section>
        {/* MANUSCRIPTS */}
        <Section id="manuscripts" title="Under Review">
          <ul className="space-y-3">
            {manuscripts.map((m, i) => (
              <Reveal key={i}>
                <li className="text-text-body text-sm">{m}</li>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Teaching & Research Experience">
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="pb-8 space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium text-text-secondary">{job.role}</p>
                  <span className="text-xs text-text-faded">{job.period}</span>
                </div>

                <p className="text-xs text-text-muted">
                  {job.org} · {job.location}
                </p>

                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-text-body">
                  {job.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          {education.map((ed, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="pb-8 space-y-1">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium text-text-secondary">{ed.degree}</p>
                  <span className="text-xs text-text-faded">{ed.period}</span>
                </div>

                <p className="text-xs text-text-muted">
                  {ed.school} · {ed.location}
                </p>

                {ed.highlights && (
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-text-body">
                    {ed.highlights.map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </Section>

        {/* GRANTS */}
        <Section id="grants" title="Grants & Funding">
          <ul className="space-y-2">
            {grants.map((g, i) => (
              <Reveal key={i}>
                <li className="text-text-body text-sm">{g}</li>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* TRAININGS */}
        <Section id="trainings" title="Trainings & Workshops">
          <ul className="space-y-2">
            {trainings.map((t, i) => (
              <Reveal key={i}>
                <li className="text-text-body text-sm">{t}</li>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* AWARDS */}
        <Section id="awards" title="Awards & Achievements">
          <ul className="space-y-2">
            {awards.map((a, i) => (
              <Reveal key={i}>
                <li className="text-text-body text-sm">{a}</li>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* LEADERSHIP */}
        <Section id="leadership" title="Leadership & Volunteer Experience">
          {leadership.map((l, i) => (
            <Reveal key={i}>
              <div className="pb-6 space-y-1">
                <p className="font-medium text-text-secondary">{l.role}</p>
                {l.org && (
                  <p className="text-xs text-text-muted">
                    {l.org} · {l.period}
                  </p>
                )}
                {!l.org && <p className="text-xs text-text-muted">{l.period}</p>}

                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-text-body">
                  {l.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills & Tools">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                  Research
                </h3>
                <ul className="space-y-1 text-text-body">
                  {skills.research.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                  Methods
                </h3>
                <ul className="space-y-1 text-text-body">
                  {skills.methods.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                  Tools
                </h3>
                <ul className="space-y-1 text-text-body">
                  {skills.tools.map(s => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* SEMINARS */}
        <Section id="seminars" title="Seminars & Conferences">
          <ul className="space-y-2">
            {seminars.map((s, i) => (
              <Reveal key={i}>
                <li className="text-text-body text-sm">{s}</li>
              </Reveal>
            ))}
          </ul>
        </Section>
      </Container>

      {/* Near the bottom: */}
      <GoToTopButton />
    </div>
  );
}
