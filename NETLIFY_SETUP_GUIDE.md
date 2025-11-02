# Netlify デプロイ手順（初心者向け）

## 📋 手順1: Netlifyアカウント作成

1. **https://www.netlify.com** にアクセス
2. 右上の「**Sign up**」をクリック
3. 「**GitHub**」を選択してGitHubアカウントでログイン
   - これでGitHubと自動連携されます

## 📋 手順2: プロジェクトをNetlifyに追加

1. Netlifyダッシュボードで「**Add new site**」→「**Import an existing project**」
2. 「**GitHub**」を選択
3. **権限確認**: 「**Configure Netlify on GitHub**」をクリック
   - NetlifyがあなたのGitHubにアクセスできるようにします
4. `company-site` リポジトリを選択
5. **Settings**画面で以下を確認:
   - **Build command**: `npm run build`（自動設定）
   - **Publish directory**: `dist`（自動設定）
6. そのまま「**Deploy site**」をクリック

**初回ビルド完了まで約2-5分かかります。**

## 📋 手順3: 独自ドメインを設定する

### ステップ1: Netlifyでドメインを追加

1. デプロイ成功後、サイトの「**Domain settings**」をクリック
2. 「**Add custom domain**」をクリック
3. `assetpartners.jp` と入力
4. さらに `www.assetpartners.jp` も追加（両方必要です）

### ステップ2: お名前.comでDNS設定を変更

**⚠️ 重要**: 現在Cloudflareのネームサーバーを使用しています。これを**お名前.comのネームサーバーに変更**します。

#### A) お名前.comでネームサーバーを変更

1. お名前.comナビにログイン
2. 「**ドメイン設定**」→「**ネームサーバーの設定**」
3. ネームサーバー1: `dns1.p01.nsone.net`
4. ネームサーバー2: `dns2.p01.nsone.net`
5. 「**確認**」をクリック

#### B) お名前.comでDNSレコード追加

1. 「**ドメイン設定**」→「**DNS関連機能の設定**」
2. 「**DNSレコード設定を利用する**」を選択
3. 以下を追加:

```
Aレコード1:
タイプ: A
ホスト名: @
値: 75.2.60.5

Aレコード2:
タイプ: A
ホスト名: www
値: 75.2.60.5
```

**注意**: IPアドレスは変更される可能性があるので、必ずNetlifyの「Domain settings」で最新のIPを確認してください。

### ステップ3: DNS反映を待つ

- **最小**: 5分
- **通常**: 1-2時間
- **最大**: 48時間

## 📋 手順4: お問い合わせフォームの確認

デプロイ後、Netlifyは自動的にフォームを検出します。

1. 「**Site settings**」→「**Forms**」
2. 「**Form notifications**」
3. メール通知先を設定
4. 受信確認メールで有効化

## ✅ 完了！

これで https://assetpartners.jp でサイトにアクセスできます！

## 🔧 トラブルシューティング

### DNSが反映されない場合

```
# コマンドプロンプトで実行して確認
nslookup assetpartners.jp

# 75.2.x.x が表示されればOK
```

### フォームが動作しない場合

1. Netlifyの「Forms」でエラー確認
2. HTMLの`netlify`属性が正しいか確認
3. スパム対策の設定を確認

## 📞 サポート

- Netlify公式ドキュメント: https://docs.netlify.com
- お名前.comサポート: https://help.onamae.com

