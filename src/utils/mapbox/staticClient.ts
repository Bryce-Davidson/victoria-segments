import { MAPBOX_PUBLIC_TOKEN } from "./tokens";
import client from "@mapbox/mapbox-sdk/services/static";

const mbxStaticClient = client({ accessToken: MAPBOX_PUBLIC_TOKEN });

export default mbxStaticClient;
