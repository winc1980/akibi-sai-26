import { XIcon } from "lucide-react";
import { MapPinIcon, ClockIcon } from "lucide-react";
// import {Button}

type Toggle = () => void;
export function Menu({ toggle }: { toggle: Toggle }) {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-gray-500/50 p-20">
      <div className="flex h-100 w-100 flex-col gap-6 rounded-4xl bg-amber-50 p-7 pl-12">
        <div className="flex h-10 w-full flex-row justify-between">
          <div className="w-100 text-3xl leading-16">イベント名</div>
          <button type="button" onClick={toggle}>
            <XIcon className="h-8 w-8" />
          </button>
        </div>
        <div className="w-full text-2xl">団体名</div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row">
            <MapPinIcon />
            <div className="w-full">場所</div>
          </div>
          <div className="flex flex-row">
            <ClockIcon />
            <div className="w-full">開催タイミング</div>
          </div>
        </div>
      </div>
    </div>
  );
}
