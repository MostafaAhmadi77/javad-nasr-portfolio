import { dashboardData } from "../data/dashboardData";

function LineChart({ points }) {
  const width = 600;
  const height = 180;
  const max = Math.max(...points);
  const coords = points.map((value, index) => {
    const x = (index / (points.length - 1)) * width;
    const y = height - (value / max) * (height - 20) - 10;
    return `${x},${y}`;
  });
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
      <polyline
        fill="none"
        stroke="#FB5701"
        strokeWidth="3"
        points={coords.join(" ")}
      />
      {coords.map((point, index) => {
        const [x, y] = point.split(",");
        return <circle key={index} cx={x} cy={y} r="4" fill="#FB5701" />;
      })}
    </svg>
  );
}

function Overview({ articles }) {
  const published = articles.filter((item) => item.status === "published").length;
  const drafts = articles.filter((item) => item.status === "draft").length;
  const stats = dashboardData.stats.map((stat) => {
    if (stat.label === "Published Articles") return { ...stat, value: published };
    if (stat.label === "Articles in Draft") return { ...stat, value: drafts };
    return stat;
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="border border-primary-orange rounded-2xl ss:p-4 sm:p-6 bg-black">
        <h1 className="font-family-CormorantGaramondBold ss:text-3xl sm:text-4xl md:text-5xl text-white">
          {dashboardData.heroTitle}
        </h1>
        <p className="text-primary-orange tracking-widest mt-3">
          {dashboardData.heroSubtitle}
        </p>
        <p className="text-white/60 mt-3">
          Admin view for the Javad Nasr site. Overview numbers below are sample
          layout data, except the article counts, which come from your saved
          articles.
        </p>
      </div>

      <div className="grid ss:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-white/15 rounded-2xl p-4 bg-black">
            <p className="text-white/50 text-sm">{stat.label}</p>
            <p className="text-white ss:text-3xl sm:text-4xl font-bold mt-2">{stat.value}</p>
            <p className="text-white/40 text-xs mt-1">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="grid ss:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 border border-white/15 rounded-2xl p-4 bg-black">
          <h2 className="text-white font-bold">Content Overview</h2>
          <LineChart points={dashboardData.consistency} />
          <p className="text-white/40 text-xs">Sample weekly trend</p>
        </div>
        <div className="border border-white/15 rounded-2xl p-4 bg-black">
          <h2 className="text-white font-bold">Weekly Metrics</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {dashboardData.weeklyMetrics.map((metric) => (
              <li key={metric.label} className="flex justify-between text-white/70">
                <span>{metric.label}</span>
                <span className="text-primary-orange font-bold">{metric.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid ss:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border border-white/15 rounded-2xl p-4 bg-black">
          <h2 className="text-white font-bold">Focus Areas</h2>
          <ul className="mt-3 flex flex-col gap-3">
            {dashboardData.focusAreas.map((area) => (
              <li key={area.label}>
                <div className="flex justify-between text-white/70 text-sm">
                  <span>{area.label}</span>
                  <span>{area.value}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full mt-1">
                  <div
                    className="h-2 bg-primary-orange rounded-full"
                    style={{ width: `${area.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-white/15 rounded-2xl p-4 bg-black">
          <h2 className="text-white font-bold">Today&apos;s Focus</h2>
          <ul className="mt-3 flex flex-col gap-2 text-white/70">
            {dashboardData.todayFocus.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>
        <div className="border border-white/15 rounded-2xl p-4 bg-black">
          <p className="text-primary-orange text-3xl">&ldquo;</p>
          <p className="text-white italic">{dashboardData.quote}</p>
          <p className="text-white/40 text-sm mt-3">Javad Nasr</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
