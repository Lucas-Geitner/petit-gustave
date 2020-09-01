import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import MapSlider from "./MapSlider"
import MapSliderLeft from "./MapSliderLeft"


class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '70vh',
      latitude: 44.6136,
      longitude:  4.87306,
      zoom: 9,
    }
  };

  render() {

    const activitesExterieur = this.props?.activitesExterieur
    console.log(activitesExterieur)
    return (
      <div className="relative">
      <ReactMapGL
        mapStyle="mapbox://styles/lucasgeitner2/ckefibuyf1wfo19qqd5yvwbkb"
        mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNnZWl0bmVyMiIsImEiOiJja2VmaDZqb3QwcWQxMzVudHpxY3N0ODIwIn0.yDemqpaywa4rkrspsI6RBA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        
        
        <Marker latitude={44.6436} longitude={4.87306} offsetLeft={-20} offsetTop={-10}>
          <div className="text-2xl">🏠</div>
        </Marker>


        {activitesExterieur.items.map(act => (
          <Marker latitude={act.fields.location.lat} longitude={act.fields.location.lon} offsetLeft={-20} offsetTop={-10} key={act.sys.id}>
          <div className="text-2xl">🏇🏻</div>
          </Marker>          
        ))}

        </ReactMapGL>
        <MapSliderLeft />

        <MapSlider activitesExterieur={activitesExterieur} />

        </div>
    );
  }
}

export default Map;
