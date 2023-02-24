import styles from "./PhotoGallery.module.css";
import photo_map from "../../data/photo_map";

export default function PhotoGallery() {
  return (
    <div className={styles.grid_container}>
      {[...Array(10)].map((val, i) => {
        if (i == 0) {
          return <div className={styles.grid_row_0}>{i}</div>;
        }
        return <div className={styles.grid_row}>{i}</div>;
      })}
    </div>
  );
}
