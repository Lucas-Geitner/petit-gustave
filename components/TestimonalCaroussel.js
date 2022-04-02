import Carousel from "react-multi-carousel";
import Testimonial from "./Testimonial"
import { chunk } from "lodash"

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


const TestimonalCaroussel = ({ props, avisDesClients }) => {
  const testimonies = chunk(avisDesClients.items, 3)



  // return JSON.stringify(avisDesClients)
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h3 className="text-center font-mono text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ils vous racontent
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

        {testimonies.map(avi => {
          return <><div className="justify-around hidden md:flex">
            <Testimonial name={avi?.[0]?.fields?.nomDuClient} date={avi?.[0]?.fields?.dateDuVoyage} id={avi?.[0]?.fields?.nomDuClient} content={avi?.[0]?.fields?.contenu} key={avi?.[0]?.fields?.nomDuClient} />
            <Testimonial name={avi?.[1]?.fields?.nomDuClient} date={avi?.[1]?.fields?.dateDuVoyage} id={avi?.[0]?.fields?.nomDuClient} content={avi?.[1]?.fields?.contenu} key={avi?.[0]?.fields?.nomDuClient} />
            <Testimonial name={avi?.[2]?.fields?.nomDuClient} date={avi?.[2]?.fields?.dateDuVoyage} id={avi?.[0]?.fields?.nomDuClient} content={avi?.[2]?.fields?.contenu} key={avi?.[0]?.fields?.nomDuClient} />
          </div>
            <div className="block md:hidden">
              <Testimonial name={avi?.[0]?.fields?.nomDuClient} date={avi?.[0]?.fields?.dateDuVoyage} id={avi?.[0]?.fields?.nomDuClient} content={avi?.[0]?.fields?.contenu} key={avi?.[0]?.fields?.nomDuClient} />
            </div>
          </>
        })}

      </Carousel>
    </>)
}



export default TestimonalCaroussel