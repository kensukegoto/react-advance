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

# react-router

ページ遷移する際に必要。

```js
// トップレベルのコンポーネント
// URLを叩いた時のルーティング

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/events/new" component={EventsNew} /> */}
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

// 子コンポーネントでのページ遷移
import { Link } from 'react-router-dom'
```

# redux-form

https://redux-form.com/8.2.2/docs/gettingstarted.md/

handelSubmitをrenderメソッドの中で取り出して使うあたりが分かりづらいかも。this.propsには`export default combineReducers({ events,form })`をした事でredux-formのreducerが含まれている。

```js
render() {
    const { handelSubmit } = this.props
    return (

      <form onSubmit={handelSubmit(this.onSubmit)}>
      ~ 略 ~
```

入力がない場合はsubmitを非活性・連打が出来ない

```js
// pristine 何も入力されていない状態かどうかをtrue・false
// submitting submitされたらtrue
const { handleSubmit,pristine,submitting } = this.props
~ 略 ~
<input type="submit" value="Submit" disabled={pristine || submitting} />
```