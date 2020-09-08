import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import MapSlider from "./MapSlider"
import MapSliderLeft from "./MapSliderLeft"


class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: '70vh',
      latitude: 44.6136,
      longitude:  4.87306,
      zoom: 9,
    }
  };

  render() {

    const activitesExterieur = this.props?.activitesExterieur
    return (
      <div className="hidden lg:block">
      <div className="relative flex" id="venir">
      <MapSliderLeft />

      <ReactMapGL
        mapStyle="mapbox://styles/lucasgeitner2/ckefibuyf1wfo19qqd5yvwbkb"
        mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNnZWl0bmVyMiIsImEiOiJja2VmaDZqb3QwcWQxMzVudHpxY3N0ODIwIn0.yDemqpaywa4rkrspsI6RBA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        
        <Marker latitude={44.6436} longitude={4.87306} offsetLeft={-20} offsetTop={-10}>
          <div className="text-2xl">🏠</div>
        </Marker>


        {activitesExterieur.items.map(act => {
          if(!act?.fields?.location?.lat){
            return null
          }
          return (
            <Marker latitude={act?.fields?.location?.lat} longitude={act?.fields?.location?.lon} offsetLeft={-20} offsetTop={-10} key={act.sys.id}>
              <svg width="27.5" height="34.5" viewBox="0 0 110 138" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.3763 95.6494C65.0242 96.0222 64.6705 96.3965 64.318 96.7724C64.318 96.7735 64.3167 96.7739 64.3163 96.7745C62.0146 99.2227 59.3736 102.071 57.1727 104.619C56.6201 105.255 55.8308 105.614 54.9998 105.614C54.583 105.614 54.1765 105.523 53.8055 105.353C52.8275 104.904 53.2744 104.836 44.6228 95.6494C31.7505 97.1812 26.1572 101.026 26.1572 102.726C26.1572 105.022 35.97 110.4 54.9994 110.4C74.0287 110.4 83.8421 105.022 83.8421 102.726C83.8423 101.026 78.2489 97.1806 65.3763 95.6494Z" fill="black"/>
<path d="M55 98.372C70.3577 81.2667 94.415 60.1671 94.415 39.3589C94.415 17.6571 76.7336 0 55 0C33.266 0 15.585 17.6571 15.585 39.3589C15.585 60.132 39.5366 81.1675 55 98.372ZM21.1258 39.3561C21.1258 20.689 36.3219 5.5021 55.0006 5.5021C73.6772 5.5021 88.8725 20.689 88.8725 39.3561C88.8725 58.0251 73.6772 73.2131 55.0006 73.2131C36.3219 73.2131 21.1258 58.0253 21.1258 39.3561Z" fill="black"/>
</svg>
            </Marker>          
          )}
        )}

        </ReactMapGL>
        <MapSlider activitesExterieur={activitesExterieur} />
        </div>
        </div>
    );
  }
}

export default Map;
