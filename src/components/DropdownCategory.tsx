import { Achievement, achievementType } from "../types";

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
  achievements.sort((a, b) => {
    return b.year - a.year;
  });
  return (
    <>
      <h1 className=" px-4 text-2xl uppercase font-extrabold py-5">{title}</h1>
      <div className=" flex flex-col gap-4 text-sm ">
        {achievements.map((achievement) => {
          if (achievement.type == achievementType)
            return (
              <div className=" bg-slate-200  flex px-6 relative ">
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
              </div>
            );
        })}
      </div>
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
