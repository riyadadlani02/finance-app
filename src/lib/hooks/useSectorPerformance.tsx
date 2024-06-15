import { useState, useEffect } from "react";
import { FormattedSector, SectorPerformance } from "@/lib/types";

function useSectorPerformance(sectorPerformance: SectorPerformance[] | null): {
  formattedSectors: FormattedSector[];
  totalPercentage: number;
} {
  const [formattedSectors, setFormattedSectors] = useState<FormattedSector[]>(
    []
  );
  const [totalPercentage, setTotalPercentage] = useState<number>(0);

  useEffect(() => {
    if (sectorPerformance) {
      const sortedSectors = sectorPerformance.slice().sort((a, b) => {
        const changesA = parseFloat(a.changesPercentage);
        const changesB = parseFloat(b.changesPercentage);
        return changesB - changesA;
      });

      const calculatedTotalPercentage = sortedSectors.reduce((acc, curr) => {
        const changes = parseFloat(curr.changesPercentage);
        return acc + changes;
      }, 0);

      const formattedSectors = sortedSectors.map((item) => {
        const parsedPercentage = parseFloat(item.changesPercentage);
        const roundedPercentage = Math.round(parsedPercentage * 100) / 100;

        let formattedPercentage = roundedPercentage.toString();
        if (!formattedPercentage.includes(".")) {
          formattedPercentage += ".00";
        } else {
          const decimals = formattedPercentage.split(".")[1];
          if (decimals.length === 1) {
            formattedPercentage += "0";
          }
        }

        if (parsedPercentage > 0) {
          formattedPercentage = "+" + formattedPercentage;
        } else if (parsedPercentage === 0) {
          formattedPercentage = "+0.00";
        }

        const textColor =
          parsedPercentage >= 0 ? "text-green-400" : "text-red-400";
        const gradientClass =
          parsedPercentage >= 0
            ? "from-black to-green-400/10"
            : "from-black to-red-400/10";

        return {
          sector: item.sector,
          formatted: formattedPercentage,
          textColor,
          gradientClass,
        };
      });

      setFormattedSectors(formattedSectors);
      setTotalPercentage(calculatedTotalPercentage);
    }
  }, [sectorPerformance]);

  return { formattedSectors, totalPercentage };
}

export default useSectorPerformance;
