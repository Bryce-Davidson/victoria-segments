import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import Map, {
  FullscreenControl,
  Source,
  Layer,
  Marker,
  Popup,
  MapRef,
} from "react-map-gl";
import bbox from "@turf/bbox";
import downtown_walk_feature from "../data/tracks";
import photo_map from "../data/photo_map";
import { Feature, Point } from "geojson";
import Image from "next/image";
import ScrollblePhotoTray from "../components/ScrollablePhotoTray/ScrollablePhotoTray";

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
    "line-width": 4,
  },
};

const Home: NextPage = () => {
  const mapRef = useRef<MapRef>(null);

  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [minLng, minLat, maxLng, maxLat] = bbox(downtown_walk_feature);

  const onClick = (event: any) => {
    mapRef.current?.flyTo({
      center: [-123.37054, 48.42098],
      zoom: 17,
    });
  };

  return (
    <div className="relative" style={{ height: "100vh" }}>
      <button onClick={onClick} className="p-10">
        FLY TO
      </button>
      <Map
        ref={mapRef}
        initialViewState={{
          fitBoundsOptions: {
            padding: { top: 100, bottom: 100, left: 100, right: 100 },
          },
          bounds: [minLng, minLat, maxLng, maxLat],
        }}
        style={{ width: "100%", height: "100%" }}
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
                // If we let the click event propagate to the map, it will immediately close the popup
                // with `closeOnClick: true`
                setPopupInfo(point);
                e.originalEvent.stopPropagation();
              }}
            >
              {/* <Pin /> */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  overflow: "hidden",
                  borderRadius: "50%",
                  background: "#ffffff",
                  border: "2px solid white",
                  position: "relative",
                }}
              >
                <Image
                  alt="Oops"
                  style={{
                    width: "100%",
                    height: "auto",
                    scale: "1.5",
                  }}
                  width={500}
                  height={500}
                  className="mt-2"
                  src={"/photos/" + point?.properties?.photo_name}
                />
              </div>
            </Marker>
          );
        })}
        <Source id="my-data" type="geojson" data={downtown_walk_feature}>
          <Layer {...layerStyle} />
        </Source>
        {popupInfo && (
          <Popup
            anchor="top"
            closeButton={false}
            focusAfterOpen={true}
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            maxWidth="800px"
            onClose={() => setPopupInfo(null)}
          >
            <Image
              alt="Oops"
              className="w-full"
              width={400}
              height={350}
              src={"/photos/" + popupInfo.properties.photo_name}
            />
          </Popup>
        )}
      </Map>
      <ScrollblePhotoTray />
    </div>
  );
};

export default Home;
