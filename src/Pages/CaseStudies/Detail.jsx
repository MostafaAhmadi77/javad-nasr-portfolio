import { Link, useParams } from "react-router";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { casestudiesTable } from "../../data/caseStudiesData";
import Button from "../../Components/Button/Button";
import NotFound from "../../Components/404/NotFound";

function CaseStudyDetail() {
  const { id } = useParams();
  const study = casestudiesTable.find((item) => item.id === id);

  if (!study) {
    return <NotFound />;
  }

  const TypeIcon = study.typeIcon;
  const LocIcon = study.locIcon;
  const stats = [
    { num: study.firstNum, title: study.firstTitle },
    { num: study.secoundNum, title: study.secoundTitle },
    { num: study.thirdNum, title: study.thirdTitle },
  ];

  return (
    <div className="bg-black text-white ss:px-4 sm:px-6 md:px-10 pt-24 pb-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/caseStudies"
          className="text-white/60 inline-flex items-center gap-2 text-sm"
        >
          <GoArrowLeft /> Back to Case Studies
        </Link>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <span className="rounded border border-primary-orange px-3 py-2 text-primary-orange">
            {study.id}
          </span>
          <span className="text-primary-orange text-xs tracking-widest">
            {study.shortTitle}
          </span>
        </div>

        <h1 className="font-family-CormorantGaramondBold ss:text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
          {study.longTitle}
        </h1>

        <img
          src={study.img}
          alt={study.longTitle}
          className="w-full rounded-2xl mt-8 border border-white/10 object-cover max-h-96"
        />

        <p className="text-white/70 leading-8 mt-8">{study.description}</p>

        <div className="flex flex-wrap gap-6 mt-6 text-white/60 text-sm">
          {TypeIcon && (
            <span className="inline-flex items-center gap-2">
              <TypeIcon /> {study.type}
            </span>
          )}
          {LocIcon && (
            <span className="inline-flex items-center gap-2">
              <LocIcon /> {study.loc}
            </span>
          )}
        </div>

        <div className="grid ss:grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="font-family-PTSerif-Regular text-4xl text-primary-orange">
                {stat.num}
              </p>
              <p className="text-white/60 text-sm mt-3">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="border border-primary-orange rounded-2xl p-6 mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/80 leading-7 text-center sm:text-left">
            Every organization has potential. Let&apos;s unlock yours — start
            with a conversation about a case like this one.
          </p>
          <Button
            link="/consultation"
            title="Discuss a Similar Case"
            icon={<GoArrowRight />}
            styleBtn="flex items-center gap-2 bg-primary-orange text-white px-5 py-3 rounded-xl whitespace-nowrap"
          />
        </div>
      </div>
    </div>
  );
}

export default CaseStudyDetail;
