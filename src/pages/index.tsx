import { MAPBOX_PUBLIC_TOKEN } from "../utils/mapbox/tokens";
import type { NextPage } from "next";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import Map, { FullscreenControl, Source, Layer, MapRef } from "react-map-gl";
import bbox from "@turf/bbox";
import downtown_walk_feature from "../data/tracks";
import ScrollblePhotoTray from "../components/ScrollablePhotoTray/ScrollablePhotoTray";
import PhotoMarkers from "../components/PhotoMarkers";
import DetailsPopup from "../components/MapComponents/DetailsPopup";
import ArticleOverlay from "../components/MapComponents/ArticleOverlay";
import { Feature, Point } from "geojson";
import Link from "next/link";

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
  title: string;
  description: string;
}

const Home: NextPage = () => {
  const mapRef = useRef<MapRef>(null);

  const [popupInfo, setPopupInfo] = useState<Feature<
    Point,
    photoPointProperties
  > | null>(null);

  const [articleOverlay, setArticleOverlay] = useState<any>(false);

  const [minLng, minLat, maxLng, maxLat] = bbox(downtown_walk_feature);

  function handleClusterClick(event: any) {
    console.log(event.features);
  }

  function handleMarkerClick(coords: [number, number]) {
    mapRef.current?.flyTo({
      center: coords,
      zoom: 16,
      duration: 1000,
      offset: [0, 125],
    });
  }

  return (
    <div style={{ height: "100vh" }}>
      {articleOverlay && (
        <ArticleOverlay
          articleOverlay={articleOverlay}
          setArticleOverlay={setArticleOverlay}
        />
      )}
      <Link
        className="absolute top-10 left-10 z-10 rounded-lg bg-white px-8 py-4"
        href="/downtown-walk"
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
        onClick={handleClusterClick}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={[layerStyle.id]}
        mapboxAccessToken={MAPBOX_PUBLIC_TOKEN}
      >
        <Source id="my-data" type="geojson" data={downtown_walk_feature}>
          <Layer {...layerStyle} />
        </Source>
        <FullscreenControl />
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
        onClickMarker={handleMarkerClick}
      />
    </div>
  );
};

export default Home;
