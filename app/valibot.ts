import * as v from "valibot";
// 基本スキーマ
const dateSchema = v.pipe(v.string(), v.isoTimestamp());
const irohaSchema = v.pipe(
  v.string(),
  v.length(1),
  v.regex(/^[ァ-ヶー]+$/, "イロハがカタカナになっていません"),
);
const microCmsImageSchema = v.object({
  url: v.pipe(v.string(), v.url()),
  height: v.pipe(v.number(), v.minValue(0)),
  width: v.pipe(v.number(), v.minValue(0)),
});

// 以下microCMS用スキーマ
const microCmsSingleDefaultSchema = v.object({
  createdAt: dateSchema,
  updatedAt: dateSchema,
  publishedAt: dateSchema,
  revisedAt: dateSchema,
});

// 配列要素にはidがある
const microCmsListItemSchema = v.object({
  ...microCmsSingleDefaultSchema.entries,
  id: v.string(),
});

const eventsSchema = v.object({
  ...microCmsListItemSchema.entries,
  organization: v.string(),
  name: v.string(),
  place: v.optional(v.string()),
  description: v.string(),
  days: v.pipe(
    v.array(v.union([v.literal("1"), v.literal("2")])),
    v.transform((days) => days.map((day) => Number(day))),
  ),
  timing_start: v.optional(v.pipe(v.number(), v.minValue(0), v.maxValue(14))),
  timing_end: v.optional(v.pipe(v.number(), v.minValue(0), v.maxValue(14))),
});
const exhibitionsSchema = v.object({
  ...microCmsListItemSchema.entries,
  display_id: v.number(),
  title: v.string(),
  images: v.array(microCmsImageSchema),
  description: v.string(),
});
const shopIndexesSchema = v.object({
  ...microCmsListItemSchema.entries,
  iroha: irohaSchema,
  place: v.string(),
  map_img: v.optional(microCmsImageSchema),
});
const constantsSchema = v.object({
  ...microCmsSingleDefaultSchema.entries,
  head_name: v.string(),
  head_greetings: v.string(),
  theme: v.string(),
  map_img: v.array(microCmsImageSchema),
  shop_map_img: v.array(microCmsImageSchema),
  time_schedule_img: v.array(microCmsImageSchema),
  sponsors_higher: v.array(microCmsImageSchema),
  sponsors_normal: v.array(microCmsImageSchema),
});
const shopsSchema = v.object({
  ...microCmsListItemSchema.entries,
  iroha: irohaSchema,
  category: v.pipe(
    v.array(v.union([v.literal("goods"), v.literal("food")])),
    v.length(1),
    v.transform((categoryArray) => categoryArray[0]),
  ),
  shop_name: v.string(),
  icon_img: microCmsImageSchema,
  short_description: v.optional(v.string()),
  long_description: v.string(),
  menu: v.optional(v.string()),
});

export const endPointData = {
  shop_indexes: v.array(shopIndexesSchema),
  events: v.array(eventsSchema),
  exhibitions: v.array(exhibitionsSchema),
  shops: v.array(shopsSchema),
  constants: constantsSchema,
};
