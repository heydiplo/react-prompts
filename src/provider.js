// @flow

import * as React from 'react'
import type { Store, Prompt, Children } from './types'

type Props = {
  children: Children,
  store: Store
}
type State = {
  prompts: Prompt[]
}
export default class PromptsProvider extends React.Component<Props, State> {
  state = {
    prompts: this.props.store.getState()
  }

  updateState = (prompts: Prompt[]) => this.setState({ prompts })

  componentDidMount() {
    this.props.store.subscribe(this.updateState)
  }

  componentWillUnmount() {
    this.props.store.unsubcribe(this.updateState)
  }

  render() {
    const { children, store: { close }} = this.props
    const { prompts } = this.state

    return (
      children({ prompts, close })
    )
  }
}
