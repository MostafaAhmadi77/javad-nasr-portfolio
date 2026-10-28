import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import Hero from "../../Components/Hero/Hero";
import insightsData from "./data/insightsData";
import {
  performanceAgendaHero,
  performanceAgendaSystem,
} from "./data/insightsImages";
import "./insights.css";

const article = insightsData[0];
const topics = [
  "All Insights",
  "Leadership",
  "Transformation",
  "Operations",
  "Culture",
  "Innovation",
];
const articleTopics = ["Leadership", "Transformation"];

function Insights() {
  const [topic, setTopic] = useState("All Insights");
  const [reading, setReading] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const matchesTopic =
    topic === "All Insights" || articleTopics.includes(topic);

  if (reading) {
    return (
      <div className="bg-black text-white ss:px-4 sm:px-6 px-4 py-10">
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
          <h1 className="font-family-CormorantGaramondBold ss:text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-tight">
            {article.title}
          </h1>
          <p className="text-white/60 mt-4">
            {article.author} • {article.date} • {article.readTime}
          </p>
          <p className="text-white/70 ss:text-base sm:text-lg mt-4">{article.excerpt}</p>
          <img
            src={performanceAgendaHero}
            alt="Leadership team reviewing an organizational system"
            className="w-full rounded-2xl mt-8 border border-white/10"
          />
          <div className="mt-8 flex flex-col gap-8">
            {article.sections.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="font-family-CormorantGaramondBold text-2xl font-bold text-primary-orange">
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
    <div className="bg-black text-white pb-10">
      <Hero
        titlePage="INSIGHTS"
        textHyper={
          <span className="font-family-CormorantGaramondBold">
            Ideas That Move
            <br />
            Organizations <span className="text-primary-orange">Forward.</span>
          </span>
        }
        textPageDescription="Research, perspectives, and practical insights on strategy, leadership, and organizational transformation. Knowledge to inspire. Insights to create impact."
        buttons={
          <a
            href="#latest-insights"
            className="inline-flex items-center gap-2 border border-primary-orange text-primary-orange px-5 py-3 rounded-xl"
          >
            Explore All Insights <GoArrowRight />
          </a>
        }
      />

      <section className="ss:px-4 sm:px-6 md:px-10">
        <div className="border border-white/10 rounded-2xl p-3 flex flex-wrap items-center gap-2">
          <span className="text-primary-orange text-xs tracking-widest mr-2">
            EXPLORE TOPICS
          </span>
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`px-4 py-2 rounded-xl text-sm border ${
                topic === item
                  ? "border-primary-orange text-primary-orange"
                  : "border-white/15 text-white/70"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {!matchesTopic ? (
        <section className="px-4 md:px-10 mt-12">
          <p className="text-white/60 border border-white/10 rounded-2xl p-6">
            No insights in this topic yet. New articles will appear here as
            they are published.
          </p>
        </section>
      ) : (
        <>
          <section className="grid ss:grid-cols-1 lg:grid-cols-3 gap-4 ss:px-4 sm:px-6 md:px-10 mt-6">
            <article
              onClick={() => setReading(true)}
              className="lg:col-span-2 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-primary-orange transition"
            >
              <img
                src={performanceAgendaHero}
                alt="Leadership team reviewing an organizational system"
                className="w-full ss:h-56 sm:h-72 object-cover"
              />
              <div className="ss:p-4 sm:p-6">
                <div className="flex justify-between gap-3">
                  <span className="text-primary-orange text-xs tracking-widest">
                    FEATURED INSIGHT
                  </span>
                  <span className="text-xs border border-primary-orange text-primary-orange rounded-full px-3 py-1">
                    STRATEGY
                  </span>
                </div>
                <h2 className="font-family-CormorantGaramondBold ss:text-2xl sm:text-3xl font-bold mt-4">{article.title}</h2>
                <p className="text-white/60 mt-3 leading-7">{article.excerpt}</p>
                <p className="text-white/40 text-sm mt-6">
                  {article.author} • {article.date} • {article.readTime}
                </p>
                <span className="text-primary-orange mt-6 inline-flex items-center gap-2">
                  Read More <GoArrowRight />
                </span>
              </div>
            </article>

            <aside className="border border-white/10 rounded-2xl ss:p-4 sm:p-6">
              <h3 className="text-primary-orange text-xs tracking-widest">
                TRENDING INSIGHTS
              </h3>
              <p className="text-white/50 leading-7 mt-6">
                More trending insights will appear here as new articles are
                published.
              </p>
              <button
                type="button"
                onClick={() => setTopic("All Insights")}
                className="text-primary-orange mt-8 inline-flex items-center gap-2 text-sm"
              >
                View All <GoArrowRight />
              </button>
            </aside>
          </section>

          <section id="latest-insights" className="ss:px-4 sm:px-6 md:px-10 mt-12">
            <div className="flex justify-between items-center">
              <h2 className="text-primary-orange text-xs tracking-widest">
                LATEST INSIGHTS
              </h2>
              <button
                type="button"
                onClick={() => setTopic("All Insights")}
                className="text-primary-orange text-sm inline-flex items-center gap-2"
              >
                View All Insights <GoArrowRight />
              </button>
            </div>
            <div className="grid ss:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
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
                  <h3 className="font-family-CormorantGaramondBold font-bold text-lg leading-6 mt-2">
                    {article.title}
                  </h3>
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
          </section>
        </>
      )}

      <section className="ss:mx-4 sm:mx-6 md:mx-10 mt-12 border border-white/10 rounded-2xl ss:p-4 sm:p-6 md:p-10">
        <h2 className="text-primary-orange text-xs tracking-widest">
          STAY INSPIRED
        </h2>
        <div className="grid ss:grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
          <div>
            <h3 className="font-family-CormorantGaramondBold ss:text-2xl sm:text-3xl font-bold">Insights Delivered to Your Inbox</h3>
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
              <div className="flex ss:flex-col sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="flex-1 min-w-0 bg-black border border-white/20 ss:rounded-xl sm:rounded-l-xl sm:rounded-r-none px-4 py-3 text-white placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="bg-primary-orange text-white px-5 py-3 ss:rounded-xl sm:rounded-r-xl sm:rounded-l-none ss:mt-3 sm:mt-0 inline-flex items-center justify-center gap-2"
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
