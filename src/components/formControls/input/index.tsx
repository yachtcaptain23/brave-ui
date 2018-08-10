/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import * as CSS from 'csstype'
import { StyledWrapper, StyledInput } from './style'
import ControlWrapper from '../../../features/rewards/controlWrapper/index'

export interface Props {
  id?: string
  title?: React.ReactNode
  defaultValue?: string
  disabled?: boolean
  theme?: Theme
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, child: React.ReactNode) => void
  placeholder?: string
}

interface Theme {
  maxWidth?: CSS.MaxWidthProperty<1>
  minHeight?: CSS.MinHeightProperty<1>
}

export default class Input extends React.PureComponent<Props, {}> {
  render () {
    const { id, onChange, defaultValue, title, theme, disabled, placeholder } = this.props

    return (
      <StyledWrapper id={id} theme={theme}>
        <ControlWrapper title={title} theme={theme}>
          <StyledInput
            onChange={onChange}
            disabled={disabled}
            defaultValue={defaultValue}
            theme={theme}
            placeholder={placeholder}
          />
        </ControlWrapper>
      </StyledWrapper>
    )
  }
}
