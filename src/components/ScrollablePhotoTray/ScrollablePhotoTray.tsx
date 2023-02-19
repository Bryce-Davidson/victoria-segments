import Image from "next/image";
import photo_map from "../../data/photo_map";
import styles from "./ScrollablePhotoTray.module.css";

function ScrollblePhotoTray() {
  return (
    <div>
      {photo_map.features.map((photo, index) => {
        return (
          <div key={index} className={styles.hello}>
            <Image
              width={700}
              height={700}
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
