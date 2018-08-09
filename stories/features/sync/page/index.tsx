/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import Paragraph from '../../../../src/old/paragraph'
import DisabledContent from '../disabledContent'
import EnabledContent from '../enabledContent'

// Utils
import theme from './theme'
import locale from './fakeLocale'

// Fonts
import '../../../assets/fonts/muli.css'
import '../../../assets/fonts/poppins.css'

interface SyncPageProps {
  // Note: this is for demonstration purpose and
  // should not be included in production
  disabled?: boolean
}

interface SyncPageState {
  enabledContent: boolean
  syncResetModalOpen: boolean
}

class SyncPage extends React.PureComponent<SyncPageProps, SyncPageState> {
  get fakeShowCurrentSyncPage () {
    return this.props.disabled
      ? <DisabledContent />
      : <EnabledContent />
  }

  render () {
    return (
      <div style={theme.syncPage}>
        <Heading text={locale.sync} />
        <Paragraph theme={theme.syncInfo} text={locale.syncInfo1} />
        <div style={theme.syncInfoTooltipWrapper}>
          <Paragraph theme={theme.syncInfoGray} text={locale.syncInfo2} />
          <a
            style={theme.syncInfoLink}
            href='https://github.com/brave/sync/wiki/Design'
            rel='noreferrer noopener'
          >
            ?
          </a>
        </div>
        <section id='mainPanel' style={theme.sectionBlock}>
          {
            this.fakeShowCurrentSyncPage
          }
        </section>
      </div>
    )
  }
}

export default SyncPage
