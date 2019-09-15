# redux-thunk

Reducerに`{type:READ_EVENTS}`のようにactionのタイプを渡す際に例えば記事一覧など非同期処理で受け取ったデータも渡したい時に使う。
でも、Reducerの中で非同期処理を呼び出すのではダメなの？

```js
~ 略 ~
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
~ 略 ~
const store = createStore(reducer,applyMiddleware(thunk))
```

