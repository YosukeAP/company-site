# 会社サイト

最新技術を活用したWebサイト制作、システム開発、コンサルティングサービスを提供する会社のコーポレートサイトです。

## 🚀 技術スタック

- **フレームワーク**: Astro 5.x
- **スタイリング**: Tailwind CSS 4.x
- **CMS**: Sanity
- **デプロイ**: Netlify (推奨)
- **言語**: TypeScript

## 📦 主要機能

### ✅ 実装済み機能

1. **共通レイアウト**
   - レスポンシブナビゲーション
   - SEO対応（OGP、Twitter Card、JSON-LD）
   - 統一されたヘッダー・フッター

2. **主要ページ**
   - ホーム（Hero + サービス紹介 + 最新記事 + CTA）
   - サービス一覧（6つのサービス詳細）
   - 会社概要（ミッション、価値観、会社情報、チーム紹介）
   - お問い合わせ（Netlify Forms対応）
   - ブログ（Sanity CMS連携）

3. **画像最適化**
   - Astro Image コンポーネント使用
   - 自動的なサイズ調整と最適化
   - CLS対策（width/height指定）
   - LCP最適化（loading="eager", fetchpriority="high"）
   - 遅延読み込み（loading="lazy"）

4. **お問い合わせフォーム**
   - Netlify Forms統合
   - スパム対策（ハニーポット）
   - 送信成功ページ
   - バリデーション

5. **パフォーマンス最適化**
   - 画像の自動最適化
   - CLS（Cumulative Layout Shift）対策
   - LCP（Largest Contentful Paint）改善
   - 遅延読み込み

## 🛠️ セットアップ

### 必須要件

- Node.js 18.x 以上
- npm または pnpm

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 📁 プロジェクト構造

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/          # 画像ファイル（最適化対象）
│   ├── components/          # 再利用可能なコンポーネント
│   ├── layouts/
│   │   └── Base.astro       # 共通レイアウト
│   ├── lib/
│   │   └── sanityClient.ts  # Sanity CMS設定
│   ├── pages/
│   │   ├── index.astro      # ホームページ
│   │   ├── services.astro   # サービス一覧
│   │   ├── about.astro      # 会社概要
│   │   ├── contact.astro    # お問い合わせ
│   │   ├── contact/
│   │   │   └── success.astro # 送信完了ページ
│   │   └── blog/
│   │       ├── index.astro      # ブログ一覧
│   │       ├── [slug].astro     # ブログ記事詳細
│   │       └── rss.xml.ts       # RSSフィード
│   └── styles/
│       └── global.css       # Tailwind CSS
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 カスタマイズ

### 会社情報の変更

`src/pages/about.astro` の `companyInfo` オブジェクトを編集してください。

### サービス内容の変更

`src/pages/services.astro` の `services` 配列を編集してください。

### Sanity CMS設定

`src/lib/sanityClient.ts` で以下を変更：
- `projectId`: SanityプロジェクトID
- `dataset`: データセット名（通常は 'production'）

## 🚀 デプロイ

### Netlify

1. リポジトリをGitHubにプッシュ
2. Netlifyで新しいサイトを作成
3. ビルド設定:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 環境変数（必要に応じて）:
   - `SITE`: 本番環境のURL

### Netlify Forms

お問い合わせフォームは、Netlifyにデプロイすると自動的に有効化されます。
Netlifyダッシュボードの「Forms」タブで送信内容を確認できます。

## 📈 パフォーマンス

### 画像最適化のベストプラクティス

```astro
<!-- LCP要素（最初に表示される大きな画像） -->
<Image 
  src={heroImage}
  alt="説明文"
  width={1200}
  height={600}
  loading="eager"
  fetchpriority="high"
/>

<!-- その他の画像（遅延読み込み） -->
<Image 
  src={image}
  alt="説明文"
  width={400}
  height={300}
  loading="lazy"
/>
```

### CLS対策

- すべての画像に `width` と `height` を指定
- レイアウトシフトを防ぐため、画像の縦横比を保持

## 🔧 開発のヒント

### 新しいページの追加

1. `src/pages/` に新しい `.astro` ファイルを作成
2. `Base.astro` レイアウトをインポート
3. 必要に応じて `Base.astro` のナビゲーションを更新

### ブログ記事の追加

Sanity Studioで新しい記事を作成すると、自動的にサイトに反映されます。

## 📝 ライセンス

MIT

## 🤝 サポート

質問や問題がある場合は、Issueを作成してください。
