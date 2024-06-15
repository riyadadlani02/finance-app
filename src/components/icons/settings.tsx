import React from "react";
import { Settings } from "lucide-react";

export const SettingsIcon = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`${
        active && " bg-sidebar-active"
      } p-2 rounded-xl relative flex items-center`}
    >
      <Settings
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
