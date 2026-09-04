import React from "react";
import { topicItems } from "../../data/data";
import TopicItems from "../../Pages/Home/components/TopicItems";

function Items() {
  return (
    <>
      <section className="relative mt-14">
        {/* LINE */}

        <div
          className="
                        hidden
                        lg:block
    
                        absolute
                        top-12
                        left-0
                        right-0
    
                        border-t
                        border-dashed
                        border-primary-orange
    
                        opacity-50
                      "
          data-aos="fade"
          data-aos-duration="1500"
        />

        {/* ITEMS */}

        <div
          className="
                        grid
                        grid-cols-1
                        sm:grid-cols-1
                        lg:grid-cols-5
    
                        gap-10
    
                        relative
                        z-10
                      "
        >
          {topicItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="flip-left"
              data-aos-duration="800"
              data-aos-delay={index * 150}
            >
              <TopicItems {...item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Items;
