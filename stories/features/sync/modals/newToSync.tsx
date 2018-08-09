/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import ButtonPrimary from '../../../../src/components/buttonsIndicators/buttonPrimary'
import Input from '../../../../src/components/formControls/input'
import Modal from '../../../../src/components/popupModals/modal'

// Utils
import locale from '../page/fakeLocale'
import theme from '../page/theme'

interface NewToSyncModalProps {
  onClose: () => void
}

class NewToSyncModal extends React.PureComponent<NewToSyncModalProps, {}> {
  get fakeDeviceName () {
    return 'Your favorite coding OS'
  }

  setupSync = () => {
    console.log('fale: setting up sync')
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal
        id='showIAmNewToSyncModal'
        outsideClose={true}
        onClose={onClose}
        theme={theme.modalSmall}
      >
        <Heading level={1} theme={theme.modalTitle} text={locale.iAmNewToSync} />
        <Input
          theme={theme.input}
          title={locale.enterAnOptionalName}
          placeholder={this.fakeDeviceName}
        />
        <footer style={theme.modalButtonsContainer}>
          <ButtonPrimary
            color='brand'
            size='medium'
            onClick={this.setupSync}
            text={locale.setUpSync}
          />
        </footer>
      </Modal>
    )
  }
}

export default NewToSyncModal
