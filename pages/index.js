
import Hero from '../components/Hero'
import {useState} from "react"
import Features from '../components/Features'
import PetitPlus from '../components/PetitPlus'
import Pricing from "../components/Pricing.js"
import FAQ from "../components/FAQ.js"
import dynamic from 'next/dynamic';
import TestimonalCaroussel from "../components/TestimonalCaroussel"
import Modal from "../components/Modal"

const Map = dynamic(() => import('../components/Map'), {
  ssr: false
});

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export default function IndexPage({header, avisDesClients, faq, carrousel, argument}, props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Hero header={header} setIsModalOpen={setIsModalOpen} />
        <Features  carrousel={carrousel} argument={argument}/>
        <Map />
        <PetitPlus />
        <TestimonalCaroussel props={props} avisDesClients={avisDesClients}/>
        <Pricing setIsModalOpen={setIsModalOpen} />
        <FAQ faq={faq}/>

    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const headerRequest = await client.getEntries({
    content_type: "pageHeaderLePetitGustave"
  })
  const header = headerRequest.items[0]

  const avisDesClients = await client.getEntries({
    content_type: "avisDesClients"
  })


  const faq = await client.getEntries({
    content_type: "faq"
  })

  
  const carrousel = await client.getEntries({
    content_type: "carrousel"
  })


  const argumentsRequest = await client.getEntries({
    content_type: "arguments"
  })

  const argument = argumentsRequest.items[0]


  // faq
  return {
    props: {
      header,
      avisDesClients,
      faq,
      carrousel,
      argument
    },
  }
}
