# デプロイ前チェックリスト ✅

## 📦 ビルド・動作確認

- [x] `npm run build` が成功する
- [x] ローカルで `npm run preview` が正常に動作する
- [x] すべてのページが表示される
- [x] 画像が正しく読み込まれる
- [x] Netlify Formsが正しく設定されている

## 🎨 UI/UX

- [x] レスポンシブデザインが機能する（モバイル、タブレット、デスクトップ）
- [x] ナビゲーションが各ページで動作する
- [x] ホバーエフェクトが動作する
- [x] フォームのバリデーションが機能する
- [x] パンくずリストが表示される

## 🔍 SEO対策

### 基本設定
- [x] 各ページに適切なタイトルタグ
- [x] 各ページに適切なメタディスクリプション
- [x] canonical URLが設定されている
- [x] robots metaタグが適切に設定されている
- [x] サイトマップが生成される

### 構造化データ（JSON-LD）
- [x] ホームページにOrganizationスキーマ
- [x] ブログ記事にArticleスキーマ
- [x] 全ページにBreadcrumbListスキーマ
- [x] 構造化データが正しくフォーマットされている

### OGP設定
- [x] og:title が設定されている
- [x] og:description が設定されている
- [x] og:type が適切に設定されている
- [x] og:url が設定されている
- [x] Twitter Card設定

## ⚡ パフォーマンス最適化

### 画像最適化
- [x] Astro Imageコンポーネントを使用
- [x] LCP要素に `loading="eager"` と `fetchpriority="high"`
- [x] その他の画像に `loading="lazy"`
- [x] すべての画像に width/height 指定（CLS対策）

### Core Web Vitals
- [ ] LCP < 2.5秒
- [ ] CLS < 0.1
- [ ] FID < 100ms

## 🔒 セキュリティ

- [x] HTTPS使用（Netlifyが自動設定）
- [x] セキュリティヘッダー設定（netlify.toml）
- [x] X-Frame-Options設定
- [x] X-Content-Type-Options設定
- [x] フォームにスパム対策（honeypot）

## 📝 コンテンツ

### 会社情報
- [ ] 会社名を実際の名前に変更
- [ ] ロゴ画像を用意（favicon.svg）
- [ ] 住所を実際のものに変更
- [ ] 電話番号を実際のものに変更
- [ ] メールアドレスを実際のものに変更

### サービス情報
- [ ] サービス内容が正確
- [ ] 料金が最新
- [ ] サービス画像が適切

### ブログ設定
- [ ] Sanity CMSが設定されている
- [ ] 記事が正しく表示される
- [ ] RSSフィードが生成される

## 🌐 デプロイ設定

### Netlify
- [ ] GitHubリポジトリに接続
- [ ] ビルドコマンド: `npm run build`
- [ ] 公開ディレクトリ: `dist`
- [ ] 環境変数 `SITE` を設定
- [ ] カスタムドメインを設定（必要に応じて）
- [ ] SSL証明書が発行される

### DNS設定（カスタムドメイン使用時）
- [ ] Aレコードまたは CNAMEレコードを設定
- [ ] DNSの伝播を確認（24-48時間）

## 📊 分析・モニタリング

- [ ] Google Search Consoleにプロパティを追加
- [ ] サイトマップを送信
- [ ] Google Analytics設定（オプション）
- [ ] Netlify Analyticsを有効化（オプション）

## ✅ SEO検証

### デプロイ後の確認

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
  - Organization構造化データ
  - Article構造化データ
  - BreadcrumbList構造化データ

- [ ] [Schema Markup Validator](https://validator.schema.org/)
  - エラーがないことを確認

- [ ] [PageSpeed Insights](https://pagespeed.web.dev/)
  - Performance: 90以上
  - Accessibility: 90以上
  - Best Practices: 90以上
  - SEO: 90以上

- [ ] [Facebook シェアデバッガー](https://developers.facebook.com/tools/debug/)
  - OGP画像が表示される
  - タイトル・説明文が正しい

- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - Twitter Cardが正しく表示される

- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
  - モバイルフレンドリーに合格

## 🧪 機能テスト

### お問い合わせフォーム
- [ ] フォームが送信できる
- [ ] 送信後に成功ページにリダイレクト
- [ ] Netlifyダッシュボードで受信確認
- [ ] バリデーションが機能する
- [ ] 必須項目のチェックが機能する

### ナビゲーション
- [ ] すべてのリンクが機能する
- [ ] 現在のページがハイライトされる
- [ ] ブログ一覧からブログ詳細への遷移
- [ ] パンくずリストのリンクが機能する

### レスポンシブ
- [ ] モバイル（iPhone、Android）
- [ ] タブレット（iPad）
- [ ] デスクトップ（各種画面サイズ）

## 📱 ブラウザ互換性

- [ ] Chrome（最新版）
- [ ] Firefox（最新版）
- [ ] Safari（最新版）
- [ ] Edge（最新版）
- [ ] モバイルSafari
- [ ] Chrome for Android

## 🎯 最終確認

- [ ] すべてのtodoが完了している
- [ ] README.mdが最新
- [ ] DEPLOYMENT.mdを確認
- [ ] SEO_IMPLEMENTATION.mdを確認
- [ ] 不要なコメントを削除
- [ ] console.logを削除
- [ ] テスト用のコードを削除

## 🚀 デプロイ準備完了！

すべてのチェックが完了したら、デプロイを実行してください。

```bash
git add .
git commit -m "Initial release"
git push origin main
```

Netlifyが自動的にビルド・デプロイを開始します。

## 📞 問題が発生した場合

1. Netlifyのビルドログを確認
2. ブラウザのコンソールエラーを確認
3. DEPLOYMENT.mdのトラブルシューティングを参照
4. Issueを作成してサポートを依頼
