// @flow

export type NewPrompt = {}
export type ActionPrompt = {
  +resolve: () => any,
  +reject: () => any
}
export type Prompt = {
  +id: number,
  +resolve: () => any,
  +reject: () => any
}

export type StoreListener = (prompts: Prompt[]) => any

export type Close = (id: number) => void

export type Store = {
  getState: () => Prompt[],
  subscribe: StoreListener => void,
  unsubcribe: StoreListener => void,
  open: NewPrompt => Promise<*>,
  close: Close
}
export type Children = ({ prompts: Prompt[], close: Close }) => any
