import { useState } from "react";
import { Link } from "react-router";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import {
  roles,
  reasons,
  urgencies,
  supports,
  challengeOptions,
  areaOptions,
  diagnosisFor,
  formErrorFor,
} from "./botLogic";
import {
  addLead,
  newLeadId,
  scoreLead,
  followUpFor,
} from "../../utils/leadsStorage";

const questions = [
  { key: "role", title: "Who are you?", options: roles },
  { key: "reason", title: "What brings you here?", options: reasons },
  { key: "challenge", title: "What is your main challenge?", options: null },
  { key: "area", title: "Which area needs attention?", options: null },
  { key: "urgency", title: "How urgent is it?", options: urgencies },
  { key: "support", title: "What kind of support are you looking for?", options: supports },
];

function Consultation() {
  const [stage, setStage] = useState("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    company: "",
    industry: "",
    companySize: "",
    email: "",
    phone: "",
    country: "",
    topic: "",
    challengeDetail: "",
    preferredContact: "Online Meeting",
  });
  const [formError, setFormError] = useState("");
  const [submittedLead, setSubmittedLead] = useState(null);

  const question = questions[questionIndex];
  const options =
    question.key === "challenge"
      ? challengeOptions(answers.reason)
      : question.key === "area"
        ? areaOptions(answers.reason)
        : question.options;

  function answerQuestion(value) {
    const next = { ...answers, [question.key]: value };
    setAnswers(next);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStage("diagnosis");
    }
  }

  function goBack() {
    if (stage === "diagnosis") {
      setStage("questions");
      setQuestionIndex(questions.length - 1);
      return;
    }
    if (stage === "form") {
      setStage("diagnosis");
      return;
    }
    if (questionIndex === 0) {
      setStage("intro");
    } else {
      setQuestionIndex(questionIndex - 1);
    }
  }

  function start() {
    setAnswers({});
    setQuestionIndex(0);
    setStage("questions");
  }

  function submitForm(event) {
    event.preventDefault();
    const validationError = formErrorFor(form);
    if (validationError) {
      setFormError(validationError);
      return;
    }
    const info = diagnosisFor(answers.area);
    const score = scoreLead(answers);
    const lead = {
      id: newLeadId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: "new",
      ...answers,
      diagnosis: info.diagnosis,
      diagnosisExplanation: info.explanation,
      recommendedEngagement:
        answers.support === "Not sure yet — recommend for me"
          ? info.engagement
          : info.engagement,
      leadScore: score,
      recommendedFollowUp: followUpFor(score),
      ...form,
      fullName: form.fullName.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
    };
    addLead(lead);
    setSubmittedLead(lead);
    setFormError("");
    setStage("done");
  }

  const diagnosis = answers.area ? diagnosisFor(answers.area) : null;

  return (
    <div className="bg-black text-white ss:px-4 sm:px-6 md:px-10 pt-24 pb-10 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {stage === "intro" && (
          <div className="border border-white/10 rounded-2xl ss:p-4 sm:p-8">
            <span className="text-primary-orange text-xs tracking-widest">
              START A CONVERSATION
            </span>
            <h1 className="ss:text-2xl sm:text-4xl font-bold mt-4">
              AI Consultation Assistant
            </h1>
            <p className="text-white/60 leading-7 mt-4">
              Answer a few short questions and the assistant will point you to
              the right path — then you can request a consultation. Not every
              question is shown to everyone: the next question depends on your
              previous answers.
            </p>
            <button
              type="button"
              onClick={start}
              className="bg-primary-orange text-white px-5 py-3 rounded-xl mt-8 inline-flex items-center gap-2"
            >
              Start a Conversation <GoArrowRight />
            </button>
          </div>
        )}

        {stage === "questions" && (
          <div className="border border-white/10 rounded-2xl ss:p-4 sm:p-8">
            <p className="text-white/40 text-sm">
              Question {questionIndex + 1} of {questions.length}
            </p>
            <div className="h-2 bg-white/10 rounded-full mt-3">
              <div
                className="h-2 bg-primary-orange rounded-full"
                style={{
                  width: `${((questionIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <h1 className="ss:text-2xl sm:text-3xl font-bold mt-6">
              {question.title}
            </h1>
            <div className="flex flex-col gap-3 mt-6">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => answerQuestion(option)}
                  className="text-left border border-white/15 rounded-xl px-4 py-3 text-white/80 hover:border-primary-orange hover:text-white transition"
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={goBack}
              className="text-white/60 mt-6 inline-flex items-center gap-2 text-sm"
            >
              <GoArrowLeft /> Back
            </button>
          </div>
        )}

        {stage === "diagnosis" && diagnosis && (
          <div className="border border-white/10 rounded-2xl ss:p-4 sm:p-8">
            <span className="text-primary-orange text-xs tracking-widest">
              AI DIAGNOSIS
            </span>
            <h1 className="ss:text-2xl sm:text-3xl font-bold mt-4">
              {diagnosis.diagnosis}
            </h1>
            <p className="text-white/70 leading-7 mt-4">
              {diagnosis.explanation}
            </p>
            <div className="border border-primary-orange rounded-2xl p-4 mt-6">
              <p className="text-primary-orange text-xs tracking-widest">
                RECOMMENDED NEXT STEP
              </p>
              <p className="text-white/80 leading-7 mt-2">
                {diagnosis.engagement}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                type="button"
                onClick={() => setStage("form")}
                className="bg-primary-orange text-white px-5 py-3 rounded-xl inline-flex items-center gap-2"
              >
                Request a Consultation <GoArrowRight />
              </button>
              <Link
                to="/services"
                className="border border-white/30 text-white px-5 py-3 rounded-xl inline-flex items-center gap-2"
              >
                Explore My Services
              </Link>
            </div>
            <button
              type="button"
              onClick={goBack}
              className="text-white/60 mt-6 inline-flex items-center gap-2 text-sm"
            >
              <GoArrowLeft /> Back
            </button>
          </div>
        )}

        {stage === "form" && (
          <form
            onSubmit={submitForm}
            className="border border-white/10 rounded-2xl ss:p-4 sm:p-8"
          >
            <span className="text-primary-orange text-xs tracking-widest">
              LET&apos;S DISCUSS YOUR CHALLENGE
            </span>
            <h1 className="ss:text-2xl sm:text-3xl font-bold mt-4">
              Request a Consultation
            </h1>
            <p className="text-white/50 text-sm mt-2">
              Fields marked * are required. Your answers above are already
              saved with this request.
            </p>
            <div className="grid ss:grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <label className="block text-white text-sm">
                Full Name *
                <input
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
              <label className="block text-white text-sm">
                Job Title
                <input
                  value={form.jobTitle}
                  onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
              <label className="block text-white text-sm">
                Company / Organization *
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
              <label className="block text-white text-sm">
                Industry
                <input
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
              <label className="block text-white text-sm">
                Company Size
                <select
                  value={form.companySize}
                  onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                >
                  <option value="">Select…</option>
                  <option>Startup</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Enterprise</option>
                </select>
              </label>
              <label className="block text-white text-sm">
                Email Address *
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
              <label className="block text-white text-sm">
                Phone / WhatsApp
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
              <label className="block text-white text-sm">
                Country
                <input
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
                />
              </label>
            </div>
            <label className="block text-white text-sm mt-4">
              What would you like to discuss?
              <input
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
              />
            </label>
            <label className="block text-white text-sm mt-4">
              Briefly describe your main challenge
              <textarea
                rows={4}
                value={form.challengeDetail}
                onChange={(e) => setForm({ ...form, challengeDetail: e.target.value })}
                className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
              />
            </label>
            <fieldset className="mt-4">
              <legend className="text-white text-sm">
                Preferred way to connect
              </legend>
              <div className="flex flex-wrap gap-3 mt-2">
                {["Online Meeting", "Phone Call", "WhatsApp", "Email"].map(
                  (way) => (
                    <label
                      key={way}
                      className={`border rounded-xl px-4 py-2 text-sm cursor-pointer ${
                        form.preferredContact === way
                          ? "border-primary-orange text-primary-orange"
                          : "border-white/20 text-white/70"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value={way}
                        checked={form.preferredContact === way}
                        onChange={(e) =>
                          setForm({ ...form, preferredContact: e.target.value })
                        }
                        className="hidden"
                      />
                      {way}
                    </label>
                  )
                )}
              </div>
            </fieldset>
            {formError && <p className="text-red-400 text-sm mt-4">{formError}</p>}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                type="submit"
                className="bg-primary-orange text-white px-5 py-3 rounded-xl"
              >
                Request a Consultation
              </button>
              <button
                type="button"
                onClick={goBack}
                className="border border-white/30 text-white px-5 py-3 rounded-xl"
              >
                Back
              </button>
            </div>
          </form>
        )}

        {stage === "done" && submittedLead && (
          <div className="border border-white/10 rounded-2xl ss:p-4 sm:p-8">
            <h1 className="ss:text-2xl sm:text-3xl font-bold">
              Thank you, {submittedLead.fullName}.
            </h1>
            <p className="text-white/70 leading-7 mt-4">
              Your consultation request has been received. Recommended next
              step: {submittedLead.recommendedEngagement}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/services"
                className="border border-primary-orange text-primary-orange px-5 py-3 rounded-xl inline-flex items-center gap-2"
              >
                Explore My Services <GoArrowRight />
              </Link>
              <Link
                to="/"
                className="border border-white/30 text-white px-5 py-3 rounded-xl"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Consultation;
