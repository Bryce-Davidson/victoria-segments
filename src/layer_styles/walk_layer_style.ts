import { type LayerProps } from "react-map-gl";

const walk_layer_style: LayerProps = {
  id: "route",
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#FFA500",
    "line-width": 4,
  },
};

export default walk_layer_style;
