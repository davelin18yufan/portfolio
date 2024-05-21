import { gridItems } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
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
              key={id}
              {...{
                id,
                title,
                description,
                img,
                imgClassName,
                titleClassName,
                className,
                spareImg,
              }}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}
