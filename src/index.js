// @flow

import * as React from 'react'
import type { Children } from './types'
import RawProvider from './provider'
import createStore from './store'

const store = createStore()

type Props = {
  children: Children
}
export const Provider = ({ ...props }: Props) => <RawProvider { ...props } store={ store } />
export const { open } = store
