export default function TopicItems({ id, title, colorText="text-primary-orange", des, icon: Icon }) {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      text-center
      px-3
    "
    >
      <div
        className="
        w-24
        h-24
        rounded-full
        border-2
        border-primary-orange
        bg-black
        flex
        items-center
        justify-center
      "
      >
        <Icon
          className=
          {`text-primary-orange
          text-5xl
          
        `}
        />
      </div>

      <h3
        className=
     {`   mt-5
        ${colorText}
        font-semibold
        tracking-wider`}
      
      >
        {`0${id}. ${title}`}
      </h3>

      <p
        className="
        mt-3
        text-sm
        leading-7
        text-gray-400
      "
      >
        
      </p>
    </div>
  );
}
