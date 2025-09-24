import { CardClockIn } from "./card-clock-in";
import { CardDashboard } from "./card-dashboard";
import { CardParent } from "./card-parent";

export const Homepage = () => (
  <div>
    <CardParent>
      <CardClockIn />
      <CardDashboard />
    </CardParent>
  </div>
);
