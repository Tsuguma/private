# yarn-gulp-webpack

yarn, gulp, webpackを使用した開発環境。
プロジェクトに合わせてカスタムして使用してください。

## Node.js

v11.3.0

## Directory

- src (開発ディレクトリ)
- public_html (公開ディレクトリ)
- node_modules (モジュールディレクトリ)
- gulpfile.babel.js (gulp 設定ファイル)
- tasks (gulp の一つ一つのタスク)
- webpack.config.js (webpack 設定ファイル)
- config.js (全体の設定ファイル)

## Setup

```
yarn
```

## Start

`config.develop` の値を `true` にすると開発用、 `false` にすると本番用になります。

```
yarn gulp
```

`gulp --silent` が実行されます。

### 開発用と本番用の違いについて

- 開発用ではソースマップが出力され、本番用では削除されます(`del` タスクが実行される)。
- 開発用では出力したCSS, JSが整形され、本番用では圧縮されます。

## EditorConfig

EditorConfigを使用する場合は、各エディタでプラグインをインストールしてください。
参考: https://qiita.com/naru0504/items/82f09881abaf3f4dc171

## Branch

- master
- develop
- feature/
- hotfix/

## CSS

- setting = mixin、変数など
- foundation = ベースなど
- layout = ページのレイアウトを構成する共通要素（ヘッダー、サイドナビなど）
- object > component = 最小単位のパーツ（ボタン、タイトルなど）
- object > project = componentを含むもしくはそれ以外の要素で構成されたサイト内で使い回しが効くパーツ
- object > utility = ユーティリティクラス（マージンの微調整などが必要な場合用）
- pages = componentもprojectにも当てはまらないそのページ固有のスタイル → 基本使用しない。使用する場合はそのページのみに読み込むなどして他モジュールへの影響がないように使用すること

FLOCSSをベースとしたCSS設計を使用します。FLOCSSについては以下参照。
[FLOCSS](https://github.com/hiloki/flocss)

### ライブラリについて

`reset-css` のようなライブラリを使用する場合は `config.css.vendor` の配列にパスを追加します。
それらはすべて `public_html/assets/css/vendor.css` としてまとめられます。

```javascript
...

vendor: [
  './node_modules/reset-css/reset.css'
],

...
```

### Lintについて

CSSのビルド時 sass-lint によって構文がチェックされ、構文エラーがある場合はエラー内容がターミナルに表示されます。
原則従った方が良いですが、無効化したい場合は `config.css.lint` の値を `false` にすることで無効化できます。

`.sass-lint.yml` ファイルでチェック内容をカスタマイズすることができます。
カスタマイズする際のルールについては以下参照。
https://github.com/sasstools/sass-lint/tree/master/docs/rules

各エディタにプラグインをインストールすることで、より便利に使うことができます(IDE Integration の項を参照)。
https://github.com/sasstools/sass-lint

## JS

Webpack を通して babel によりコンパイルされます。

### ライブラリについて

`jQuery` のようなライブラリを使用する場合は `config.js.vendor` のオブジェクトに追加します。
それらはすべて `public_html/assets/js/vendor.js` としてまとめられます。

```javascript
...

// (ライブラリが入るグローバル変数名): (ライブラリ名)

vendor: {
  $: 'jquery',
  jquery: 'jquery',
  jQuery: 'jquery'
},

...
```

そして、 `.eslintrc` の `globals` に追加することでグローバル変数として扱うことができます(`true` は上書き不可の意味です)。

```json
...

"globals": {
  "$": true,
  "jquery": true,
  "jQuery": true
}

...
```

注意点として、`slick` のようにグローバル変数として追加できないライブラリを使用する際は、使用したいJSファイル内で `import` する必要があります。

```javascript
import 'slick-carousel';
```

### Lintについて

JSのビルド時 eslint によって構文がチェックされ、構文エラーがある場合はエラー内容がターミナルに表示されます。
原則従った方が良いですが、無効化したい場合は `config.js.lint` の値を `false` にすることで無効化できます。

`.eslintrc` ファイルでチェック内容をカスタマイズすることができます。
カスタマイズする際のルールについては以下参照。
https://eslint.org/docs/rules/

各エディタにプラグインをインストールすることで、より便利に使うことができます(Editors の項を参照)。
https://eslint.org/docs/user-guide/integrations
