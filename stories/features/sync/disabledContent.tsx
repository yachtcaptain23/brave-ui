/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import ButtonPrimary from '../../../src/components/buttonsIndicators/buttonPrimary'
import ButtonSecondary from '../../../src/components/buttonsIndicators/buttonSecondary'

// Modals
import NewToSyncModal from './modals/newToSync'
import ExistingSyncCodeModal from './modals/existingSyncCode'

// Utils
import theme from './page/theme'
import locale from './page/fakeLocale'

interface SyncDisabledContentState {
  newToSyncModal: boolean
  existingSyncCodeModal: boolean
}

class SyncDisabledContent extends React.PureComponent<{}, SyncDisabledContentState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      newToSyncModal: false,
      existingSyncCodeModal: false
    }
  }

  newToSyncModal = () => {
    this.setState({ newToSyncModal: !this.state.newToSyncModal })
  }

  existingSyncCodeModal = () => {
    this.setState({ existingSyncCodeModal: !this.state.existingSyncCodeModal })
  }

  render () {
    return (
      <div style={theme.buttonGrid}>
        {
          this.state.newToSyncModal
            ? <NewToSyncModal onClose={this.newToSyncModal} />
            : null
        }
        {
          this.state.existingSyncCodeModal
            ? <ExistingSyncCodeModal onClose={this.existingSyncCodeModal} />
            : null
        }
        <div>
          <ButtonPrimary
            color='brand'
            size='medium'
            onClick={this.newToSyncModal}
            text={locale.iAmNewToSync}
          />
        </div>
        <div>
          <ButtonSecondary
            color='brand'
            size='medium'
            onClick={this.existingSyncCodeModal}
            text={locale.iHaveAnExistingSyncCode}
          />
        </div>
      </div>
    )
  }
}

export default SyncDisabledContent
