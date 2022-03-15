import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  return ( 
    <div className="floorplan">
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