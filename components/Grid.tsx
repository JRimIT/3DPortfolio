/* eslint-disable react/jsx-key */
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <div>
      <section id="about">
        <BentoGrid>
          {gridItems.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Grid;
