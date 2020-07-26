import {createElement} from '.'

export const handleTokenRequested = function () {
  const {state} = this
  const {localStorage, socket} = state
  const token = localStorage.getItem('token')
  if (token) return socket.emit('token', token)
  socket.emit('no_token')
}

export const handlePlayer = function (player) {
  const {state} = this
  const {token} = player
  state.player = player
  localStorage.setItem('token', token)
}

export const handleEntities = function (entitiesByType) {
  const {state} = this
  const {socket, entitiesBuffer, entitiesByType: entitiesByType_} = state
  const {characters, vehicles} = entitiesByType
  const [mayor] = characters
  const {timestamp} = mayor
  socket.emit('timestamp', timestamp)
  entitiesBuffer.push(entitiesByType)
  if (entitiesByType_) return
  state.entitiesByType = entitiesByType
  characters.forEach(createElement.bind({state}))
  vehicles.forEach(createElement.bind({state}))
}
