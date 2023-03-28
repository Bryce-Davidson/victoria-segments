import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Link from "next/link";

export default function InteractiveMapButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute bottom-8
  left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-md bg-white py-3 px-6"
    >
      <h4 className="order-2 text-center">Map</h4>
      <ZoomOutMapIcon className="order-1" />
    </Link>
  );
}
