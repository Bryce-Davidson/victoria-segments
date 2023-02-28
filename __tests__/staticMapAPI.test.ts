import mbxStaticClient from "../src/utils/mapbox/staticClient";
import downtown_walk_path from "../src/data/downtown_walk";
import harbour_segment from "../src/data/harbour_segment";
import david_foster_segment from "../src/data/david_foster_segment";
import fishermans_wharf_segment from "../src/data/fishermans_wharf_segment";
import photo_map from "../src/data/photo_map";
import fs from "fs";

describe("Static Map API", () => {
  it("gets a static map of harbour", async () => {
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
    for (let i = 0; i < photo_map.features.length; i++) {
      const point_1: any = {
        geoJson: photo_map.features[i],
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
      const file_name = point_1.geoJson.properties.photo_name.split(".")[0];
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
