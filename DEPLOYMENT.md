# デプロイガイド

このガイドでは、Netlifyへのデプロイ方法とパフォーマンス確認の手順を説明します。

## 📋 前提条件

- GitHubアカウント
- Netlifyアカウント（無料プランでOK）
- Sanity CMSのプロジェクト（オプション）

## 🚀 デプロイ手順

### 1. GitHubへのプッシュ

```bash
# リポジトリの初期化（まだの場合）
git init
git add .
git commit -m "Initial commit"

# GitHubリポジトリに接続
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

### 2. Netlifyでサイトを作成

#### オプション A: Netlify UI経由

1. [Netlify](https://app.netlify.com/) にログイン
2. "Add new site" → "Import an existing project" をクリック
3. GitHubを選択してリポジトリを接続
4. ビルド設定を確認（自動検出されるはず）:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. "Deploy site" をクリック

#### オプション B: Netlify CLI経由

```bash
# Netlify CLIのインストール
npm install -g netlify-cli

# Netlifyにログイン
netlify login

# サイトの初期化とデプロイ
netlify init
```

### 3. 環境変数の設定

Netlifyダッシュボードで以下を設定:

1. "Site settings" → "Environment variables" に移動
2. 以下の変数を追加:
   - `SITE`: あなたのサイトURL（例: `https://your-site.netlify.app`）
   - `SANITY_PROJECT_ID`: Sanityプロジェクト ID（必要に応じて）

### 4. カスタムドメインの設定（オプション）

1. Netlifyダッシュボードで "Domain settings" に移動
2. "Add custom domain" をクリック
3. ドメインを入力して指示に従う
4. DNSレコードを更新（Netlifyが自動的にSSL証明書を発行）

## 🔄 継続的デプロイ

GitHubにプッシュすると、Netlifyが自動的に：
1. コードをプル
2. `npm run build` を実行
3. 新しいバージョンをデプロイ

## 📊 パフォーマンス確認

### ビルド完了後の確認項目

デプロイが完了したら、以下のツールでパフォーマンスを確認してください。

#### 1. PageSpeed Insights

```
https://pagespeed.web.dev/
```

**確認項目:**
- ✅ Performance Score: 90以上を目指す
- ✅ LCP (Largest Contentful Paint): 2.5秒以下
- ✅ CLS (Cumulative Layout Shift): 0.1以下
- ✅ FID (First Input Delay): 100ms以下

#### 2. WebPageTest

```
https://www.webpagetest.org/
```

**設定:**
- Location: Tokyo（日本からのアクセスを想定）
- Browser: Chrome
- Connection: 4G または Cable

**確認項目:**
- ✅ First Byte Time
- ✅ Start Render
- ✅ Speed Index
- ✅ Fully Loaded

#### 3. Lighthouse（Chrome DevTools）

1. Chromeでサイトを開く
2. DevTools（F12）を開く
3. "Lighthouse" タブに移動
4. "Generate report" をクリック

**確認項目:**
- ✅ Performance
- ✅ Accessibility
- ✅ Best Practices
- ✅ SEO

### 期待されるスコア

現在の実装では、以下のスコアを達成できるはずです：

| 指標 | 目標スコア | 理由 |
|------|-----------|------|
| Performance | 90-100 | Astro Image、遅延読み込み、最適化済み画像 |
| Accessibility | 90-100 | セマンティックHTML、alt属性 |
| Best Practices | 90-100 | セキュリティヘッダー、HTTPS |
| SEO | 90-100 | メタタグ、OGP、構造化データ |

## 🐛 トラブルシューティング

### ビルドが失敗する

**問題**: Netlifyでビルドエラーが発生

**解決策**:
1. ローカルで `npm run build` を実行して確認
2. `package.json` のNode.jsバージョンを確認
3. Netlify Build Logを確認

### フォームが動作しない

**問題**: お問い合わせフォームが送信できない

**解決策**:
1. フォームに `data-netlify="true"` 属性があるか確認
2. Netlifyダッシュボードの "Forms" タブで検出されているか確認
3. HTMLとして静的にビルドされているか確認（`dist/contact/index.html`）

### 画像が表示されない

**問題**: デプロイ後に画像が表示されない

**解決策**:
1. `src/assets/images/` に画像が存在するか確認
2. ビルドログで画像最適化のメッセージを確認
3. ブラウザのコンソールでエラーを確認

### パフォーマンススコアが低い

**問題**: PageSpeed InsightsでスコアがY低い

**解決策**:
1. **LCPが遅い**: 
   - ヒーロー画像に `loading="eager"` と `fetchpriority="high"` を設定
   - 画像サイズを最適化
2. **CLSが高い**: 
   - すべての画像に `width` と `height` を設定
   - フォント読み込み戦略を見直し
3. **TTFBが遅い**:
   - Netlifyのリージョンを確認
   - エッジキャッシングを有効化

## 📈 最適化のヒント

### 画像最適化

```astro
<!-- LCP要素（ファーストビュー） -->
<Image 
  src={heroImage}
  alt="..."
  loading="eager"
  fetchpriority="high"
/>

<!-- その他の画像 -->
<Image 
  src={image}
  alt="..."
  loading="lazy"
/>
```

### フォントの最適化

```html
<!-- preconnect for Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Netlify Edge Functions（高度）

より高速なレスポンスのために、Netlify Edge Functionsの使用を検討:

```toml
# netlify.toml
[[edge_functions]]
  function = "add-headers"
  path = "/*"
```

## 🔍 モニタリング

### Netlify Analytics

Netlifyの組み込みアナリティクスで以下を確認:
- ページビュー
- ユニーク訪問者
- トップページ
- リファラー

### Google Analytics（オプション）

より詳細な分析が必要な場合は、Google Analytics 4を追加:

1. GA4プロパティを作成
2. `src/layouts/Base.astro` にトラッキングコードを追加
3. イベントトラッキングを設定

## 📝 チェックリスト

デプロイ前の最終確認:

- [ ] ローカルで `npm run build` が成功する
- [ ] すべてのページが正しく表示される
- [ ] お問い合わせフォームが動作する
- [ ] 画像が最適化されている
- [ ] メタタグが正しく設定されている
- [ ] OGP画像が設定されている
- [ ] モバイルレスポンシブデザインが機能する
- [ ] Lighthouseスコアが90以上
- [ ] Netlify.tomlが設定されている
- [ ] 環境変数が設定されている

## 🎉 デプロイ完了！

おめでとうございます！サイトが本番環境で稼働しています。

次のステップ:
1. Google Search Consoleに登録
2. サイトマップを送信
3. 定期的にパフォーマンスを確認
4. ユーザーフィードバックを収集

## 💬 サポート

問題が発生した場合:
1. [Netlify Support Forums](https://answers.netlify.com/)
2. [Astro Discord](https://astro.build/chat)
3. このリポジトリのIssues
