import React from "react";
import SectorPerformanceData from "./data";
import useSectorPerformance from "@/lib/hooks/useSectorPerformance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  sectorPerformance: SectorPerformance[] | null;
}

const SectorPerformanceCard = ({ sectorPerformance }: Props) => {
  const { formattedSectors, totalPercentage } =
    useSectorPerformance(sectorPerformance);

  return (
    <Card className="lg-md:w-[55%] lg-md:p-2 flex justify-between flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base">Sector Performance</CardTitle>
        <span className="text-muted-foreground text-xs">% per change</span>
      </CardHeader>
      <CardContent>
        <SectorPerformanceData
          formattedSectors={formattedSectors}
          totalPercentage={totalPercentage}
        />
      </CardContent>
    </Card>
  );
};

export default SectorPerformanceCard;
