import Image from "next/image";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Link from "next/link";
import classNames from "../../lib/classNames";
import linkDirectoryMap from "../../utils/linkDirectoryMap";

export default function SegmentDetail({
  mainSrc,
  mainAlt,
  mapSrc,
  mapAlt,
  objectFit,
  title,
  description,
}: {
  mainSrc: string;
  mainAlt: string;
  mapSrc: string;
  mapAlt: string;
  objectFit?: string;
  title?: string;
  description?: string;
}) {
  return (
    <article className="mx-4 mt-10 grid grid-cols-1 grid-rows-[1fr_0.5fr_1fr] gap-8 sm:mx-auto sm:w-2/3 lg:grid-cols-2 lg:grid-rows-[1fr,_0.75fr]">
      <Image
        className={classNames(
          "col-span-full h-72 rounded-md object-cover lg:h-96",
          objectFit ?? "object-[50%,22%]"
        )}
        src={mainSrc}
        alt={mainAlt}
        width={1280}
        height={720}
      />
      <div className="col-span-1 row-span-1 font-sans lg:row-span-2">
        <h3 className="text-2xl">{title ?? "Title"}</h3>
        <p className="mt-2 h-min text-justify">
          {description ??
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non fugiat commodi sit iusto, minima deleniti sunt sed quisquam quo illum magni animi error laborum ut quod quaerat nesciunt ex reprehenderit libero officiis modi, suscipit ipsa. Lorem ipsum dolor sit amet consecteturadipisicing elit. Ipsum vel magni ullam id. Ad, rerum facilis? Ipsa, commodi sunt. Fugit possimus ad dolorum eveniet cupiditate, consectetur itaque repellat voluptatum quam aperiam aliquam molestiae officiis qui adipisci ex est error enim?"}
        </p>
      </div>
      <div>
        <Link href={linkDirectoryMap.victoriaDowntownScenicWalkMap}>
          <div className="relative">
            <div className="absolute bottom-4 right-4 rounded-md bg-white p-1">
              <ZoomOutMapIcon />
            </div>
            <Image
              className="col-span-1 row-span-2 h-64 rounded-md object-cover"
              src={mapSrc}
              alt={mapAlt}
              width={1280 / 2}
              height={720 / 2}
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
