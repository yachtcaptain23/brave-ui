/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import ButtonSecondary from '../../../../src/components/buttonsIndicators/buttonSecondary'
import Modal from '../../../../src/components/popupModals/modal'
import TextArea from '../../../../src/components/formControls/textarea'

// Utils
import theme from '../page/theme'
import locale from '../page/fakeLocale'

// Assets
const fakeQRCodeImage = require('../../../assets/img/fakeQRCodeImage.png')

interface SyncANewDeviceModalProps {
  onClose: () => void
}

interface SyncEnabledContentState {
  showQRCodeModal: boolean
  showCodeWordsModal: boolean
}

class SyncANewDeviceModal extends React.PureComponent<SyncANewDeviceModalProps, SyncEnabledContentState> {
  constructor (props: SyncANewDeviceModalProps) {
    super(props)
    this.state = {
      showQRCodeModal: false,
      showCodeWordsModal: false
    }
  }

  get fakeDeviceName () {
    return 'Your favorite coding OS'
  }

  get fakePassphrase () {
    return [
      'intercepting', 'novelising', 'audited', 'reheeling', 'bone', 'zag', 'cupping', 'gothic',
      'dicky', 'regulation', 'reheard', 'refinished', 'wrenching', 'reinduced', 'wimple', 'welfare'
    ].join(' ')
  }

  showQRCode = () => {
    this.setState({ showQRCodeModal: !this.state.showQRCodeModal })
  }

  showCodeWords = () => {
    this.setState({ showCodeWordsModal: !this.state.showCodeWordsModal })
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal
        id='showIAmSyncANewDeviceModal'
        outsideClose={true}
        onClose={onClose}
        theme={theme.modal}
      >
        <Heading level={1} theme={theme.modalTitle} text={locale.syncANewDevice} />
        <ol style={theme.modalList}>
          <li style={theme.modalListBullet}>{locale.syncANewDeviceFirstBulletText}</li>
          <li style={theme.modalListBullet}>
            <span>{locale.syncANewDeviceSecondBulletText}</span>
            <div style={theme.modalListButtonWrapper}>
              <ButtonSecondary
                color='brand'
                size='small'
                onClick={this.showQRCode}
                text={locale.showSecretQRCode}
              />
              {
                this.state.showQRCodeModal
                  ? <div><img style={theme.qrCode} src={fakeQRCodeImage} /></div>
                  : null
              }
            </div>
          </li>
          <li style={theme.modalListBullet}>
            <span>{locale.syncANewDeviceThirdBulletText}</span>
            <div style={theme.modalListButtonWrapper}>
              <ButtonSecondary
                color='brand'
                size='small'
                onClick={this.showCodeWords}
                text={locale.showSecretCodeWords}
              />
              <div style={theme.modalTextareaWrapper}>
                {
                  this.state.showCodeWordsModal
                    ? <div>
                        <TextArea
                          theme={theme.passphraseTextarea}
                          defaultValue={this.fakePassphrase}
                        />
                      </div>
                    : null
                }
              </div>
            </div>
          </li>
        </ol>
        <footer style={theme.modalButtonsContainer}>
          <ButtonSecondary
            color='brand'
            size='medium'
            onClick={onClose}
            text={locale.done}
          />
        </footer>
      </Modal>
    )
  }
}

export default SyncANewDeviceModal
