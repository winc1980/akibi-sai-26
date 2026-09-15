import { createClient } from "microcms-js-sdk";
import {
  ArrayEndPoint,
  EndPoint,
  endPointDataType,
  SingleEndPoint,
} from "./types";
import * as v from "valibot";
import { endPointData } from "./valibot";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Client SDKの初期化を行う
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

function runValidation<T>(
  schema: v.GenericSchema<unknown, T>,
  data: unknown,
): T {
  const validated = v.safeParse(schema, data);
  if (validated.success) {
    return validated.output;
  }
  throw new Error(
    `microCMSで取得したデータのバリデーション時にエラーが起きました: ${v.summarize(validated.issues)}`,
  );
}

const validators: {
  [K in EndPoint]: (data: unknown) => endPointDataType[K];
} = {
  shop_indexes: (data) => runValidation(endPointData.shop_indexes, data),
  events: (data) => runValidation(endPointData.events, data),
  exhibitions: (data) => runValidation(endPointData.exhibitions, data),
  shops: (data) => runValidation(endPointData.shops, data),
  constants: (data) => runValidation(endPointData.constants, data),
};

export default async function getMicroCmsData<E extends EndPoint>(
  endpoint: E,
): Promise<endPointDataType[E]> {
  let data: unknown;
  try {
    if (isArrayEndPoint(endpoint)) {
      data = await client.getAllContentIds({
        endpoint,
      });
    } else {
      data = await client.get({
        endpoint,
      });
    }
  } catch (error) {
    throw new Error(`microCMSでのデータ取得時にエラーが起きました: ${error}`, {
      cause: error,
    });
  }
  return validators[endpoint](data);
}

// valibotの機能を利用
function isArrayEndPoint(endpoint: EndPoint): endpoint is ArrayEndPoint {
  return endPointData[endpoint].type === "array";
}
