import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import HeroImg from "../../assets/Images/H1.webp";
import insightsData from "./data/insightsData";
import {
  performanceAgendaHero,
  performanceAgendaSystem,
} from "./data/insightsImages";
import "./insights.css";

const article = insightsData[0];

function Insights() {
  const [reading, setReading] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (reading) {
    return (
      <div className="bg-black text-white px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setReading(false)}
            className="border border-white/30 px-4 py-2 rounded-xl text-sm"
          >
            ← Back to insights
          </button>
          <span className="block text-primary-orange text-sm mt-8 tracking-widest">
            {article.category.toUpperCase()}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            {article.title}
          </h1>
          <p className="text-white/60 mt-4">
            {article.author} • {article.date} • {article.readTime}
          </p>
          <p className="text-white/70 text-lg mt-4">{article.excerpt}</p>
          <img
            src={performanceAgendaHero}
            alt="Leadership team reviewing an organizational system"
            className="w-full rounded-2xl mt-8 border border-white/10"
          />
          <div className="mt-8 flex flex-col gap-8">
            {article.sections.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="text-2xl font-bold text-primary-orange">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-white/80 leading-8 mt-4">
                    {paragraph}
                  </p>
                ))}
                {index === 1 && (
                  <img
                    src={performanceAgendaSystem}
                    alt="Organization as a connected system of people, processes and AI"
                    className="w-full rounded-2xl mt-8 border border-white/10"
                  />
                )}
              </section>
            ))}
          </div>
          <p className="text-white/50 text-sm mt-10 border-t border-white/15 pt-6">
            Source: {article.source}
            <br />
            Perspective &amp; analysis: {article.perspective}
          </p>
          <button
            type="button"
            onClick={() => setReading(false)}
            className="border border-white/30 px-4 py-2 rounded-xl text-sm mt-8"
          >
            ← Back to insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-10 items-center px-4 md:px-10 pt-28 pb-16">
        <div>
          <p className="text-primary-orange tracking-widest text-sm">INSIGHTS</p>
          <div className="w-10 h-px bg-primary-orange my-4" />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ideas That Move
            <br />
            Organizations <span className="text-primary-orange">Forward.</span>
          </h1>
          <p className="text-white/60 leading-7 mt-6 max-w-xl">
            Research, perspectives, and practical insights on strategy,
            leadership, and organizational transformation. Knowledge to
            inspire. Insights to create impact.
          </p>
          <a
            href="#latest-insights"
            className="inline-flex items-center gap-2 border border-primary-orange text-primary-orange px-5 py-3 rounded-xl mt-8"
          >
            Explore Insights <GoArrowRight />
          </a>
        </div>
        <div className="relative flex justify-center">
          <div className="insights-hero-ring" />
          <img
            src={HeroImg}
            alt="Javad Nasr"
            className="relative w-72 md:w-96 object-cover rounded-full border border-primary-orange/40"
          />
          <span className="absolute bottom-2 right-4 md:right-16 font-family-GreatVibesRegular text-primary-orange text-4xl rotate-[-8deg]">
            Javad Nasr
          </span>
        </div>
      </section>

      {/* The only published article */}
      <section id="latest-insights" className="px-4 md:px-10 mt-6">
        <h2 className="text-primary-orange text-xs tracking-widest">
          LATEST INSIGHTS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <article
            onClick={() => setReading(true)}
            className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-primary-orange transition"
          >
            <img
              src={performanceAgendaHero}
              alt="Leadership team reviewing an organizational system"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <span className="text-primary-orange text-xs tracking-widest">
                {article.category.toUpperCase()}
              </span>
              <h3 className="font-bold text-lg leading-6 mt-2">{article.title}</h3>
              <p className="text-white/50 text-sm leading-6 mt-2">
                {article.excerpt}
              </p>
              <p className="text-white/40 text-xs mt-4 flex justify-between">
                <span>
                  {article.date} • {article.readTime}
                </span>
                <GoArrowRight className="text-primary-orange" />
              </p>
            </div>
          </article>
        </div>
        <p className="text-white/40 text-sm mt-6">
          New articles will be added here as they are published.
        </p>
      </section>

      {/* Stay inspired — no globe graphic, by request */}
      <section className="mx-4 md:mx-10 mt-12 mb-10 border border-white/10 rounded-2xl p-6 md:p-10">
        <h2 className="text-primary-orange text-xs tracking-widest">
          STAY INSPIRED
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
          <div>
            <h3 className="text-3xl font-bold">Insights Delivered to Your Inbox</h3>
            <p className="text-white/50 leading-7 mt-3">
              Subscribe to receive the latest articles, frameworks, and
              perspectives on strategy and transformation.
            </p>
          </div>
          {subscribed ? (
            <p className="text-primary-orange">Thank you — you are subscribed.</p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <div className="flex">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="flex-1 min-w-0 bg-black border border-white/20 rounded-l-xl px-4 py-3 text-white placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="bg-primary-orange text-white px-5 py-3 rounded-r-xl inline-flex items-center gap-2"
                >
                  Subscribe <GoArrowRight />
                </button>
              </div>
              <p className="text-white/40 text-xs mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

export default Insights;
