import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import { useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { FullscreenControl, Source, Layer, MapRef } from "react-map-gl";
import bbox from "@turf/bbox";
import downtown_walk_feature from "../data/tracks";

const layerStyle: any = {
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
  const [minLng, minLat, maxLng, maxLat] = bbox(downtown_walk_feature);
  return (
    <div>
      <Map
        initialViewState={{
          fitBoundsOptions: {
            padding: { top: 100, bottom: 100, left: 100, right: 100 },
          },
          bounds: [minLng, minLat, maxLng, maxLat],
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <FullscreenControl />
        <Source id="my-data" type="geojson" data={downtown_walk_feature}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
};

export default Home;
