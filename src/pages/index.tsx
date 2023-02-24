import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import Map, {
  FullscreenControl,
  Source,
  Layer,
  Popup,
  MapRef,
  MapSourceDataEvent,
} from "react-map-gl";
import bbox from "@turf/bbox";
import downtown_walk_feature from "../data/tracks";
import photo_map from "../data/photo_map";
import Image from "next/image";
import ScrollblePhotoTray from "../components/ScrollablePhotoTray/ScrollablePhotoTray";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "../components/Layers/PhotoClusterLayers";
import PhotoMarkers from "../components/PhotoMarkers";

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

  function handleClusterClick(event: any) {
    console.log(event.features);
  }

  function handleMarkerClick(coords: [number, number]) {
    mapRef.current?.flyTo({
      center: coords,
      zoom: 16,
      duration: 1000,
      offset: [0, 20],
    });
  }

  return (
    <div className="relative" style={{ height: "100vh" }}>
      <Map
        onDrag={() => setPopupInfo(null)}
        ref={mapRef}
        initialViewState={{
          fitBoundsOptions: {
            padding: { top: 100, bottom: 350, left: 100, right: 100 },
          },
          bounds: [minLng, minLat, maxLng, maxLat],
        }}
        onClick={handleClusterClick}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={[layerStyle.id]}
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <Source id="my-data" type="geojson" data={downtown_walk_feature}>
          <Layer {...layerStyle} />
        </Source>
        {/* <Source
          id="earthquakes"
          type="geojson"
          data={photo_map}
          cluster={true}
          clusterMaxZoom={15}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source> */}
        <FullscreenControl />
        <PhotoMarkers
          setPopupInfo={setPopupInfo}
          handleMarkerClick={handleMarkerClick}
        />

        {popupInfo && (
          <Popup
            anchor="bottom"
            offset={{
              bottom: [0, -50],
            }}
            closeButton={false}
            focusAfterOpen={true}
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            maxWidth="1000px"
            onClose={() => setPopupInfo(null)}
            // closeOnMove={true}
          >
            <Image
              className="h-72 w-auto object-cover"
              alt="Oops"
              width={640}
              height={360}
              src={"/photos/" + popupInfo.properties.photo_name}
            />
          </Popup>
        )}
      </Map>
      <ScrollblePhotoTray
        setPopupInfo={setPopupInfo}
        onClickMarker={handleMarkerClick}
      />
    </div>
  );
};

export default Home;
