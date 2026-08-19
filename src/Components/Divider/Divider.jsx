function Divider({ title }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex justify-end flex-1 relative h-px bg-[linear-gradient(to_right,#050302_0%,#FB5701_91%)] ml-6">
        <section className=" w-[0.5rem]  h-[0.5rem] rounded-full absolute -top-1 bg-primary-orange"></section>
      </div>

      <span
        
        className={`  font-bold tracking-[0.3em] uppercase whitespace-nowrap`}
      >
        <h3>{title}</h3>
      </span>

      <div className="flex-1 h-px bg-[linear-gradient(to_left,#050302_0%,#FB5701_91%)] mr-6">
        <section className=" w-[0.5rem]  h-[0.5rem] rounded-full absolute  -mt-1 bg-primary-orange"></section>
      </div>
    </div>
  );
}

export default Divider;
