import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import bbox from "@turf/bbox";
import Map, { Source, Layer, MapRef } from "react-map-gl";
import ScrollblePhotoTray from "../components/ScrollablePhotoTray/ScrollablePhotoTray";
import PhotoMarkers from "../components/PhotoMarkers";
import DetailsPopup from "../components/MapComponents/DetailsPopup";
import ArticleOverlay from "../components/MapComponents/ArticleOverlay";
import Link from "next/link";
import linkDirectoryMap from "../utils/link_directory_map";
import TimeDistanceInfoOverlayBox from "../components/MapComponents/TimeDistanceInfoOverlayBox";
import { downtown_scenic_walk_route } from "../data/downtown_scenic_walk";
import walk_layer_style from "../layer_styles/walk_layer_style";

import type { GeoPhotoProperties } from "../data/content";
import type { Feature, Point } from "geojson";

const DowntownWalk: NextPage = () => {
  const mapRef = useRef<MapRef>(null);
  const [popupInfo, setPopupInfo] = useState<Feature<
    Point,
    GeoPhotoProperties
  > | null>(null);
  const [articleOverlay, setArticleOverlay] =
    useState<GeoPhotoProperties | null>(null);

  const [minLng, minLat, maxLng, maxLat] = bbox(downtown_scenic_walk_route);

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
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <Source id="my-data" type="geojson" data={downtown_scenic_walk_route}>
          <Layer {...walk_layer_style} />
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
