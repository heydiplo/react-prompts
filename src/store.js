// @flow

import type { Store, StoreListener, Prompt } from './types'
import { removeFromArray } from './utils'
import reducer from './reducer'
import { OPEN_PROMPT, CLOSE_PROMPT } from './constants'

export default (): Store => {
  let prompts: Prompt[] = []
  let index = 0
  const subscribers: StoreListener[] = []

  const getState = () => prompts
  const subscribe = (f: StoreListener) => {
    subscribers.push(f)
  }
  const unsubcribe = (f: StoreListener) => {
    removeFromArray(subscribers, f)
  }
  const emit = () => {
    for (let i = 0, l = subscribers.length; i < l; i += 1) {
      subscribers[i](prompts)
    }
  }
  const act = (action) => {
    const newPrompts = reducer(prompts, action)

    if (prompts !== newPrompts) {
      prompts = newPrompts
      emit()
    }
  }
  const close = (id: number) => act({ type: CLOSE_PROMPT, payload: { id } })

  const open = (payload: {}) => new Promise((resolve, reject) => {
    index += 1
    const id = index

    act({
      type: OPEN_PROMPT,
      payload: {
        ...payload,
        id,
        resolve: (value?: any) => {
          resolve(value)
          close(id)
        },
        reject: (error?: any) => {
          reject(error)
          close(id)
        }
      }
    })
  })

  return {
    getState,
    subscribe,
    unsubcribe,
    open,
    close
  }
}
