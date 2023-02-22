import Image from "next/image";
import photo_map from "../../data/photo_map";
import styles from "./ScrollablePhotoTray.module.css";
import { useEffect, useState } from "react";

function ScrollblePhotoTray({
  onClickMarker,
  setPopupInfo,
}: {
  onClickMarker: Function;
  setPopupInfo: Function;
}) {
  const [open, setOpen] = useState(true);

  let string = open ? "px-4 py-1" : "p-5";

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div className="fixed bottom-0 flex w-screen flex-col items-center justify-center">
      <button
        className={"rounded-t-md bg-white " + string}
        onClick={(event) => {
          event.preventDefault();
          setOpen(!open);
        }}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          "Photos"
        )}
      </button>

      <div
        className={styles.media_scroller}
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
              className={styles.media_element}
              onClick={() => {
                onClickMarker(photo.geometry.coordinates);
                setPopupInfo(photo);
              }}
            >
              <Image
                width={640}
                height={360}
                alt="oops"
                src={"/photos/" + photo?.properties?.photo_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollblePhotoTray;
