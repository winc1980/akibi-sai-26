import { endPointData } from "./valibot";
import * as v from "valibot";

export type ShopData = v.InferOutput<typeof endPointData.shops>[number];

export type ShopIndexData = v.InferOutput<
  typeof endPointData.shop_indexes
>[number];

export type EventData = v.InferOutput<typeof endPointData.events>[number];

export type ExhibitionData = v.InferOutput<
  typeof endPointData.exhibitions
>[number];

export type ConstantsData = v.InferOutput<typeof endPointData.constants>;
