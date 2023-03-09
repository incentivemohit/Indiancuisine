import Carousel from "react-bootstrap/Carousel";
import { foodItems } from "../FoodItems";

function Carousel1() {
  return (
    <Carousel fade>
      {foodItems.map((data) => (
        <Carousel.Item>
          <div className="item-image ">
            <img src={data.image} alt=" Loading..." className="w-100 h-100 " />
          </div>
          <Carousel.Caption>
            <h3 className="bg-danger rounded">{data.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel1;
