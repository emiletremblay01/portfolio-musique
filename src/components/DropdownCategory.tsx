import { useState } from "react";
import { Achievement, achievementType } from "../types";
import "animate.css";

type DropdownCategoryProps = {
  title: string;
  achievementType: achievementType;
  achievements: Achievement[];
};

export default function DropdownCategory({
  title,
  achievementType,
  achievements,
}: DropdownCategoryProps) {
  const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth > 640);

  achievements.sort((a, b) => {
    return b.year - a.year;
  });
  return (
    <>
      <h1 className="relative w-full px-4 text-2xl uppercase font-extrabold py-5">
        {title}
        <button
          className=" hover:bg-slate-50 active:bg-slate-200 rounded-full absolute bottom-6 my-auto ml-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <DropdownIcon />
        </button>
      </h1>
      {isOpen && (
        <section className=" flex flex-col gap-4 text-sm ">
          {achievements.map((achievement) => {
            if (achievement.type == achievementType)
              return (
                <figure className=" bg-slate-200  flex px-6 relative ">
                  <div className="z-1 max-w-2xl ">
                    {achievement.hyperlink ? (
                      <a href={achievement.hyperlink} target="_blank">
                        <h2 className=" text-lg font-bold text-blue-700 underline underline-offset-2 hover:text-blue-500">
                          {achievement.name}
                        </h2>
                      </a>
                    ) : (
                      <h2 className=" text-lg font-bold">{achievement.name}</h2>
                    )}

                    <p className=" font-normal">{achievement.description}</p>
                    <p className=" md:hidden">
                      <Date
                        year={achievement.year}
                        startYear={achievement.startYear}
                      />
                    </p>
                  </div>

                  <div className="md:block hidden">
                    <Date
                      year={achievement.year}
                      startYear={achievement.startYear}
                    />
                  </div>
                </figure>
              );
          })}
        </section>
      )}
    </>
  );
}

type DateProps = Pick<Achievement, "year" | "startYear">;
function Date({ year, startYear }: DateProps) {
  return (
    <>
      <div className="md:opacity-20 opacity-40 md:text-5xl z-0 md:absolute  md:right-0 md:px-6 ">
        {startYear && <span>{startYear}-</span>}
        {year}
      </div>
    </>
  );
}

function DropdownIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
