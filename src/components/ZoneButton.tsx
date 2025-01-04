"use client";
import { FC } from "react";
import { Button } from "./ui/button";
import { useZone } from "@/context/ZoneContext";
 

interface ZoneButtonProps {
  zone: string;
}

const ZoneButton: FC<ZoneButtonProps> = ({ zone }) => {
  const { setSelectedZone } = useZone();
  return (
    <Button
      className="border-2 border-dashed border-gray-300 p-4 h-full hyphens-none capitalize"
      onClick={() => setSelectedZone(zone)}
    >
      {zone} Zone
    </Button>
  );
};

export default ZoneButton;
