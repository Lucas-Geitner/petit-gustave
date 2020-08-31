import Content from "../components/Content"
import Modal from "../components/Modal"
import {useState} from "react"

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  })
const FicheTechnique = ({ficheTechnique}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
    <>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Content ficheTechnique={ficheTechnique} setIsModalOpen={setIsModalOpen}/>
    </>
    )
}

export async function getStaticProps() {

  
    const ficheTechniqueRequest = await client.getEntries({
      content_type: "ficheTechnique"
    })
      const ficheTechnique = ficheTechniqueRequest.items[0]

    return {
      props: {
        ficheTechnique
      },
    }
  }

export default FicheTechnique