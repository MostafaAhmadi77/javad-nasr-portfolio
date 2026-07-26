

function CartIcon({ icon, title, description }) {
  return (
    <>
      <div
      className="
      group
      w-full
      min-h-[280px]
      sm:min-h-[300px]
      lg:min-h-[330px]
      rounded-2xl
      bg-[#111111]
      border
      border-zinc-800
      p-6
      flex
      flex-col
      items-center
      justify-between
      text-center
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-primary-orange
      hover:shadow-[0_20px_50px_rgba(251,87,1,.18)]
      "
    >
      <div className="w-20 h-20 rounded-full border border-primary-orange/40 bg-primary-orange/5 flex items-center justify-center">
        <span className="text-5xl sm:text-6xl text-primary-orange">
          {icon}
        </span>
      </div>

      <h3 className="font-bold text-xl sm:text-2xl leading-snug">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-zinc-400 leading-7">
        {description}
      </p>
    </div>
    </>
  );
}

export default CartIcon;
