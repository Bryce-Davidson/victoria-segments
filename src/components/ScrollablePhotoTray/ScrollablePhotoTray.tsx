import Image from "next/image";
import photo_map from "../../data/photo_map";
import styles from "./ScrollablePhotoTray.module.css";
import { useEffect, useState } from "react";

function ScrollblePhotoTray() {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.media_scroller}>
      {/* <button
        onClick={(event) => {
          event.preventDefault();
          setOpen(!open);
          console.log(open);
        }}
      >
        OPen
      </button> */}
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
  );
}

export default ScrollblePhotoTray;
