/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const theme = {
  syncPage: {
    fontFamily: '"Poppins", sans-serif',
    maxWidth: '840px',
    padding: '40px',
    margin: 'auto'
  },
  syncInfo: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    margin: '20px 0 10px'
  },
  syncInfoGray: {
    margin: '0',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    color: 'rgb(153, 153, 157)'
  },
  syncInfoLink: {
    color: '#ff0000',
    fontWeight: 'bold',
    margin: '0 10px',
    textDecoration: 'none'
  },
  syncInfoTooltipWrapper: {
    margin: '0 0 20px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    maxWidth: '100%',
    margin: '0 0 10px'
  },
  modalSmall: {
    maxWidth: '420px'
  },
  modal: {
    maxWidth: '620px'
  },
  modalTitle: {
    margin: '0 0 20px'
  },
  modalList: {
    fontFamily: 'Muli',
    fontSize: '16px',
    fontWeight: '300',
    lineHeight: '1.63',
    color: '#686978',
    margin: '20px 0',
    padding: '0 0 0 20px'
  },
  modalListBullet: {
    margin: '0 0 10px'
  },
  modalListButtonWrapper: {
    margin: '10px 0'
  },
  modalButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalButtonsContainerGrid: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: '3fr 1fr',
    gridTemplateRows: '1fr',
    gridGap: '15px 1px'
  },
  modalButtonsContainerGridColumn: {
    textAlign: 'right'
  },
  // Disabled content
  buttonGrid: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr',
    gridGap: '15px'
  },
  // Enabled content
  cardGrid: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr'
  },
  sectionBlock: {
    margin: '10px 0 40px'
  },
  centeredColumnNoBreak: {
    display: 'flex',
    alignItems: 'center'
  },
  centeredColumnBreak: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  syncDefaultLabel: {
    padding: '0 10px',
    margin: '0',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    color: '#a4aeb8'
  },
  syncDefaultText: {
    fontFamily: 'Muli',
    fontSize: '14px',
    lineHeight: '1.29',
    letterSpacing: 'normal'
  },
  syncDataSwitchGroup: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridGap: '10px',
    margin: '10px 5px 0'
  },
  syncDataSwitchLabel: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Muli',
    fontSize: '14px',
    lineHeight: '1.29',
    letterSpacing: 'normal'
  },
  // sync a new device modal
  qrCode: {
    width: '180px',
    height: '180px',
    margin: '10px 20px'
  },
  passphraseTextarea: {
    maxWidth: '100%',
    minHeight: '115px'
  },
  modalTextareaWrapper: {
    marginTop: '15px'
  }
} as any

export default theme
