# Spindle Text Linter

Spindle (Ameba Design System) Text Linter API with textlint

Spindle Text Linterは[Amebaで定義されたtextlintのルール](https://github.com/openameba/textlint-rule-preset-ameba)に従ってテキストを校正するためのAPIです。textlintが実行できない環境から呼び出すWeb APIとしての用途を想定しています。

## Endpoints

fix, lint2つのエンドポイントが用意されています。URLは公開されていないので、利用したい場合にはSpindleコアメンバーに問い合わせてください。

### Fix

入力された文字に対して、修正できるルールは修正し、その結果を返却します。

`GET /fix?text=ameba`

```JavaScript
{
  "output":"Ameba", // 修正済みの文章
  "fixedRules":[ // 修正したルールの詳細
    {
      "type":"lint",
      "ruleId":"ameba/prh",
      "message":"アメーバ => Ameba",
      "index":0,
      "line":1,
      "column":1,
      "severity":2,
      "fix":{
        "range":[
          0,
          4
        ],
        "text":"Ameba"
      }
    }
  ],
  "errors":[ // 未修正のエラーリスト
    
  ],
  "warnings":[ // 未修正の警告リスト
    {
      "type":"lint",
      "ruleId":"ameba/ja-no-mixed-period",
      "message":"文末が\"。\"で終わっていません。",
      "index":3,
      "line":1,
      "column":4,
      "severity":1
    }
  ]
}
```

### Lint

入力された文字に対して、リントした結果を返却します。

`GET /lint?text=ameba`

```JavaScript
{
  "errors":[
    {
      "type":"lint",
      "ruleId":"ameba/prh",
      "message":"アメーバ => Ameba",
      "index":0,
      "line":1,
      "column":1,
      "severity":2,
      "fix":{
        "range":[
          0,
          4
        ],
        "text":"Ameba"
      }
    }
  ],
  "warnings":[
    {
      "type":"lint",
      "ruleId":"ameba/ja-no-mixed-period",
      "message":"文末が\"。\"で終わっていません。",
      "index":3,
      "line":1,
      "column":4,
      "severity":1
    }
  ]
}
```
