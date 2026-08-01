export default function MainTitle({ title, des }) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      <h2
        className="
        text-primary-orange
        text-2xl
        lg:text-4xl
        font-bold
        tracking-[5px]
      "
      >
        {title}
      </h2>

      <p
        className="
        mt-3
        text-gray-300
        text-sm
        lg:text-base
      "
      >
        {des}
      </p>

    </div>
  );
}