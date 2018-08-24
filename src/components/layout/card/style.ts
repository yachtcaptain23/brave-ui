/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import { CardProps } from './index'

const StyledCard = styled<CardProps, 'div'>('div')`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  margin: 0;
  padding: 30px 36px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 8px 0 rgba(99,105,110,0.12);
  font-size: inherit;
  box-sizing: border-box;
  position: relative;
`

export default StyledCard
