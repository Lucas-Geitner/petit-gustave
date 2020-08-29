
import Hero from '../components/Hero'
import Testimonial from "../components/Testimonial"
import Features from '../components/Features'

import PetitPlus from '../components/PetitPlus'
import Pricing from "../components/Pricing.js"
import FAQ from "../components/FAQ.js"
import dynamic from 'next/dynamic';
import TestimonalCaroussel from "../components/TestimonalCaroussel"
const Map = dynamic(() => import('../components/Map'), {
  ssr: false
});


export default function IndexPage(props) {
  return (
    <div>
        <Hero />
        <Features />
        <Map />
        <PetitPlus />
        <TestimonalCaroussel props={props} />
        <Pricing />
        <FAQ />
    </div>
  )
}
