import * as React from 'react'

import { StyledH1, StyledH2, StyledH3 } from './style'

export interface HeadingTheme {
  color?: string
  margin?: string
}

export interface HeadingProps {
  id?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  text?: string
  theme?: HeadingTheme
}

class Heading extends React.PureComponent<HeadingProps, {}> {
  render () {
    const { id, level, theme, text } = this.props
    switch (level) {
      case 1:
        return <StyledH1 id={id} theme={theme}>{text}</StyledH1>
      case 2:
        return <StyledH2 id={id} theme={theme}>{text}</StyledH2>
      case 3:
        return <StyledH3 id={id} theme={theme}>{text}</StyledH3>
      case 4:
      case 5:
      case 6:
      default:
        return <StyledH1 id={id} theme={theme}>{text}</StyledH1>
    }
  }
}

export default Heading
