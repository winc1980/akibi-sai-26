# あきび祭2026 公式サイト

秋田公立美術大学の学園祭「あきび祭2026」の公式サイトです。イベント、出店、会場マップなどの情報を掲載します。

Next.jsでmicroCMSのコンテンツを取得して静的サイトを生成し、Cloudflare WorkersのStatic Assetsで配信しています。

## 技術構成

- Bun
- Next.js 16 / React 19 / TypeScript
- Tailwind CSS 4
- microCMS / Valibot
- Cloudflare Workers / Wrangler

## ローカル開発

```sh
bun ci
cp .env.example .env
```

`.env` に以下の値を設定してください。

| 変数                      | 用途                                                                  |
| ------------------------- | --------------------------------------------------------------------- |
| `MICROCMS_SERVICE_DOMAIN` | microCMSのサービスドメイン（`https://` や `.microcms.io` を含めない） |
| `MICROCMS_API_KEY`        | コンテンツを取得するためのAPIキー                                     |


開発サーバーの起動前に、microCMSの画像を取得・変換します。

```sh
bun run prebuild
bun run dev
```

## ビルド・確認

```sh
bun run build
bun run dev:wrangler
```

`bun run build` は最初に `prebuild` を実行し、microCMSの画像をWebPに変換して `public/webp/` に保存します。その後、Next.jsがページを静的出力して `out/` を生成します。

## Cloudflare Workersへのデプロイ

```sh
bunx wrangler login
bun run deploy
```

### GitHub Actions

`.github/workflows/deploy.yml` は、以下のイベントでビルドとデプロイを実行します。

- `repository_dispatch` の `microcms-events-update`（microCMS更新通知から）
- `workflow_dispatch`（Actions画面からの手動実行）

GitHubの `Settings → Environments → production` に、以下のSecretsとVariablesを登録してください。ジョブは `environment: production` を指定してこれらを参照します。

| 種類     | 名前                      | 用途                                   |
| -------- | ------------------------- | -------------------------------------- |
| Secret   | `MICROCMS_API_KEY`        | ビルド時のmicroCMS認証                 |
| Variable | `MICROCMS_SERVICE_DOMAIN` | ビルド時のmicroCMSサービスドメイン     |
| Secret   | `CLOUDFLARE_API_TOKEN`    | WorkersへデプロイするためのAPIトークン |
| Variable | `CLOUDFLARE_ACCOUNT_ID`   | デプロイ先のCloudflareアカウントID     |
