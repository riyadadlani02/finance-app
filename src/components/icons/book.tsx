import React from "react";
import { BookOpen } from "lucide-react";

export const BookIcon = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`${
        active && "bg-sidebar-active"
      } p-2 rounded-xl relative flex items-center`}
    >
      <BookOpen
        className={`w-5 h-5 hover:text-primary  ${
          active ? "text-primary" : "text-muted-foreground"
        }`}
      />
      {active && (
        <div className="w-0.5 h-10 bg-primary absolute -right-[10px]"></div>
      )}
    </div>
  );
};
