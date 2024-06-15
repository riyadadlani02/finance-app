"use client";

import React from "react";
import NewsCard from "@/components/home/card/news";
import { Separator } from "@/components/ui/separator";
import HomeHeader from "@/components/home/header.tsx";
import MarketsCard from "@/components/home/card/markets";
import useNewsSentiment from "@/lib/hooks/useSentimentData";
import useSectorPerformanceData from "@/lib/hooks/useSectorPerformanceData";
import SectorPerformaceCard from "@/components/home/card/sector-performance";

export default function Dashboard() {
  const { data: newsSentiment } = useNewsSentiment();
  const { data: sectorPerformace } = useSectorPerformanceData();

  return (
    <main>
      <section className="space-y-14">
        <HomeHeader />
        <Separator className="bg-muted" />
        <section className=" space-y-14">
          <div className="flex space-x-6">
            <NewsCard newsSentiment={newsSentiment} />
            <SectorPerformaceCard sectorPerformance={sectorPerformace} />
          </div>
          <MarketsCard />
        </section>
      </section>
    </main>
  );
}
