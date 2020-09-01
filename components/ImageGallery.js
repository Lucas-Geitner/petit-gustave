import { Carousel } from 'react-responsive-carousel';
 
const CarousselWithImage = ({images}) =>  {
    // console.log({images})
    // console.log(images[0])
        return (
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                swipeable={true}
                width="490px"
            >
                {images.map(im => (
                <div className="relative mx-auto rounded" key={im?.sys?.id}>
                    <img src={im?.fields?.file?.url} width="490" alt={im?.fields?.title}/>
                </div>
                
                ))}
            </Carousel>
        );
}

export default CarousselWithImage
