import { createClient } from "microcms-js-sdk";
import { err, fromPromise, ok, Result, ResultAsync } from "neverthrow";
import { EndPoint, endPointDataType } from "./types";
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
): Result<T, Error> {
  const validated = v.safeParse(schema, data);
  if (validated.success) {
    return ok(validated.output);
  }
  return err(
    new Error(
      `データのバリデーション時にエラーが起きました:${v.summarize(validated.issues)}`,
    ),
  );
}

const validators: {
  [K in EndPoint]: (data: unknown) => Result<endPointDataType[K], Error>;
} = {
  shop_indexes: (data) => runValidation(endPointData.shop_indexes, data),
  events: (data) => runValidation(endPointData.events, data),
  exhibitions: (data) => runValidation(endPointData.exhibitions, data),
  shops: (data) => runValidation(endPointData.shops, data),
  constants: (data) => runValidation(endPointData.constants, data),
};

export default function getMicroCmsData<E extends EndPoint>(
  endpoint: E,
): ResultAsync<endPointDataType[E], Error> {
  const data = fromPromise(client.getAllContents({ endpoint }), (error) => {
    return new Error(`microCMSでのデータ取得時にエラーが起きました:${error}`);
  });

  // validators[endpoint] は Validator<E> = (data: unknown) => Result<endPointDataType[E], Error>
  // として正しく推論される(mapped typeのインデックスアクセスなのでTSが関連付けを保持できる)
  return data.andThen((raw) => validators[endpoint](raw));
}
