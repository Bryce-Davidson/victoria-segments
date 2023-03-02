import Image from "next/image";
import photo_map from "../../data/photo_map";
import { useState } from "react";
import classNames from "../../lib/classNames";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ScrollblePhotoTray({
  onClickPhoto,
  setPopupInfo,
}: {
  onClickPhoto: Function;
  setPopupInfo: Function;
}) {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="fixed bottom-0 flex w-screen flex-col items-center justify-center">
      <button
        className={classNames(
          "rounded-t-md bg-white",
          open ? "px-4 py-1" : "p-5"
        )}
        onClick={(event) => {
          setOpen(!open);
        }}
      >
        {open ? <ExpandMoreIcon fontSize="medium" /> : "Photos"}
      </button>

      <div
        className="mb-4 block h-[25vh] w-screen overflow-x-auto overscroll-contain whitespace-nowrap bg-slate-300 bg-opacity-50"
        style={{
          display: open ? "block" : "none",
        }}
      >
        {photo_map.features.map((photo: any, index: number) => {
          return (
            <div
              style={{
                cursor: "pointer",
              }}
              key={index}
              className="inline-block h-full p-4"
              onClick={() => {
                onClickPhoto(photo.geometry.coordinates);
                setPopupInfo(photo);
              }}
            >
              <Image
                className="inline h-full w-auto rounded-sm object-cover"
                width={275}
                height={175}
                alt="oops"
                src={"/photos/" + photo?.properties?.imgSrc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollblePhotoTray;
