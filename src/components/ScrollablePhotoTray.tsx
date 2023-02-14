import Image from "next/image";

function ScrollblePhotoTray() {
  // for each image in the photos folder
  //   generate a image component in the div
  return (
    <div
      className=""
      style={{
        height: "100%",
        overflow: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
        (photo) => {
          return (
            <div
              style={{
                height: "300px",
                width: "300px",
                overflowX: "scroll",
              }}
              className="m-5 inline-block bg-black"
            ></div>
          );
        }
      )}
    </div>
  );
}

export default ScrollblePhotoTray;
