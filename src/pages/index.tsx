import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { FullscreenControl, Source, Layer, MapRef } from "react-map-gl";
import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import json from "../data/tracks.json";
import { useRef } from "react";

const geo: any = json;

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

function avgList(list: number[]) {
  let sum = 0;
}

function centerPoint(geo: any) {
  const coords = geo.features[0].geometry.coordinates[0];
  const lats = coords.map((coord: any) => {
    return coord[1];
  });
  const longs = coords.map((coord: any) => {
    return coord[0];
  });

  const sumLats = lats.reduce((a: number, b: number) => a + b);
  const sumLongs = longs.reduce((a: number, b: number) => a + b);

  return {
    latitude: sumLats / lats.length,
    longitude: sumLongs / longs.length,
    zoom: 14.5,
  };
}

const Home: NextPage = () => {
  return (
    <div>
      <Map
        initialViewState={centerPoint(geo)}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <FullscreenControl />
        <Source id="my-data" type="geojson" data={geo}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
};

export default Home;
