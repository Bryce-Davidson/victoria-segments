import Image from "next/image";
import photo_map from "../../data/photo_map";
import styles from "./ScrollablePhotoTray.module.css";
import { useEffect, useState } from "react";

function ScrollblePhotoTray() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div>
      <button
        className="fixed top-0 bg-slate-200 p-10"
        onClick={(event) => {
          event.preventDefault();
          setOpen(!open);
        }}
      >
        {open ? "Close" : "Open"} Photos
      </button>

      <div
        className={styles.media_scroller}
        style={{
          display: open ? "block" : "none",
        }}
      >
        {photo_map.features.map((photo, index) => {
          return (
            <div key={index} className={styles.media_element}>
              <Image
                width={1280}
                height={720}
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
