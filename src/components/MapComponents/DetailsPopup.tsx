import { Popup } from "react-map-gl";
import Image from "next/image";

export default function DetailsPopup({
  popupInfo,
  setPopupInfo,
}: {
  popupInfo: any | null;
  setPopupInfo: Function;
}) {
  return (
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
    >
      <Image
        className="h-72 w-auto object-cover"
        alt="Oops"
        width={500}
        height={250}
        src={"/photos/" + popupInfo.properties.photo_name}
      />
    </Popup>
  );
}
