# SEO/AIEO 実装ガイド

このドキュメントでは、実装されたSEO/AIEO機能について説明します。

## 📋 実装済みSEO機能

### 1. サイトマップ（Sitemap）

**実装内容:**
- `@astrojs/sitemap` 統合
- ビルド時に自動生成
- `sitemap-index.xml` と個別サイトマップ

**確認方法:**
```
https://your-site.com/sitemap-index.xml
```

**astro.config.mjs:**
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()]
});
```

### 2. 構造化データ（JSON-LD）

#### A. Organization（ホームページ）

トップページに会社情報を構造化データとして実装。

**実装場所:** `src/pages/index.astro`

**含まれる情報:**
- ✅ 会社名
- ✅ URL
- ✅ ロゴ
- ✅ 説明文
- ✅ 住所（PostalAddress）
- ✅ 連絡先（ContactPoint）
- ✅ SNSアカウント（sameAs）

**検証:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "株式会社テックソリューション",
  "url": "https://example.com",
  "logo": "https://example.com/favicon.svg",
  ...
}
</script>
```

#### B. Article（ブログ記事）

各ブログ記事に構造化データを実装。

**実装場所:** `src/pages/blog/[slug].astro`

**含まれる情報:**
- ✅ 記事タイトル（headline）
- ✅ 説明文（description）
- ✅ 公開日（datePublished）
- ✅ 更新日（dateModified）
- ✅ 著者情報（author）
- ✅ 出版社情報（publisher）
- ✅ ロゴ（ImageObject）
- ✅ メインエンティティ（mainEntityOfPage）

#### C. BreadcrumbList（パンくずリスト）

全ページにパンくずリストの構造化データを実装。

**実装場所:** `src/components/Breadcrumbs.astro`

**使用ページ:**
- ✅ サービス一覧
- ✅ 会社概要
- ✅ お問い合わせ
- ✅ ブログ一覧
- ✅ ブログ記事詳細

**含まれる情報:**
- ✅ 各アイテムの位置（position）
- ✅ 各アイテムの名前（name）
- ✅ 各アイテムのURL（item）

### 3. Canonical URL

**実装場所:** `src/layouts/Base.astro`

**機能:**
- 各ページに正規URLを指定
- 重複コンテンツの問題を回避
- OGP URLまたは現在のページURLを自動設定

```html
<link rel="canonical" href="https://example.com/page" />
```

### 4. Robots メタタグ

**実装場所:** `src/layouts/Base.astro`

**設定:**
```html
<meta name="robots" content="index, follow" />
```

**意味:**
- `index`: 検索エンジンにインデックスを許可
- `follow`: リンクをたどることを許可

**ページごとにカスタマイズする場合:**
```astro
<!-- 例: 特定のページをインデックスしない -->
<meta name="robots" content="noindex, follow" />
```

### 5. OGP（Open Graph Protocol）

**実装場所:** `src/layouts/Base.astro`

**含まれる情報:**
- ✅ og:type（website/article）
- ✅ og:title
- ✅ og:description
- ✅ og:url
- ✅ og:site_name
- ✅ og:locale

### 6. Twitter Card

**実装場所:** `src/layouts/Base.astro`

**含まれる情報:**
- ✅ twitter:card（summary_large_image）
- ✅ twitter:title
- ✅ twitter:description

## 🔍 検証方法

### 構造化データのテスト

#### Google リッチリザルトテスト
```
https://search.google.com/test/rich-results
```

1. URLまたはコードを入力
2. 「URLをテスト」をクリック
3. エラーや警告を確認

#### Schema Markup Validator
```
https://validator.schema.org/
```

1. URLまたはコードを入力
2. 「Run Test」をクリック
3. 構造化データの妥当性を確認

### OGPのテスト

#### Facebook シェアデバッガー
```
https://developers.facebook.com/tools/debug/
```

#### Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```

### サイトマップの確認

#### Google Search Console
1. プロパティを追加
2. 「サイトマップ」に移動
3. サイトマップURLを送信
4. インデックス状況を確認

## 📊 期待される効果

### 検索エンジン最適化（SEO）

| 機能 | 効果 |
|------|------|
| サイトマップ | クローラビリティ向上、インデックス速度向上 |
| 構造化データ | リッチスニペット表示、CTR向上 |
| Canonical URL | 重複コンテンツ回避、SEO評価の集約 |
| OGP | SNSでの見栄え向上、クリック率向上 |

### AIEO（AI Engine Optimization）

