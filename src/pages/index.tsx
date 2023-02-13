import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import Map, {
  FullscreenControl,
  Source,
  Layer,
  Marker,
  Popup,
} from "react-map-gl";
import bbox from "@turf/bbox";
import downtown_walk_feature from "../data/tracks";
import photo_map from "../data/photo_map";
import { Feature, Point } from "geojson";
import Pin from "./pin";
import Image from "next/image";

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
    "line-width": 6,
  },
};

const Home: NextPage = () => {
  const [popupInfo, setPopupInfo] = useState<any>(null);
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
        {photo_map.features.map((point: Feature<Point>, index: number) => {
          return (
            <Marker
              key={`marker-${index}`}
              longitude={point.geometry.coordinates[0]}
              latitude={point.geometry.coordinates[1]}
              anchor="bottom"
              onClick={(e) => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                setPopupInfo(point);
                e.originalEvent.stopPropagation();
              }}
            >
              {/* <Pin /> */}
              <Image
                alt="Oops"
                width={150}
                height={100}
                src={"/photos/" + point?.properties?.photo_name}
              />
            </Marker>
          );
        })}
        <Source id="my-data" type="geojson" data={downtown_walk_feature}>
          <Layer {...layerStyle} />
        </Source>
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            onClose={() => setPopupInfo(null)}
          >
            <div
              style={{
                width: "500px",
                height: "300px",
              }}
            >
              <Image
                alt="Oops"
                width={500}
                height={300}
                src={"/photos/" + popupInfo.properties.photo_name}
              />
            </div>
            {/* <img width="100%" src={"../data/photos/" + popupInfo.photo_name} /> */}
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default Home;
