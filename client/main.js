import socketIo from 'socket.io-client'
import Bowser from 'bowser'

import {
  state,
  createElement,
  handlePlayer,
  handleEntities,
  adjustCameraSize,
  control,
  emitToken,
  initializeCity,
  renderUnsupported,
  renderLoading
} from '.'

const socket = socketIo()
const {camera} = state
const bowser = Bowser.parse(window.navigator.userAgent)
const {browser, platform} = bowser
const isSupported = browser.name === 'Chrome' && platform.type === 'desktop'

if (!isSupported) renderUnsupported()
if (!isSupported) throw new Error('Unsupported browser')

renderLoading()
state.socket = socket
window.addEventListener('resize', adjustCameraSize.bind({state}), false)
window.addEventListener('keydown', control.bind({state, isDown: true}))
window.addEventListener('keyup', control.bind({state}))
socket.on('request_token', emitToken.bind({state, socket}))
socket.on('city', initializeCity.bind({state}))
socket.on('player', handlePlayer.bind({state}))
socket.on('entity', createElement.bind({state}))
socket.on('entities', handleEntities.bind({state}))
createElement.call({state}, camera)
adjustCameraSize.call({state})
