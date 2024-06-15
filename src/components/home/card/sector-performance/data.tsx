import React from "react";
import { FormattedSector } from "@/lib/types";

interface Props {
  formattedSectors: FormattedSector[];
  totalPercentage: number;
}

const SectorPerformanceData = ({
  formattedSectors,
  totalPercentage,
}: Props) => {
  return (
    <div className="grid grid-rows-6 grid-flow-col gap-x-7 relative space-y-[1px] ">
      <div className="relative flex justify-between items-center pr-2">
        <span className="text-sm font-semibold">All sectors</span>
        <span className="text-xs font-semibold">
          {totalPercentage && totalPercentage >= 0
            ? `+${totalPercentage.toFixed(2)}%`
            : `${totalPercentage?.toFixed(2)}%`}
        </span>
        <div className="bg-gradient-to-r from-muted via-transparent to-transparent h-[1px] w-full absolute bottom-0" />
        <div className="bg-primary w-[72px] h-[1px]  absolute bottom-0" />
      </div>
      {formattedSectors.map((item, index) => (
        <div className="flex justify-between items-center relative" key={index}>
          <span className="text-muted-foreground text-xs">{item.sector}</span>
          <span
            className={`text-xs pr-2 rounded-md py-1.5 bg-gradient-to-r ${item.textColor} ${item.gradientClass}`}
          >
            {item.formatted}%
          </span>
          <div className="bg-gradient-to-r from-muted via-transparent to-transparent h-[1px] w-full absolute bottom-0" />
        </div>
      ))}
    </div>
  );
};

export default SectorPerformanceData;
