import Carousel from "react-multi-carousel";
import Testimonial from "./Testimonial"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1 // optional, default to 1.
  }
};

const TestimonalCaroussel = (props) => {

return (<Carousel
  swipeable={false}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

  <Testimonial name="HELLO" />
  <Testimonial  name="Wesh"/>
  <Testimonial name="Test" />
  <Testimonial name="Grrs" />

</Carousel>)
}


 
export default TestimonalCaroussel