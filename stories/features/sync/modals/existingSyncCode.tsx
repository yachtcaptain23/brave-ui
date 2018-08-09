/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import ButtonPrimary from '../../../../src/components/buttonsIndicators/buttonPrimary'
import Input from '../../../../src/components/formControls/input'
import Modal from '../../../../src/components/popupModals/modal'
import TextArea from '../../../../src/components/formControls/textarea'

// Utils
import theme from '../page/theme'
import locale from '../page/fakeLocale'

interface ExistingSyncCodeModalProps {
  onClose: () => void
}

class ExistingSyncCodeModal extends React.PureComponent<ExistingSyncCodeModalProps, {}> {
  get fakeDeviceName () {
    return 'Your favorite coding OS'
  }

  setUpSync = () => {
    console.log('fake: setting up sync')
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal
        id='showIAmExistingSyncCodeModal'
        outsideClose={true}
        onClose={onClose}
        theme={theme.modal}
      >
        <Heading level={1} theme={theme.modalTitle} text={locale.iHaveAnExistingSyncCode} />
        <TextArea theme={theme.input} title={locale.enterYourSyncCodeWords} />
        <Input
          theme={theme.input}
          title={locale.enterAnOptionalNameForThisDevice}
          placeholder={this.fakeDeviceName}
        />
        <footer style={theme.modalButtonsContainer}>
          <ButtonPrimary
            color='brand'
            size='medium'
            onClick={this.setUpSync}
            text={locale.setUpSync}
          />
        </footer>
      </Modal>
    )
  }
}

export default ExistingSyncCodeModal
