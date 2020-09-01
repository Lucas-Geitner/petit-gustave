import { Carousel } from 'react-responsive-carousel';
 
const CarousselWithImage = () =>  {
        return (
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                swipeable={true}

            >
                <div className="relative mx-auto rounded">
                    <img src="https://a0.muscache.com/im/pictures/87218833/77d315df_original.jpg?aki_policy=xx_large" width="490"/>
                </div>
                <div className="relative mx-auto rounded">
                    <img src="https://picsum.photos/id/1018/1000/600/" width="490" />
                </div>
                <div className="relative mx-auto rounded" width="490">
                    <img src="https://picsum.photos/id/1019/1000/600/" width="490" />
                </div>
                <div className="relative mx-auto rounded">
                    <img src="https://a0.muscache.com/im/pictures/87218833/77d315df_original.jpg?aki_policy=xx_large" width="490"/>
                </div>
                <div className="relative mx-auto rounded">
                    <img src="https://picsum.photos/id/1018/1000/600/" width="490" />
                </div>
                <div className="relative mx-auto rounded" width="490">
                    <img src="https://picsum.photos/id/1019/1000/600/" width="490" />
                </div>
                <div className="relative mx-auto rounded">
                    <img src="https://a0.muscache.com/im/pictures/87218833/77d315df_original.jpg?aki_policy=xx_large" width="490"/>
                </div>

            </Carousel>
        );
}

export default CarousselWithImage
