import { gridItems } from "@/data/index2";
import { BentoGrid2, BentoGridItem } from "./ui/BentoGrid2";

const Grid = () => {
  return (
    <section id="about" className="mt-40">
      <BentoGrid2 className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid2>
    </section>
  );
};

export default Grid;