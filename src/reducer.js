// @flow

import { OPEN_PROMPT, CLOSE_PROMPT } from './constants'
import type { Prompt } from './types'

type State = Prompt[]
type Action = {
  type: string,
  payload: any
}

const initialState: State = []

export default (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case OPEN_PROMPT: {
      return ([...state, action.payload])
    }
    case CLOSE_PROMPT: {
      const newState = []
      if (!action.payload.id) {
        throw new Error("id is required to close prompt")
      }
      const id = action.payload.id

      for (let i = 0, l = state.length; i < l; i += 1) {
        if (state[i].id !== id) newState.push(state[i])
      }

      return newState
    }
    default: {
      return state
    }
  }
}
