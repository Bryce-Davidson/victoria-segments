import Image from "next/image";
import { Marker } from "react-map-gl";
import { Feature, Point } from "geojson";
import photo_map from "../data/photo_map";

export default function PhotoMarkers({
  setPopupInfo,
  handleMarkerClick,
}: {
  setPopupInfo: Function;
  handleMarkerClick: Function;
}) {
  return (
    <>
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
              const coords: any = point.geometry.coordinates;
              setPopupInfo(point);
              handleMarkerClick(coords);
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
                width={50}
                height={50}
                className="mt-2"
                src={"/photos/" + point?.properties?.photo_name}
              />
            </div>
          </Marker>
        );
      })}
    </>
  );
}
