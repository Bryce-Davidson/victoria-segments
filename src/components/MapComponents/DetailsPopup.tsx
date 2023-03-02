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
  setPopupInfo: Function;
  setArticleOverlay: Function;
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
      onClose={() => setPopupInfo(null)}
    >
      <div className="w-[20rem]">
        <Image
          className="max-h-52 w-full object-contain"
          alt="Oops"
          width={500}
          height={250}
          src={"/photos/" + popupInfo.properties.imgSrc}
        />
        <div>
          <div className="my-4">
            <h2 className="text-xl">Lorem ipsum dolor, sit amet.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ad
              delectus. Nostrum, ex laboriosam quis cupiditate et dicta corrupti
              nisi voluptatem, labore optio neque numquam!...
            </p>
          </div>
          <div className="flex justify-between gap-8">
            <button
              className="mt-4 flex items-center gap-4 rounded-sm bg-blue-100 py-2 px-4 font-medium shadow-lg"
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
              className="mt-4 flex items-center gap-4 rounded-sm py-2 px-4 font-medium shadow-lg"
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
