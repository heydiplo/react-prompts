```js
import { Provider, open } from 'react-prompts'

// ...

<Provider>{ ({ prompts }) => map(prompts, (prompt) => ({
  <div>
    { prompt.content }
    <button onClick={ () => { prompt.resolve() } }>okay</button>
    <button onClick={ () => { prompt.reject() } }>nope</button>
  </div>
})) }<Provider>

// ...

open({ content: 'sure?' })
  .then(() => { console.log('great!') })
  .catch(() => { console.log('ohhh') })


```
