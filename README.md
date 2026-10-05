# あきび祭2026 公式サイト

秋田公立美術大学の学園祭「あきび祭2026」の公式サイトです。イベント、出店、会場マップなどの情報を掲載します。

Next.jsでmicroCMSのコンテンツを取得して静的サイトを生成し、Cloudflare WorkersのStatic Assetsで配信しています。

## 技術構成

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS 4
- microCMS（コンテンツ管理）/ Valibot（取得データの検証）
- Bun（パッケージ管理・スクリプト実行）
- Cloudflare Workers / Wrangler（配信・デプロイ）

## ローカル開発

`package.json` の `packageManager` に合わせてBun 1.3.11を使用します。

```sh
bun ci
cp .env.example .env
```

`.env` に以下の値を設定してください。APIキーを含む `.env` はGit管理の対象外です。

| 変数                      | 用途                                                                  |
| ------------------------- | --------------------------------------------------------------------- |
| `MICROCMS_SERVICE_DOMAIN` | microCMSのサービスドメイン（`https://` や `.microcms.io` を含めない） |
| `MICROCMS_API_KEY`        | コンテンツを取得するためのAPIキー                                     |

microCMSには `constants`、`events`、`shops`、`shop_indexes` のエンドポイントが必要です。データ構造は `lib/valibot.ts` を参照してください。

開発サーバーの起動前に、microCMSの画像を取得・変換します。

```sh
bun run prebuild
bun run dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認します。画像の内容を更新した場合は、再度 `bun run prebuild` を実行してください。

## ビルド・確認

```sh
bun run build
bun run dev:wrangler
```

`bun run build` は最初に `prebuild` を実行し、microCMSの画像をWebPに変換して `public/webp/` に保存します。その後、Next.jsがページを静的出力して `out/` を生成します。両ディレクトリは生成物のためGit管理の対象外です。

`bun run dev:wrangler` で、生成した `out/` をWorkersのローカル環境で確認できます。

## Cloudflare Workersへのデプロイ

ローカルからデプロイする場合は、デプロイ先アカウントでWranglerにログインします。

```sh
bunx wrangler login
bun run deploy
```

`bun run deploy` はビルド後に `wrangler deploy` を実行します。Worker名は `akibi-sai-2026`、配信ディレクトリは `out/` です。設定は `wrangler.jsonc` で管理します。

### GitHub Actions

`.github/workflows/deploy.yml` は、以下のイベントでビルドとデプロイを実行します。

- `repository_dispatch` の `microcms-events-update`（microCMS更新通知用）
- `workflow_dispatch`（Actions画面からの手動実行）

pushやPR作成では実行されません。microCMS更新時に自動実行するには、GitHubへ上記の `repository_dispatch` を送る連携が必要です。

GitHubの `Settings → Environments → production` に、以下のSecretsとVariablesを登録してください。ジョブは `environment: production` を指定してこれらを参照します。

| 種類     | 名前                      | 用途                                   |
| -------- | ------------------------- | -------------------------------------- |
| Secret   | `MICROCMS_API_KEY`        | ビルド時のmicroCMS認証                 |
| Variable | `MICROCMS_SERVICE_DOMAIN` | ビルド時のmicroCMSサービスドメイン     |
| Secret   | `CLOUDFLARE_API_TOKEN`    | WorkersへデプロイするためのAPIトークン |
| Variable | `CLOUDFLARE_ACCOUNT_ID`   | デプロイ先のCloudflareアカウントID     |

APIキー・トークンはSecretsに登録し、ワークフローでは `secrets` コンテキストから参照します。ドメイン・アカウントIDはVariablesに登録し、`vars` コンテキストから参照します。

Cloudflare APIトークンの作成は、[Cloudflare公式のGitHub Actionsガイド](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/)を参照してください。

microCMSの情報はビルド時に静的ページへ反映されるため、公開サイトへの反映には再ビルドと再デプロイが必要です。

## 主なコマンド

| コマンド               | 内容                                          |
| ---------------------- | --------------------------------------------- |
| `bun ci`               | ロックファイルに従って依存関係をインストール  |
| `bun run dev`          | Next.jsの開発サーバーを起動                   |
| `bun run prebuild`     | microCMSの画像を取得・WebPに変換              |
| `bun run build`        | 画像生成と静的サイトのビルド                  |
| `bun run dev:wrangler` | ビルド済みサイトをWorkersのローカル環境で確認 |
| `bun run deploy`       | ビルドしてCloudflare Workersへデプロイ        |
| `bun run lint`         | ESLintでコードを確認                          |
| `bun run format:check` | Prettierで書式を確認                          |
| `bun run format`       | Prettierで書式を整える                        |

## ディレクトリ構成

| パス                 | 内容                                   |
| -------------------- | -------------------------------------- |
| `app/`               | ページ・レイアウト                     |
| `components/`        | UIコンポーネント                       |
| `lib/`               | microCMSクライアント・スキーマ・型定義 |
| `scripts/`           | 画像取得・変換スクリプト               |
| `public/`            | 静的アセット                           |
| `.github/workflows/` | GitHub Actionsのワークフロー           |
| `wrangler.jsonc`     | Cloudflare Workersの設定               |
