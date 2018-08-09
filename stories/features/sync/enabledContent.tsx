/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../src/components/text/heading'
import Card from '../../../src/components/layout/card'
import Toggle from '../../../src/components/formControls/toggle'
import ButtonPrimary from '../../../src/components/buttonsIndicators/buttonPrimary'
import Table, { Cell, Row } from '../../../src/components/dataTables/table'

// Modals
import SyncANewDeviceModal from './modals/syncNewDevice'
import ResetSyncModal from './modals/resetSync'

// Utils
import theme from './page/theme'
import locale from './page/fakeLocale'

interface SyncEnabledContentState {
  syncANewDeviceModal: boolean
  resetSyncModal: boolean
  resetSyncAreYouSureModal: boolean
}

class SyncEnabledContent extends React.PureComponent<{}, SyncEnabledContentState> {
  constructor (props: {}) {
    super(props)
    this.state = {
      syncANewDeviceModal: false,
      resetSyncModal: false,
      resetSyncAreYouSureModal: false
    }
  }

  get rows (): Row[] {
    return [
      {
        content: [
          { content: 1, theme: { textAlign: 'center' } },
          { content: 'MacOS without the ESC key' },
          { content: '6/12/2018, 12:10:16 PM' }
        ]
      },
      {
        content: [
          { content: 2, theme: { textAlign: 'center' } },
          { content: 'Windowz machineh' },
          { content: '8/1/2018, 7:12:32 PM' }
        ]
      }
    ]
  }

  get header (): Cell[] {
    return [
      { content: locale.id, theme: { width: '60px', textAlign: 'center' } },
      { content: locale.deviceName },
      { content: locale.lastActive }
    ]
  }

  syncANewDevice = () => {
    this.setState({ syncANewDeviceModal: !this.state.syncANewDeviceModal })
  }

  resetSync = () => {
    this.setState({ resetSyncModal: !this.state.resetSyncModal })
  }

  resetSyncAreYouSure = () => {
    this.setState({ resetSyncAreYouSureModal: !this.state.resetSyncAreYouSureModal })
  }

  render () {
    return (
      <>
        {
          this.state.syncANewDeviceModal
            ? <SyncANewDeviceModal onClose={this.syncANewDevice} />
            : null
        }
        {
          this.state.resetSyncModal
            ? <ResetSyncModal onClose={this.resetSync} />
            : null
        }
        <Card>
          <div style={theme.cardGrid}>
            <div style={theme.centeredColumnNoBreak}>
              <Toggle id='syncThisDevice' size='large' checked={false} />
              <label
                style={theme.syncDefaultLabel}
                htmlFor='syncThisDevice'
              >
                {locale.syncThisDevice}
              </label>
            </div>
            <div style={theme.centeredColumnBreak}>
              <Heading level={3} text={locale.deviceName} />
              <span style={theme.syncDefaultText}>MacOS without the ESC key</span>
            </div>
          </div>
        </Card>
        <section id='devicesList' style={theme.sectionBlock}>
          <Heading level={2} text={locale.devices} />
          <Table header={this.header} rows={this.rows}>
            Tables for the table throne
          </Table>
          <div id='actions'>
            <ButtonPrimary
              size='medium'
              color='brand'
              text={locale.syncANewDevice}
              onClick={this.syncANewDevice}
            />
          </div>
        </section>
        <section id='syncData' style={theme.sectionBlock}>
          <Heading level={2} text={locale.syncData} />
          <div style={theme.syncDataSwitchGroup}>
            <Toggle id='bookmarks' checked={false} />
            <label
              style={theme.syncDataSwitchLabel}
              htmlFor='bookmarks'
            >
              {locale.bookmarks}
            </label>
            <Toggle id='savedSiteSettings' checked={false} />
            <label
              style={theme.syncDataSwitchLabel}
              htmlFor='savedSiteSettings'
            >
              {locale.savedSiteSettings}
            </label>
            <Toggle id='browsingHistory' checked={false} />
            <label
              style={theme.syncDataSwitchLabel}
              htmlFor='browsingHistory'
            >
              {locale.browsingHistory}
            </label>
          </div>
        </section>
        <section id='clearData' style={theme.sectionBlock}>
          <Heading level={2} text={locale.clearData} />
          <ButtonPrimary
            size='medium'
            color='brand'
            text={locale.resetSync}
            onClick={this.resetSync}
          />
        </section>
      </>
    )
  }
}

export default SyncEnabledContent
