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

return (
  <>
  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
  <h3 className="text-center font-mono text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
 Ce que pense les gens qui sont venus
    </h3>
  </div>
    <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true}
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all .5"
  containerclassName="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
  deviceType={props.deviceType}
  dotListclassName="custom-dot-list-style"
  itemclassName="carousel-item-padding-40-px bg-lavande-20"
>

  {avisDesClients.items.map(avi => {
    return <Testimonial name={avi?.fields?.nomDuClient} date={avi.fields.dateDuVoyage} id={avi.sys.id} content={avi.fields.contenu} key={avi.sys.id}/>
  })}

</Carousel>
</>)
}


 
export default TestimonalCaroussel