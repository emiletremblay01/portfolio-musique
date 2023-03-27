import DropdownCategory from "./components/DropdownCategory";
import data from "../src/data/achievements.json";
import { Achievement } from "./types";

export default function App() {
  const achievementsJson: Achievement[] = data.list;
  return (
    <div className="xl:container py-6 mx-auto">
      <DropdownCategory
        title={"expériences en tant qu'employé"}
        achievementType={"employe"}
        achievements={achievementsJson}
      />
      <DropdownCategory
        title={"expériences en tant que contracteur"}
        achievementType={"contractor"}
        achievements={achievementsJson}
      />
      <DropdownCategory
        title={"récompenses"}
        achievementType={"award"}
        achievements={achievementsJson}
      />
      <DropdownCategory
        title={"formations"}
        achievementType={"formation"}
        achievements={achievementsJson}
      />
    </div>
  );
}
