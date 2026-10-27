import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import HeroImg from "../../assets/Images/H1.webp";
import insightsData, { topics } from "./data/insightsData";
import "./insights.css";

const featured = insightsData.find((item) => item.id === "strategy-execution-gap");
const latest = insightsData.filter((item) => item.id !== "strategy-execution-gap");
const trending = insightsData.filter((item) =>
  ["organizational-agility", "culture-performance", "data-driven-decisions"].includes(item.id)
);

function InsightVisual({ title }) {
  return (
    <div className="insights-visual" aria-hidden="true">
      <span className="insights-visual-ring" />
      <span className="insights-visual-path" />
      <span className="insights-visual-label">{title}</span>
    </div>
  );
}

function Insights() {
  const [topic, setTopic] = useState("All Insights");
  const [reading, setReading] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredLatest =
    topic === "All Insights"
      ? latest
      : latest.filter((item) => item.category === topic);

  if (reading) {
    return (
      <div className="bg-black text-white px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setReading(null)}
            className="border border-white/30 px-4 py-2 rounded-xl text-sm"
          >
            ← Back to insights
          </button>
          <span className="block text-primary-orange text-sm mt-8 tracking-widest">
            {reading.category.toUpperCase()}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            {reading.title}
          </h1>
          <p className="text-white/60 mt-4">
            {reading.author} • {reading.date} • {reading.readTime}
          </p>
          {reading.id === "performance-agenda-2026" && (
            <p className="text-white/70 text-lg mt-4">{reading.excerpt}</p>
          )}
          <div className="mt-8 flex flex-col gap-8">
            {reading.sections.map((section, index) => (
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
              </section>
            ))}
          </div>
          {reading.source && (
            <p className="text-white/50 text-sm mt-10 border-t border-white/15 pt-6">
              Source: {reading.source}
              <br />
              Perspective &amp; analysis: {reading.perspective}
            </p>
          )}
          <button
            type="button"
            onClick={() => setReading(null)}
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
            Explore All Insights <GoArrowRight />
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

      {/* Topics */}
      <section className="px-4 md:px-10">
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

      {/* Featured + Trending */}
      <section className="grid lg:grid-cols-3 gap-4 px-4 md:px-10 mt-6">
        <article
          onClick={() => setReading(featured)}
          className="lg:col-span-2 border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-primary-orange transition relative overflow-hidden"
        >
          <div className="flex justify-between gap-3">
            <span className="text-primary-orange text-xs tracking-widest">
              FEATURED INSIGHT
            </span>
            <span className="text-xs border border-primary-orange text-primary-orange rounded-full px-3 py-1">
              STRATEGY
            </span>
          </div>
          <h2 className="text-3xl font-bold mt-4 max-w-xl">{featured.title}</h2>
          <p className="text-white/60 mt-3 max-w-xl leading-7">{featured.excerpt}</p>
          <p className="text-white/40 text-sm mt-6">
            {featured.author} • {featured.date} • {featured.readTime}
          </p>
          <span className="text-primary-orange mt-6 inline-flex items-center gap-2">
            Read More <GoArrowRight />
          </span>
          <InsightVisual title="Strategy → Execution" />
        </article>

        <aside className="border border-white/10 rounded-2xl p-6">
          <h3 className="text-primary-orange text-xs tracking-widest">
            TRENDING INSIGHTS
          </h3>
          <div className="flex flex-col gap-6 mt-6">
            {trending.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setReading(item)}
                className="text-left flex gap-4"
              >
                <span className="text-primary-orange text-xl">0{index + 1}</span>
                <span>
                  <span className="block font-bold leading-6">{item.title}</span>
                  <span className="block text-white/40 text-sm mt-1">
                    {item.readTime}
                  </span>
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setTopic("All Insights")}
            className="text-primary-orange mt-8 inline-flex items-center gap-2 text-sm"
          >
            View All <GoArrowRight />
          </button>
        </aside>
      </section>

      {/* Latest */}
      <section id="latest-insights" className="px-4 md:px-10 mt-12">
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
        {filteredLatest.length === 0 ? (
          <p className="text-white/60 mt-6">
            No insights in this topic yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {filteredLatest.map((item) => (
              <article
                key={item.id}
                onClick={() => setReading(item)}
                className="border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-primary-orange transition"
              >
                <InsightVisual title={item.category} />
                <div className="p-4">
                  <span className="text-primary-orange text-xs tracking-widest">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-bold text-lg leading-6 mt-2 min-h-14">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-6 mt-2">
                    {item.excerpt}
                  </p>
                  <p className="text-white/40 text-xs mt-4 flex justify-between">
                    <span>
                      {item.date} • {item.readTime}
                    </span>
                    <GoArrowRight className="text-primary-orange" />
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
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
            <p className="text-primary-orange">
              Thank you — you are subscribed.
            </p>
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
