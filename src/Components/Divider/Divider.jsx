function Divider({ title }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex-1 h-px bg-primary-orange ml-6"></div>

      <span className="text-primary-orange text-sm font-semibold tracking-[0.3em] uppercase whitespace-nowrap">
        {title}
      </span>

      <div className="flex-1 h-px bg-primary-orange mr-6"></div>
    </div>
  );
}

export default Divider;