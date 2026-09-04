function CartIcon({ icon, w="w-20", h="h-20", title, description, option, setylDec, flex, styles, index }) {
  return (
    <>
      <div
        data-aos="flip-up"
        data-aos-duration="900"
        data-aos-delay={index * 120}
        className={`   group
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
      
      
      ${styles}
      items-start
      
      
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-primary-orange
      hover:shadow-[0_20px_50px_rgba(251,87,1,.18)]`}
      >
        <div className={flex}>
          <div className={`${w} ${h} rounded-full border border-primary-orange/40 bg-primary-orange/5 flex items-center justify-center`}>
            <span className="text-5xl sm:text-6xl text-primary-orange">
              {icon}
            </span>
          </div>
          <h3 className="font-bold text-white  text-xl sm:text-2xl lg:text-[1rem] leading-snug">
            {title}
          </h3>
        </div>
        <p className={`text-sm ${setylDec}   sm:text-base text-zinc-400 leading-7`}>
          {description}
        </p>
        <div className="text-white ">
          
          {option}
        </div>
      </div>
    </>
  );
}

export default CartIcon;
