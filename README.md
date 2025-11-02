# Company Site

会社サイト（Astro + Sanity）

## 📚 ドキュメント

- **デプロイ手順**: [NETLIFY_SETUP_GUIDE.md](./NETLIFY_SETUP_GUIDE.md) を参照

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## デプロイ

- **サイト**: Netlify にデプロイ
- **Studio**: Sanity Studio にデプロイ済み

## 環境変数

プロジェクトルートに `.env.local` を作成（必要な場合）:

```bash
# Sanity
SANITY_STUDIO_PROJECT_ID=vdcrzio7
SANITY_STUDIO_DATASET=production
```

## ドメイン

- **メインサイト**: https://assetpartners.jp
- **Studio**: https://company-site-homepages.sanity.studio
