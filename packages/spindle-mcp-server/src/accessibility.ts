const checkList = `チェック内容,重要度,該当ガイドライン,ガイドラインURL
装飾ではない画像やアイコンは、代替テキストで説明している,基本必須,画像に代替テキストを提供する,https://a11y-guidelines.ameba.design/1/1/1/
装飾目的の画像は代替テキストが空、または背景画像になっている,基本必須,画像に代替テキストを提供する,https://a11y-guidelines.ameba.design/1/1/1/
音声ファイルに、キャプションや書き起こしテキストがある,基本必須,収録済みの動画に代替コンテンツを提供する,https://a11y-guidelines.ameba.design/1/2/1/
動画・アニメーションに、内容を説明するテキストがある,基本必須,収録済みの動画に代替コンテンツを提供する,https://a11y-guidelines.ameba.design/1/2/1/
マシンリーダブルに実装している。表や見出し、リスト、画像、フォーム要素など、ブラウザ／アプリ標準の要素や要素間の関係性を適切に実装している,基本必須,情報や関係性を明確にする,https://a11y-guidelines.ameba.design/1/3/1/
HTMLの順序と表示順序を一致させる（※その順序に意味がある場合）,基本必須,意味のある順序でコンテンツを表現する,https://a11y-guidelines.ameba.design/1/3/2/
端末を横向きにしても、適切に文字が折り返されレイアウトが変わり、コンテンツが見切れていない,できれば,表示の向きを固定しない,https://a11y-guidelines.ameba.design/1/3/4/
端末の向きが縦向き（portrait）を前提としたデザインになっていない,できれば,表示の向きを固定しない,https://a11y-guidelines.ameba.design/1/3/4/
ブラウザ／アプリの自動補完機能が最大限活用できている（type属性、autocomplete属性等の利用）,できれば,入力目的を特定できる,https://a11y-guidelines.ameba.design/1/3/5/
自動補完可能な入力内容が、一般的な単位で区切られて入力できる（郵便番号、電話番号は1つの入力フィールドにするなど）,できれば,入力目的を特定できる,https://a11y-guidelines.ameba.design/1/3/5/
色だけでコンテンツを区別していない（グラフ、カレンダーUI、「赤字は必須」など）,基本必須,色だけで伝えない,https://a11y-guidelines.ameba.design/1/4/1/
音声を自動で再生していない,厳守,音声を制御できるようにする,https://a11y-guidelines.ameba.design/1/4/2/
"SpindleのカラーパレットのTheme Colorsを適切に使い分け、コントラスト比を確保している（Text 4.5:1, Object 3:1）",基本必須,テキストや文字画像のコントラストを確保する,https://a11y-guidelines.ameba.design/1/4/3/
画面を200%拡大・文字サイズを2倍に変更しても、適切に文字が折り返され、情報が欠落していない,基本必須,テキストサイズを拡大縮小できる,https://a11y-guidelines.ameba.design/1/4/4/
段落の幅は80文字以内（全角40文字以内）になっている,できれば,テキストの可読性を担保する,https://a11y-guidelines.ameba.design/1/4/8/
画面を400%まで拡大しても、画面幅に合わせて画像や要素のサイズが変動し、テキストは適切に折り返される（レスポンシブデザイン）,できれば,リフローできる,https://a11y-guidelines.ameba.design/1/4/10/
マウスホバー・キーボードフォーカスで表示したコンテンツは、(1)クリック・Escキーで非表示にでき(2)追加コンテンツにマウスホバーでき(3)自動で消えない,基本必須,ホバーまたはフォーカスで表示されるコンテンツを制御できる,https://a11y-guidelines.ameba.design/1/4/13/
すべての機能がキーボードのTab、上下左右、EnterまたはSpaceキーで操作できる,基本必須,キーボード、タッチデバイスで操作できる,https://a11y-guidelines.ameba.design/2/1/1/
モーダル・iframeなどのComponentから、TabキーまたはEscキーだけでキーボードフォーカスを移動することができる（キーボードトラップなし）,厳守,キーボード操作を可能にする,https://a11y-guidelines.ameba.design/2/1/2/
コンテンツに時間制限がない。または20秒前に通知し、簡単に解除か延長ができる,基本必須,コンテンツに制限時間を設けない,https://a11y-guidelines.ameba.design/2/2/1/
動画やアニメーションを自動で再生しない。自動再生する場合、5秒以内に停止するか、停止できる。,厳守,動く、自動更新するコンテンツに配慮する,https://a11y-guidelines.ameba.design/2/2/2/
点滅（1秒に3回以上）している動画・アニメーションがない,厳守,画面の点滅を防止する,https://a11y-guidelines.ameba.design/2/3/1/
パララックスなど、スクロールやクリックで起きる「移動・拡大縮小・回転のアニメーション」は、「視差効果を減らす」で削除・軽減できる,基本必須,ユーザー操作で起きるアニメーションを無効にできる,https://a11y-guidelines.ameba.design/2/3/3/
パララックスなど、スクロールやクリックで起きる「移動・拡大縮小・回転のアニメーション」がなくてもコンテンツが利用できる,基本必須,ユーザー操作で起きるアニメーションを無効にできる,https://a11y-guidelines.ameba.design/2/3/3/
メインコンテンツをmain要素でマークアップする。または、メインコンテンツの先頭にh1要素またはh2要素の見出しがある,基本必須,重複する情報をスキップできるようにする,https://a11y-guidelines.ameba.design/2/4/1/
キーボード操作の順序が、見た目の順序と一致している,基本必須,適切なフォーカス順序にする,https://a11y-guidelines.ameba.design/2/4/3/
リンクテキストがリンク先のページタイトルと一致している。または、リンクテキストからリンク先のページの内容を推測できる。,基本必須,リンクの目的を理解できるようにする,https://a11y-guidelines.ameba.design/2/4/4/
操作可能なUIは、フォーカスの状態が見える,基本必須,フォーカスを見えるようにする,https://a11y-guidelines.ameba.design/2/4/7/
サービス内の現在位置がわかるようなナビゲーションを利用できる（パンくず、サイトマップなど）,できれば,現在位置を確認できる,https://a11y-guidelines.ameba.design/2/4/8/
ナビゲーションは現在位置をマシンリーダブルに実装している,できれば,現在位置を確認できる,https://a11y-guidelines.ameba.design/2/4/8/
ジェスチャーだけでしか操作できない機能がない（スワイプ、ピンチイン・アウト、ドラッグ＆ドロップなどには他の操作方法がある),基本必須,ポインタジェスチャを必須としない,https://a11y-guidelines.ameba.design/2/5/1/
ボタンやリンクなどにmousedownやtouchstartしても、別の場所で離せばキャンセルできる,基本必須,ポインタ操作のキャンセルができる,https://a11y-guidelines.ameba.design/2/5/2/
表示ラベルとAccessibility Nameが一致、または前方一致している,基本必須,表示するラベルが実装上のテキストに含まれている,https://a11y-guidelines.ameba.design/2/5/3/
タップエリアは44px × 44px以上確保している（余白込みも可）,できれば,ターゲットのサイズを理解する,https://a11y-guidelines.ameba.design/2/5/5/
UIラベリング - コンテンツ | Spindleに則ったラベリングの定義ができている。,できれば,難しい文章表現を避ける,https://a11y-guidelines.ameba.design/3/1/5/
キーボードフォーカス時に、ページ遷移・レイアウト変更・ダイアログの表示・フォーカスの移動をしていない,基本必須,フォーカス時にコンテンツを大きく変更しない,https://a11y-guidelines.ameba.design/3/2/1/
フォーム要素は、入力・選択時に予測できない変化を起こさない（セレクトボックスを上下キーで移動すると決定される、入力するとフォーカスが移動するなど）,基本必須,入力時に予測できない変化を起こさない,https://a11y-guidelines.ameba.design/3/2/2/
新規タブを開くリンクは、新規タブを開くことがわかるデザイン・実装である,できれば,要求による変化,https://waic.jp/docs/WCAG21/Understanding/change-on-request.html
エラーのある入力項目にエラー内容を表示している,基本必須,エラーを特定できる,https://a11y-guidelines.ameba.design/3/3/1/
入力欄には入力内容を示すラベルがある（placeholderをラベルに使っていない）,基本必須,入力項目にラベルまたは説明をつける,https://a11y-guidelines.ameba.design/3/3/2/
エラー原因が機械的に検出できる場合、修正方法をユーザーに提示している,基本必須,エラーの修正を提案する,https://a11y-guidelines.ameba.design/3/3/3/
HTML仕様に準拠した実装をしている,基本必須,HTMLを正しく記述する,https://a11y-guidelines.ameba.design/4/1/1/
カスタムコントロール（ブラウザ標準でない独自のUIコンポーネント）を実装する場合、AccessibilityNameとrole、WAI-ARIA属性を適切に設定している,基本必須,カスタムコントロールの操作性を担保する,https://a11y-guidelines.ameba.design/4/1/2/
カスタムコントロールは、スクリーンリーダーでも機能落ちがなく、読み上げが過不足なく行われている,基本必須,カスタムコントロールの操作性を担保する,https://a11y-guidelines.ameba.design/4/1/2/
スクリーンリーダー利用時に、フォーカスしなくてもステータスメッセージが通知される,できれば,コンテンツの変更をユーザーに知らせる,https://a11y-guidelines.ameba.design/4/1/3/
`;

export async function getAccessibilityDocs() {
  return {
    checkList,
  };
}
