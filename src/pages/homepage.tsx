import { CardClockIn } from "../components/card-clock-in";
import { CardDashboard } from "../components/card-dashboard";
import { CardParent } from "../components/card-parent";

export const Homepage = () => (
  <div>
    <CardParent>
      <CardClockIn onClick={() => {}} />
      <CardDashboard />
    </CardParent>
  </div>
);
