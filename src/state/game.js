import { proxy, useSnapshot } from 'valtio'

const state = proxy({
  count: 3
})

export const insertCoin = () => {
  if (state.count > 0) state.count--
}

export const applyWin = (coins) => {
  state.count += coins
}

export const useCoins = () => useSnapshot(state)
