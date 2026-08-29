function ServiceCart({ title, description, item, icon }) {
  return (
    <div>
      <div
        className=" bg-[#161816] flex 
        "
      >
        <div className=" flex flex-col ">
          <div className="flex justify-center items-center ">
            <span className="text-primary-orange text-[5rem] border rounded-full p-1">
              {icon}
            </span>
            <div className="w-[15rem] flex-1">
              <h3 className="ml-3">
                <span className=" text-white font-bold text-[1.8rem] font-family-CormorantGaramondBold">
                  {title}
                </span>
              </h3>
            </div>
          </div>
          <div className="">
            <span className="text-white">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCart;
