import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = (props) => {
  return (  
    <div className="kitchen">
      <Oven />
      <Sink />
      <h1>Kitchen</h1>
    </div>
  );
}

export default Kitchen