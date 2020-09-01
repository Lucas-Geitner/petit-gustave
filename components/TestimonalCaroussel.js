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

const TestimonalCaroussel = ({props, avisDesClients}) => {

return (<Carousel
  swipeable={false}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all .5"
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px bg-lavande-20"
>

  {avisDesClients.items.map(avi => {
    return <Testimonial name={avi.fields.nomDuClient} img={avi.fields.photo.fields.file.url} date={avi.fields.dateDuVoyage} imgTitle={avi.fields.photo.fields.file.title} key={avi.sys.id} content={avi.fields.contenu}/>
  })}

</Carousel>)
}


 
export default TestimonalCaroussel