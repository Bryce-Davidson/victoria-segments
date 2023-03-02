import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import Map, { Source, Layer, MapRef } from "react-map-gl";
import bbox from "@turf/bbox";
import downtown_walk_feature from "../data/tracks";
import ScrollblePhotoTray from "../components/ScrollablePhotoTray/ScrollablePhotoTray";
import PhotoMarkers from "../components/PhotoMarkers";
import DetailsPopup from "../components/MapComponents/DetailsPopup";
import ArticleOverlay from "../components/MapComponents/ArticleOverlay";
import { Feature, Point } from "geojson";
import Link from "next/link";
import linkDirectoryMap from "../utils/linkDirectoryMap";
import TimeDistanceInfoOverlayBox from "../components/MapComponents/TimeDistanceInfoOverlayBox";

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

interface photoPointProperties {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const DowntownWalk: NextPage = () => {
  const mapRef = useRef<MapRef>(null);
  const [popupInfo, setPopupInfo] = useState<Feature<
    Point,
    photoPointProperties
  > | null>(null);
  const [articleOverlay, setArticleOverlay] =
    useState<photoPointProperties | null>(null);

  const [minLng, minLat, maxLng, maxLat] = bbox(downtown_walk_feature);

  function handleMarkerClick(coords: [number, number]) {
    mapRef.current?.flyTo({
      center: coords,
      zoom: 16,
      duration: 1000,
      offset: [0, 125],
    });
  }

  return (
    <div className="h-screen">
      {articleOverlay && (
        <ArticleOverlay
          articleOverlay={articleOverlay}
          setArticleOverlay={setArticleOverlay}
        />
      )}
      <TimeDistanceInfoOverlayBox
        time="1h"
        distanceKM="2.0"
        distanceMI="1.24"
      />
      <Link
        className="absolute top-6 left-4 z-10 rounded-lg bg-white px-8 py-4 sm:top-10 sm:left-10"
        href={linkDirectoryMap.index}
      >
        Back
      </Link>
      <Map
        ref={mapRef}
        initialViewState={{
          fitBoundsOptions: {
            padding: { top: 100, bottom: 350, left: 100, right: 100 },
          },
          bounds: [minLng, minLat, maxLng, maxLat],
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={[layerStyle.id]}
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <Source id="my-data" type="geojson" data={downtown_walk_feature}>
          <Layer {...layerStyle} />
        </Source>
        <PhotoMarkers
          setPopupInfo={setPopupInfo}
          handleMarkerClick={handleMarkerClick}
        />

        {popupInfo && (
          <DetailsPopup
            popupInfo={popupInfo}
            setPopupInfo={setPopupInfo}
            setArticleOverlay={setArticleOverlay}
          />
        )}
      </Map>
      <ScrollblePhotoTray
        setPopupInfo={setPopupInfo}
        onClickPhoto={handleMarkerClick}
      />
    </div>
  );
};

export default DowntownWalk;
