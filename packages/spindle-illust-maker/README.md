# Spindle Illust Maker

Illustration maker with Spindle (Ameba Design System)

Spindleのイラストレーションパーツを組み合わせて、1枚の画像を作成できるツールです。ポーズ・パーツ・アクセサリを選んでcanvasに合成し、PNGとしてダウンロードまたはクリップボードにコピーできます。

- 公開URL: <https://ameba-spindle-illustration-maker.web.app>

## 使い方

1. ポーズを選ぶ（立ち / 座り / 机座り / 乗り / お辞儀 / Old / Child / Baby）
2. Head / Body / Legと、ポーズが対応していればHat / Glasses / Mask / Beardを選ぶ
3. 必要に応じて首の傾き、Head↔Body・Body↔Legの入れ替えを調整する
4. S / M / Lからサイズを選び、`Download` でPNGを保存、または `Copy` でクリップボードにコピーする

サイコロボタンを押すと、選択中のヘッドタイプ（Man / Woman）を維持したままパーツをランダムに選び直します。

### URL での共有

選択状態はクエリパラメータとしてURLに保存されます。URLを共有すると、同じ組み合わせが復元されます。

| パラメータ | 値 | 例 |
| --- | --- | --- |
| `pose` | ポーズ ID | `adult-standing` |
| `head` / `body` / `leg` / `hat` / `glasses` / `mask` / `beard` | `/illust/` と `.svg` を除いたパーツのパス | `head/woman/01-green` |
| `neckTilt` | `normal` / `up` / `down` | `up` |
| `headBodySwap` / `bodyLegSwap` | `true` / `false` | `true` |
| `scale` | `0.5` / `1` / `2`（S / M / L） | `2` |

`pose` 以外は省略できます。省略した項目と不正な値はポーズの既定値になります。

## 組み込み

### iframe embed

`?mode=embed` を付けてiframeで読み込むと描画専用モードになり、UIを表示せずに `postMessage` で画像を受け取れます。

```html
<iframe
  src="https://ameba-spindle-illustration-maker.web.app/?mode=embed&pose=adult-standing&head=head%2Fman%2F01-green"
  hidden
></iframe>
```

- 読み込み完了時に、URLのクエリで指定した状態を描画し、埋め込み元へ `{ type: 'spindle-illust-maker:render', dataUrl }` を送ります。`dataUrl` はPNGのdata URLです。
- 別の組み合わせを描画したいときは、iframeへ `{ type: 'spindle-illust-maker:request', url }` または `{ type: 'spindle-illust-maker:request', params }` を送ります。`url` は共有URL、`params` はクエリ文字列（`pose=...&head=...`）です。結果はリクエストを送ったwindowにだけ返ります。
- 埋め込み元が `sandbox` 属性付きのiframeや `file://` など、originが `null` になる環境の場合、返信の `targetOrigin` は `'*'` になります。宛先はリクエストを送ったwindowに限定されるため、第三者のwindowに画像が届くことはありません。

```js
const iframe = document.querySelector('iframe');

window.addEventListener('message', (e) => {
  if (e.origin !== 'https://ameba-spindle-illustration-maker.web.app') return;
  if (e.data?.type === 'spindle-illust-maker:render') {
    img.src = e.data.dataUrl;
  }
});

iframe.contentWindow.postMessage(
  { type: 'spindle-illust-maker:request', params: 'pose=child&head=head%2Fchild%2F01-green' },
  'https://ameba-spindle-illustration-maker.web.app',
);
```

### ライブラリ

`createIllustMaker()` で、状態の生成・URLのパース・PNGのBlob生成を行えます。APIは今後変更する可能性があるため、npmには公開していません（`private: true`）。利用する場合はリポジトリ内で `pnpm --filter @openameba/spindle-illust-maker build:lib` を実行して `lib/` を参照してください。

```ts
import { createIllustMaker } from '@openameba/spindle-illust-maker';

const maker = createIllustMaker();
const state = maker.parseUrl(location.href) ?? maker.getDefaultState('adult-standing');
const blob = await maker.render(state, { scale: 2 });
```

画像は既定で公開URLの `/illust/` から読み込みます。別の場所に置いたイラストを使う場合は `createIllustMaker({ assetBaseUrl })` で差し替えてください。

## 開発

```sh
pnpm --filter @openameba/spindle-illust-maker dev            # 開発サーバー
pnpm --filter @openameba/spindle-illust-maker test:unit      # ユニットテスト
pnpm --filter @openameba/spindle-illust-maker test:interaction  # ブラウザ上の UI テスト（Playwright）
pnpm --filter @openameba/spindle-illust-maker test:browser   # VRT を含むブラウザテスト
```

VRTの参照画像はリポジトリに含めていないため、CIではユニットテストとインタラクションテストのみ実行します。参照画像は `update-illust-maker-snapshots` ワークフローを手動実行するとartifactとして取得できます。

### イラストの更新手順

イラストはFigmaで管理しています。Figma側でパーツが追加・変更されたら、以下の手順で反映します。いずれもFigmaのPersonal Access Tokenを `FIGMA_TOKEN` 環境変数に設定して実行します。

1. `scripts/illust-nodes.json` を更新する。各パーツのFigmaノードID、`category`（`head/man` や `body-standing` など `public/illust/` 配下のディレクトリ名）、`filename` を列挙したファイルです
2. `pnpm --filter @openameba/spindle-illust-maker illust:download` でSVGを書き出す。`illust-images/` に出力されるので、内容を確認して `public/illust/` に反映する
3. `pnpm --filter @openameba/spindle-illust-maker illust:offsets` で `src/constants/part-offsets.json` を更新する。Figmaのフレームと描画範囲のずれを補正する値で、描画位置の計算に使います
4. `src/constants/parts.ts` に追加・削除したパーツを反映する。パーツの一覧はこのファイルで管理しており、`public/illust/` の内容と一致させる必要があります
5. 新しいカテゴリのパーツを追加した場合は、`src/constants/poses.ts` の各ポーズにレイヤー（描画位置・サイズ・重なり順）を追加する

> [!NOTE]
> `public/illust/umbrella/` の SVG は配信していますが、現時点ではどのポーズにもレイヤーを定義していないため、UI からは選択できません。

## デプロイ

Firebase Hostingで配信しています。

- `main` へマージすると `deploy-illust-maker` ワークフローが本番（公開URL）へデプロイします
- Pull Requestごとに `deploy-illust-maker-preview` ワークフローがプレビューチャンネルへデプロイし、URLをPRコメントに投稿します

## ライセンス

Spindle Illust Makerは以下2つのライセンスで公開されています。

- イラストファイルは、[Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja)
- ソースコードは、[MIT License](https://opensource.org/licenses/MIT)
