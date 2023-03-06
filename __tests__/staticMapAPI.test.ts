import mbxStaticClient from "../src/utils/mapbox/staticClient";
import downtown_walk_path from "../src/data/overlays/downtown_walk";
import harbour_segment from "../src/data/overlays/harbour_segment";
import david_foster_segment from "../src/data/overlays/david_foster_segment";
import fishermans_wharf_segment from "../src/data/overlays/fishermans_wharf_segment";
import { downtown_scenic_walk_photos } from "../src/data/downtown_scenic_walk";
import fs from "fs";

describe("Static Map API", () => {
  it.skip("gets a static map of harbour", async () => {
    const request = mbxStaticClient.getStaticImage({
      ownerId: "mapbox",
      styleId: "streets-v11",
      width: 1280,
      height: 500,
      position: "auto",
      padding: "100,100,100,100",
      overlays: [fishermans_wharf_segment],
    });
    const staticImageUrl = request.url();
    console.log(staticImageUrl);
    expect(staticImageUrl);
  });

  it.skip("gets a static map", async () => {
    const request = mbxStaticClient.getStaticImage({
      ownerId: "mapbox",
      styleId: "streets-v11",
      width: 1280,
      height: 500,
      position: "auto",
      padding: "0,300,0,300",
      overlays: [downtown_walk_path],
    });
    const staticImageUrl = request.url();
    console.log(staticImageUrl);
    expect(staticImageUrl);
  });

  it.skip("gets a static map for a point with a marker", async () => {
    for (let i = 0; i < downtown_scenic_walk_photos.features.length; i++) {
      const point_1: any = {
        geoJson: downtown_scenic_walk_photos.features[i],
      };
      const request = mbxStaticClient.getStaticImage({
        ownerId: "mapbox",
        styleId: "streets-v11",
        width: 1280,
        height: 500,
        position: "auto",
        padding: "100,100,100,100",
        overlays: [point_1],
      });
      const staticImageUrl = request.url();
      const file_name = point_1.geoJson.properties.imgSrc.split(".")[0];
      //   console.log(file_name);
      // console.log(staticImageUrl);
      await request.send().then((res) => {
        fs.writeFileSync(
          `./public/previews/${file_name}.png`,
          res.body,
          "binary"
        );
      });
    }
  });
});
