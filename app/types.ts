import { endPointData } from "./valibot";
import * as v from "valibot";

export type EndPoint = keyof typeof endPointData;
export type endPointDataType = {
  [key in keyof typeof endPointData]: v.InferOutput<(typeof endPointData)[key]>;
};
