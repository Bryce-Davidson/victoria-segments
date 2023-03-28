import { Popup } from "react-map-gl";
import Image from "next/image";
import DirectionsIcon from "@mui/icons-material/Directions";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

function formGoogleDirectionURL(lon: string, lat: string) {
  return `https://www.google.com/maps/dir/current+location/${lat},${lon}`;
}

export default function DetailsPopup({
  popupInfo,
  setPopupInfo,
  setArticleOverlay,
}: {
  popupInfo: any;
  setPopupInfo: (status: any) => void;
  setArticleOverlay: (status: any) => void;
}) {
  return (
    <Popup
      anchor="bottom"
      offset={{
        bottom: [0, -50],
      }}
      focusAfterOpen={false}
      closeButton={false}
      longitude={Number(popupInfo.geometry.coordinates[0])}
      latitude={Number(popupInfo.geometry.coordinates[1])}
      maxWidth="1000px"
      className="z-20 rounded-md"
      onClose={() => setPopupInfo(null)}
    >
      <div className="w-[20rem]">
        <div className="rounded-md">
          <Image
            className="max-h-42 w-full object-cover sm:max-h-52 sm:object-contain"
            alt={popupInfo.properties.img_alt}
            width={500}
            height={250}
            src={"/photos/" + popupInfo.properties.img_src}
            loading="eager"
          />
        </div>
        <div>
          <div className="my-1 sm:my-4">
            <h2 className="text-xl">{popupInfo.properties.title}</h2>
            <p>
              {popupInfo.properties.description
                .split(" ")
                .splice(0, 20)
                .join(" ")}
              {"..."}
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-8">
            <button
              className="mt-4 flex items-center gap-4 rounded-md bg-blue-100 py-2 px-4 font-medium"
              onClick={() => {
                const lon = popupInfo.geometry.coordinates[0];
                const lat = popupInfo.geometry.coordinates[1];
                window.open(
                  formGoogleDirectionURL(lon, lat),
                  "_blank",
                  "noreferrer"
                );
              }}
            >
              Directions
              <DirectionsIcon className="text-blue-700" />
            </button>
            <button
              onClick={() => setArticleOverlay({ ...popupInfo.properties })}
              className="mt-4 flex items-center gap-4 rounded-md border border-stone-800 py-2 px-4 font-medium"
            >
              Read more
              <AspectRatioIcon />
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
}
