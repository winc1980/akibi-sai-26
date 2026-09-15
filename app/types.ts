import { endPointData } from "./valibot";
import * as v from "valibot";
export type ArrayEndPoint = {
  [K in EndPoint]: endPointDataType[K] extends unknown[] ? K : never;
}[EndPoint];
export type SingleEndPoint = {
  [K in EndPoint]: endPointDataType[K] extends unknown[] ? never : K;
}[EndPoint];
export type EndPoint = keyof typeof endPointData;
export type endPointDataType = {
  [key in keyof typeof endPointData]: v.InferOutput<(typeof endPointData)[key]>;
};
