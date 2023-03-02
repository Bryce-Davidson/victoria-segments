import AlarmAddRoundedIcon from "@mui/icons-material/AlarmAddRounded";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";

export default function TimeDistanceInfoOverlayBox({
  time,
  distanceKM,
  distanceMI,
}: {
  time: string;
  distanceKM: string;
  distanceMI: string;
}) {
  return (
    <div className="absolute top-4 right-4 z-20 flex justify-center gap-4 rounded-md bg-white py-2 px-4 text-lg font-medium shadow-xl sm:p-4">
      <div className="flex items-center justify-center">
        <AlarmAddRoundedIcon />
        <p className="ml-1">{time}</p>
      </div>
      <div className="flex items-center justify-center gap-1">
        <RouteOutlinedIcon />
        <div className="flex flex-col items-center">
          <p className="">{distanceKM}km</p>
          <p className="font-mono text-xs font-normal">{distanceMI}mi</p>
        </div>
      </div>
    </div>
  );
}
