"use client";

import React from "react";
import NewsCard from "@/components/home/card/news";
import LoadingIcon from "@/components/icons/loading";
import HomeHeader from "@/components/home/header.tsx";
import { Separator } from "@/components/ui/separator";
import MarketsCard from "@/components/home/card/markets";
import useDashboardLoader from "@/lib/hooks/useDashboardLoader";
import SectorPerformanceCard from "@/components/home/card/sector-performance";

export default function Dashboard() {
  const {
    newsSentiment,
    newsLoading,
    quoteData,
    quoteDataLoading,
    sectorPerformance,
    sectorPerformanceLoading,
    marketData,
    marketDataLoading,
    symbol,
  } = useDashboardLoader();

  if (
    newsLoading &&
    sectorPerformanceLoading &&
    marketDataLoading &&
    quoteDataLoading
  )
    return (
      <main className="w-full h-screen items-center justify-center flex">
        <LoadingIcon />
      </main>
    );

  return (
    <main>
      <section className="space-y-14 max-lg-md:space-y-10">
        <HomeHeader />
        <Separator className="bg-muted" />
        <section className="space-y-14 max-lg-md:space-y-7">
          <div className="flex space-x-6 max-lg-md:flex-col max-lg-md:space-y-7 max-lg-md:space-x-0">
            <NewsCard newsSentiment={newsSentiment} />
            <SectorPerformanceCard sectorPerformance={sectorPerformance} />
          </div>
          <MarketsCard
            marketData={marketData}
            quoteData={quoteData}
            symbol={symbol}
          />
        </section>
      </section>
    </main>
  );
}
