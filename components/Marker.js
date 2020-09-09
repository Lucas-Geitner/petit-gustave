import {Marker} from 'react-map-gl';

const CustomMarker = ({act}) => {
    if(!act?.fields?.location?.lat){
        return null
      }
      let logo = "/images/icon/star.png"

      if(act?.fields?.type === "village perché") { logo = "/images/icon/village.svg"}
      if(act?.fields?.type === "chateaux") { logo = "/images/icon/chateau.png"}
      if(act?.fields?.type === "librairies") { logo = "/images/icon/book.png"}
      if(act?.fields?.type === "foret") { logo = "/images/icon/foret.png"}
      if(act?.fields?.type === "equitation") { logo = "/images/icon/cheval.png"}

      
      return (
        <Marker latitude={act?.fields?.location?.lat} longitude={act?.fields?.location?.lon} offsetLeft={-20} offsetTop={-10} key={act.sys.id}>
            <img src={logo} width="27.5" height="34.5"  />
        </Marker>          
      )
}


export default CustomMarker