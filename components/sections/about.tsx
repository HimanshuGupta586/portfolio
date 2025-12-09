"use client";

import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

const iconMap: Record<string, any> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

// Base fade animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className="text-3xl md:text-4xl font-semibold">
            {ABOUT_DATA.heading}
          </span>

          <motion.div
            animate={{ width: ["0%", "50%", "28%"] }}
            transition={{ duration: 1.4, ease: easeOut }}
            className="h-[3px] bg-primary rounded-full"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-3xl text-muted-foreground md:text-lg text-[0.94rem] leading-relaxed"
        >
          {ABOUT_DATA.bio}
        </motion.p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ABOUT_DATA.infoCards.map((card, i) => (
            <InfoCard key={i} title={card.title} text={card.text} />
          ))}
        </div>

        {/* Stats + Buttons + Socials */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Stats */}
          <div className="grid grid-cols-3 max-w-md">
            {ABOUT_DATA.stats.map((s, i) => (
              <Stat key={i} number={s.number} label={s.label} />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-6 flex items-center gap-2 cursor-pointer">
              <a href={ABOUT_DATA.buttons.resume.link} className="w-full h-full flex items-center justify-center">
                {ABOUT_DATA.buttons.resume.label}
              </a>
              <ArrowRight size={17} />
            </Button>

            <Button variant="outline" className="rounded-full dark:text-white cursor-pointer">
              <a href={ABOUT_DATA.buttons.contact.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                {ABOUT_DATA.buttons.contact.label}
              </a>
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {ABOUT_DATA.socials.map((s, i) => (
              <Social key={i} icon={iconMap[s.icon]} link={s.link} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Components */
function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOut }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.045,
        boxShadow: "0 0 8px var(--primary)",
        transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{ scale: 0.97 }}
      className="
        p-6 rounded-xl border border-border bg-card
        shadow-sm cursor-pointer
        transition-transform duration-0 select-none
      "
      style={{ willChange: "transform, box-shadow" }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </motion.div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.12 } }}
      className="text-center"
    >
      <p className="text-2xl font-bold">{number}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
}

function Social({ icon, link }: { icon: any; link: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ scale: 1.12, transition: { duration: 0.12 } }}
      whileTap={{ scale: 0.94 }}
      className="
        p-2 rounded-md border border-border 
        hover:border-primary/70 hover:text-primary
        transition-all duration-200
      "
    >
      {icon}
    </motion.a>
  );
}
