/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import ButtonPrimary from '../../../../src/components/buttonsIndicators/buttonPrimary'
import Modal from '../../../../src/components/popupModals/modal'
import ButtonSecondary from '../../../../src/components/buttonsIndicators/buttonSecondary'

// Assets
import theme from '../page/theme'
import locale from '../page/fakeLocale'

interface ResetSyncModalProps {
  onClose: () => void
}

interface ResetSyncModalState {
  showAreYouSureAlert: boolean
}

class ResetSyncModal extends React.PureComponent<ResetSyncModalProps, ResetSyncModalState> {
  constructor (props: ResetSyncModalProps) {
    super(props)
    this.state = { showAreYouSureAlert: false }
  }

  areYouSureAlert = () => {
    if (window.confirm(locale.areYouSure)) {
      this.props.onClose()
      // fire sync reset
    }
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal
        id='showIAmResetSyncModal'
        outsideClose={true}
        onClose={onClose}
        theme={theme.modal}
      >
        <Heading level={1} theme={theme.modalTitle} text={locale.resetSync} />
        <ul style={theme.modalList}>
          <li style={theme.modalListBullet}>{locale.resetSyncFirstBullet}</li>
          <li style={theme.modalListBullet}>{locale.resetSyncSecondBullet}</li>
          <li style={theme.modalListBullet}>{locale.resetSyncThirdBullet}</li>
        </ul>
        <footer style={theme.modalButtonsContainerGrid}>
          <div style={theme.modalButtonsContainerGridColumn}>
            <ButtonSecondary
              color='brand'
              size='medium'
              onClick={onClose}
              text={locale.cancel}
            />
          </div>
          <div style={theme.modalButtonsContainerGridColumn}>
            <ButtonPrimary
              color='brand'
              size='medium'
              onClick={this.areYouSureAlert}
              text={locale.resetSync}
            />
          </div>
        </footer>
      </Modal>
    )
  }
}

export default ResetSyncModal
