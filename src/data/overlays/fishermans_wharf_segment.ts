import { GeoJsonOverlay } from "@mapbox/mapbox-sdk/services/static";

const fishermans_wharf_segment: GeoJsonOverlay = {
  geoJson: {
    type: "Feature",
    properties: {
      name: "Fishermans Wharf Segment",
      color: "#FFA500",
      stroke: "#FFA500",
      "stroke-width": 4,
    },
    geometry: {
      type: "MultiLineString",
      coordinates: [
        [
          [-123.38275, 48.42245],
          [-123.3827, 48.4226],
          [-123.38269, 48.42269],
          [-123.3828, 48.42276],
          [-123.38279, 48.42285],
          [-123.38252, 48.4231],
          [-123.38228, 48.42336],
        ],
      ],
    },
  },
};

export default fishermans_wharf_segment;
