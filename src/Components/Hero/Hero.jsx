

function Hero({
  HeroImage,
  titlePage,
  textHyper,

  
  textPageDescription,
  buttons,
  textPageEnd,
  brand
}) {
  return (
    <div className="bg-black  px-5 ss:pt-20 sm:px-8 sm:pt-24 lg:px-12 xl:px-10 pt-8 lg:pt-30 lg:pb-5  flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-auto)] ">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
        <div className="flex flex-col gap-4">
          <span className="text-primary-orange font-bold tracking-widest text-sm sm:text-base">
            {titlePage}
          </span>

          <h2 className="font-bold leading-tight">
            <span className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              {textHyper}{" "}
              
            </span>
          </h2>

        

          <p className="text-gray-300 max-w-95 mx-auto lg:mx-0 text-sm sm:text-base leading-8">
            {textPageDescription}
          </p>
        </div>

        <div className="flex flex-col ss:flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {buttons}
        </div>

        <div className="text-white">
          <p className="text-sm sm:text-base text-center lg:text-left">
            {textPageEnd}
          </p>

          <div className="flex flex-wrap justify-center w-full lg:justify-start gap-x-5 lg:gap-3 gap-y-5 mt-6 text-lg sm:text-xl lg:flex-wrap">
            {brand}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col relative justify-center lg:justify-end">
        <img
          src={HeroImage}
          alt="Javad Nasr"
          className="w-full  h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
