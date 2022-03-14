import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div>
      <h1>This is the FloorPlan!</h1>
      <Kitchen />
      <Bedroom bedNum={1} />
      <LivingRoom />
      <Bedroom bedNum={2} />
      <Bath size='Half'/>
      <Bedroom bedNum={3} />
      <Bath size='Full'/>
    </div>
  );
}

export default FloorPlan