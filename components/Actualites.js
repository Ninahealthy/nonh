//make as home page mix of latest (3 latest from each catygory) and read also ( 3 articles as list that can be injected inside blogpost)

import Nutrition from "./Cuisine";
import Fitness from "./Fitness";
import Latest from "./Latest";
import Beauty from "./Beauty";
import Read from "./Read";

export default function Actualites() {
  return (
    <>
      <actualites>
        <h1>Latest </h1>
        <Latest />
        <h1>Read Also</h1>
        <Read />
        <h1>Nutrition</h1>
        <Nutrition />
        <h1>Fitness</h1>
        <Fitness />
        <Beauty />
      </actualites>
    </>
  );
}
