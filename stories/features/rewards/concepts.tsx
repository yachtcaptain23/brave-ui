/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { withState } from '@dump247/storybook-state'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, object, number } from '@storybook/addon-knobs'

// Components
import Settings from './settings/settings'
import { SiteBanner, Tip } from '../../../src/features/rewards'
import WelcomePage from '../../../src/features/rewards/welcomePage'

const siteBgImage = require('../../assets/img/bg_siteBanner.jpg')
const siteBgLogo = require('../../assets/img/ddgo_siteBanner.svg')
const siteScreen = require('../../assets/img/ddgo_site.png')
const tipScreen = require('../../assets/img/tip_site.jpg')

const donationAmounts = [
  { tokens: 1, converted: 0.3, selected: false },
  { tokens: 5, converted: 1.5, selected: false },
  { tokens: 10, converted: 3, selected: false }
]

const dummyOptInAction = () => {
  console.log(dummyOptInAction)
}

storiesOf('Feature Components/Rewards/Concepts', module)
  .addDecorator(withKnobs)
  .add('Settings Page', () => <Settings />)
  .add('Welcome Page', () => (
    <WelcomePage
      id={'welcome-page'}
      optInAction={dummyOptInAction}
    />
  ))
  .add('Site Banner', withState({ donationAmounts, currentAmount: 5, showBanner: true }, (store) => {
    const onDonate = () => {
      console.log('onDonate')
    }

    const onAmountSelection = (tokens: number) => {
      store.set({ currentAmount: tokens })
    }

    const showBanner = () => {
      store.set({ showBanner: true })
    }

    const onClose = () => {
      store.set({ showBanner: false })
    }

    return (
      <div style={{ background: `url(${siteScreen}) no-repeat top center / cover`, width: '100%', height: '100vh' }}>
        <button onClick={showBanner}>Show banner</button>
        {
          store.state.showBanner
          ? <SiteBanner
            domain={text('Domain', 'duckduckgo.com')}
            title={text('Title', '')}
            currentDonation={number('Current recurring donation', 0)}
            balance={number('Balance ', 5)}
            bgImage={boolean('Show bg image', false) ? siteBgImage : null}
            logo={boolean('Show logo', false) ? siteBgLogo : null}
            donationAmounts={object('Donations', store.state.donationAmounts)}
            logoBgColor={text('Logo bg color', '')}
            onDonate={onDonate}
            onAmountSelection={onAmountSelection}
            currentAmount={store.state.currentAmount}
            onClose={onClose}
            social={[
              {
                type: 'twitter',
                name: '@DuckDuckGo',
                handler: 'DuckDuckGo'
              },
              {
                type: 'youtube',
                name: 'duckduckgo',
                handler: 'UCm_TyecHNHucwF_p4XpeFkQ'
              },
              {
                type: 'twitch',
                name: 'duckDuckGo',
                handler: 'duckduckgo'
              }
            ]}
          />
          : null
        }

      </div>
    )
  }))
    .add('Tip', withState({ donationAmounts, currentAmount: 5, allow: false }, (store) => {
      const onDonate = () => {
        console.log('onDonate')
      }

      const onClose = () => {
        console.log('onClose')
      }

      const onAllow = (allow: boolean) => {
        store.set({ allow })
      }

      const onAmountSelection = (tokens: number) => {
        store.set({ currentAmount: tokens })
      }

      return (
        <div style={{ background: `url(${tipScreen}) no-repeat top center`, width: '986px', height: '912px', margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '185px', left: '330px' }}>
          <Tip
            donationAmounts={object('Donations', store.state.donationAmounts)}
            title={text('Title', 'Bart Baker')}
            allow={boolean('Allow tips', store.state.allow)}
            provider={text('Provider', 'YouTube')}
            balance={5}
            onDonate={onDonate}
            onClose={onClose}
            onAllow={onAllow}
            onAmountSelection={onAmountSelection}
            currentAmount={store.state.currentAmount}
          />
        </div>
      </div>
      )
    }))
