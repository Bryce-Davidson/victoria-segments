import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, FullscreenControl, Source, Layer } from "react-map-gl";
import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import json from "../data/tracks.json";

console.log(json);

const layerStyle = {
  id: "route",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#FFA500",
    "line-width": 3,
  },
};

const Home: NextPage = () => {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 48.427589,
          longitude: -123.3327,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <Marker longitude={-123.3327} latitude={48.427589} color="red" />
        <FullscreenControl />
        <Source id="my-data" type="geojson" data={json.features[0]}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
};

export default Home;
