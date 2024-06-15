"use client";

import React from "react";
import NewsCard from "@/components/home/card/news";
import { Separator } from "@/components/ui/separator";
import HomeHeader from "@/components/home/header.tsx";
import MarketsCard from "@/components/home/card/markets";
import useNewsSentiment from "@/lib/hooks/useSentimentData";
import SectorPerformaceCard from "@/components/home/card/sector_performace";

export default function Dashboard() {
  const { data: newsSentiment } = useNewsSentiment();

  return (
    <main>
      <section className="space-y-14">
        <HomeHeader />
        <Separator className="bg-muted" />
        <section className=" space-y-16">
          <div className="flex space-x-10">
            <NewsCard newsSentiment={newsSentiment} />
            <SectorPerformaceCard />
          </div>
          <MarketsCard />
        </section>
      </section>
    </main>
  );
}