| 機能 | 効果 |
|------|------|
| Organization | AI検索での会社情報の正確な表示 |
| Article | AI要約での記事情報の適切な引用 |
| BreadcrumbList | サイト構造の理解向上 |
| 構造化データ | AIによるコンテンツ理解の向上 |

## 🛠️ カスタマイズ方法

### 会社情報の更新

`src/pages/index.astro` の `organizationSchema` を編集:

```javascript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "あなたの会社名",
  "url": "https://your-site.com",
  "logo": "https://your-site.com/logo.png",
  // ... その他の情報
};
```

### SNSアカウントの追加

```javascript
"sameAs": [
  "https://twitter.com/yourcompany",
  "https://www.facebook.com/yourcompany",
  "https://www.linkedin.com/company/yourcompany",
  "https://www.instagram.com/yourcompany"
]
```

### 特定のページをインデックスしない

Base.astroにプロップを追加:

```astro
---
interface Props {
  title?: string;
  description?: string;
  robots?: string; // 追加
}

const { robots = 'index, follow' } = Astro.props;
---

<meta name="robots" content={robots} />
```

使用例:
```astro
<Base title="..." description="..." robots="noindex, follow">
  ...
</Base>
```

### OGP画像の追加

1. 画像を作成（推奨サイズ: 1200x630px）
2. `public/` ディレクトリに配置
3. Base.astroに追加:

```astro
---
interface Props {
  ogImage?: string;
}

const { ogImage } = Astro.props;
const defaultOgImage = `${baseUrl}/og-image.jpg`;
---

<meta property="og:image" content={ogImage || defaultOgImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

## 📈 パフォーマンス指標

### Core Web Vitals との関係

| SEO要素 | CWV指標 | 影響 |
|---------|---------|------|
| 構造化データ | なし | 直接的な影響なし（間接的にCTR向上） |
| Canonical | なし | SEO評価の集約 |
| OGP | なし | SNS流入増加 |
| サイトマップ | なし | クロール効率向上 |

### SEO スコアチェックリスト

デプロイ後、以下をチェック:

- [ ] Google Search Consoleにプロパティを追加
- [ ] サイトマップを送信
- [ ] リッチリザルトテストで構造化データを検証
- [ ] OGPが正しく表示されるか確認（Facebook、Twitter）
- [ ] モバイルフレンドリーテストに合格
- [ ] PageSpeed Insightsで90以上のスコア
- [ ] すべてのページにcanonical URLが設定されている
- [ ] ブログ記事にArticle構造化データがある
- [ ] パンくずリストが表示されている
- [ ] robots.txtが適切に設定されている（必要に応じて）

## 🎯 ベストプラクティス

### 1. 構造化データの保守

- 会社情報が変更されたらOrganizationスキーマを更新
- 新しいコンテンツタイプを追加する際は適切なスキーマを実装
- 定期的にリッチリザルトテストで検証

### 2. Canonical URL

- すべてのページにcanonical URLを設定
- パラメータ付きURLの場合も同じcanonicalを指定
- HTTPSを使用（HTTPへのcanonicalは避ける）

### 3. OGP画像

- 各ページに適切なOGP画像を設定
- 推奨サイズ: 1200x630px
- ファイルサイズ: 300KB以下
- 形式: JPG、PNG

### 4. パンくずリスト

- 階層構造を正確に反映
- ホームから現在のページまでの経路を明確に
- 最後の項目（現在のページ）はリンクなし

## 🔗 参考リンク

### Google公式ドキュメント

- [構造化データの概要](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Organization構造化データ](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Article構造化データ](https://developers.google.com/search/docs/appearance/structured-data/article)
- [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

### Schema.org

- [Schema.org](https://schema.org/)
- [Organization](https://schema.org/Organization)
- [Article](https://schema.org/Article)
- [BreadcrumbList](https://schema.org/BreadcrumbList)

### ツール

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

## 💡 今後の拡張案

1. **FAQページの構造化データ**
   - FAQPageスキーマの実装
   - よくある質問のリッチスニペット表示

2. **製品/サービスの構造化データ**
   - Productスキーマの実装
   - 価格や評価の表示

3. **イベント情報**
   - Eventスキーマの実装
   - セミナーやウェビナーの情報

4. **レビュー/評価**
   - Reviewスキーマの実装
   - AggregateRatingの追加

5. **動画コンテンツ**
   - VideoObjectスキーマの実装
   - YouTube動画の構造化データ

## 🤝 貢献

SEO実装の改善提案やバグ報告は、Issueまたはプルリクエストでお願いします。
