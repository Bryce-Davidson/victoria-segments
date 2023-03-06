import Image from "next/image";
import { Marker } from "react-map-gl";
import { Feature, Point } from "geojson";
import { downtown_scenic_walk_photos } from "../data/downtown_scenic_walk";
import type { GeoPhotoProperties } from "../data/content";

export default function PhotoMarkers({
  setPopupInfo,
  handleMarkerClick,
}: {
  setPopupInfo: Function;
  handleMarkerClick: Function;
}) {
  return (
    <>
      {downtown_scenic_walk_photos.features.map(
        (point: Feature<Point, GeoPhotoProperties>, index: number) => {
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
                  alt={point?.properties?.img_alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    scale: "1.5",
                  }}
                  width={50}
                  height={50}
                  className="mt-2"
                  src={"/photos/" + point?.properties?.img_src}
                />
              </div>
            </Marker>
          );
        }
      )}
    </>
  );
}
