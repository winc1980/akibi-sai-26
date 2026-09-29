"use client";
import { ShopData } from "@/lib/types";
import ShopItem, { ViewType } from "./ShopItem";
import { useState } from "react";
import { List, ListFilterPlus, Table, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
export default function CardContainer({ shops }: { shops: ShopData[] }) {
  const [viewType, SetViewType] = useState<ViewType>("card");
  const [category, setCategory] = useState<string[]>(["food", "goods"]);
  const [words, setWords] = useState<string>("");
  return (
    <div className="w-full overflow-x-clip px-5 py-20">
      <div className="mr-20 flex w-full flex-col items-end justify-between gap-6 text-center md:items-center">
        <p className="font-yuji w-full text-start text-5xl font-bold sm:text-center sm:text-7xl">
          店舗、企画検索
        </p>
        <div className="flex flex-col items-end justify-center gap-7 md:flex-row md:items-center md:justify-end md:gap-3">
          <ToggleViewType viewType={viewType} SetViewType={SetViewType} />
          <PopUpFilter setCategory={setCategory} category={category} />
          <SearchInput words={words} setWords={setWords} />
        </div>
      </div>

      <div
        className={`mt-20 ${
          viewType === "card"
            ? "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
            : "mx-20 flex flex-col"
        }`}
      >
        {category.includes("food") &&
          shops
            .filter((shop) => shop.category === "food")
            .filter(
              (shop) =>
                shop.shop_name.includes(words) ||
                shop.long_description.includes(words),
            )
            .map((foodShop) => (
              <ShopItem viewType={viewType} key={foodShop.id} shop={foodShop} />
            ))}
        {category.includes("goods") &&
          shops
            .filter((shop) => shop.category === "goods")
            .filter(
              (shop) =>
                shop.shop_name.includes(words) ||
                shop.long_description.includes(words),
            )
            .map((goodsShop) => (
              <ShopItem
                viewType={viewType}
                key={goodsShop.id}
                shop={goodsShop}
              />
            ))}
      </div>
    </div>
  );
}
function PopUpFilter({
  category,
  setCategory,
}: {
  category: string[];
  setCategory: (arg: string[]) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        render={
          <button className="border-focused text-focused flex gap-3 rounded-full border-4 bg-white px-5 py-2">
            <ListFilterPlus />
            <p className="text-lg"> フィルター</p>
          </button>
        }
      />
      <PopoverContent className="border-focused border-2 bg-white ring-0">
        <div className="flex justify-end-safe">
          <button
            onClick={() => setIsOpen(false)}
            className="mr-0 flex w-8 justify-center"
          >
            <X />
          </button>
        </div>
        <ToggleGroup
          className="flex w-full flex-col items-center gap-3 px-5"
          onValueChange={setCategory}
          value={category}
          multiple
        >
          <ToggleGroupItem
            className={`border-focused w-full border-3 py-4 text-lg ${category.includes("food") ? "bg-focused text-unfocused" : "bg-unfocused text-focused"}`}
            value="food"
            aria-label="Toggle food"
          >
            飲食
          </ToggleGroupItem>
          <ToggleGroupItem
            className={`border-focused w-full border-3 py-4 text-lg ${category.includes("goods") ? "bg-focused text-unfocused" : "bg-unfocused text-focused"}`}
            value="goods"
            aria-label="Toggle goods"
          >
            物販
          </ToggleGroupItem>
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
}

function ToggleViewType({
  viewType,
  SetViewType,
}: {
  viewType: ViewType;
  SetViewType: (arg: ViewType) => void;
}) {
  return (
    <div className="hidden gap-1 md:flex">
      <button
        onClick={() => SetViewType("card")}
        className={`border-focused flex h-12 w-20 items-center justify-center rounded-l-full border-4 pr-2 pl-4 ${viewType === "card" ? "bg-focused" : "bg-unfocused"} `}
      >
        <Table
          className={viewType === "card" ? "text-unfocused" : "text-focused"}
        />
      </button>
      <button
        onClick={() => SetViewType("list")}
        className={`border-focused flex h-12 w-20 items-center justify-center rounded-r-full border-4 pr-4 pl-2 ${viewType === "list" ? "bg-focused" : "bg-unfocused"}`}
      >
        <List
          className={viewType === "list" ? "text-unfocused" : "text-focused"}
        />
      </button>
    </div>
  );
}

function SearchInput({
  words,
  setWords,
}: {
  words: string;
  setWords: (arg: string) => void;
}) {
  return (
    <>
      <input
        className="py3 border-focused rounded-3xl border-4 bg-white px-3 py-2"
        value={words}
        onChange={(e) => {
          setWords(e.target.value);
        }}
        placeholder="企画名を入力"
      />
    </>
  );
}
