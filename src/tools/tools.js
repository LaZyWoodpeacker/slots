import variants from '../constants/variants.json'

export const normalize = (num) => ~~(-(Math.PI / 4) * num * 100) / 100

export const subfromvector = (a, b) => [a.x - b[0], a.y - b[1], a.z - b[2]]

export const checkCombination = (set, variants) => {}

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return [...array]
}

export const getCombinationNumber = () => {
  const rnd = Math.random()
  switch (true) {
    case rnd <= 0.8:
      return 0
    case rnd <= 0.9:
      return 1
    case rnd <= 0.93:
      return 2
    case rnd <= 0.96:
      return 3
    case rnd <= 0.99:
      return 4
    case rnd <= 0.993:
      return 5
    case rnd <= 0.995:
      return 6
    default:
      return 7
  }
}

const getRandomFromArrayExclude = (set, exclude = []) => {
  const arr = exclude.length
    ? set.filter((e) => exclude.findIndex((n) => n === e) === -1)
    : set
  return arr[Math.floor(Math.random() * arr.length)]
}

const process = {
  selectall: ([loos1, loos2, win]) => {
    const looseChoice = getRandomFromArrayExclude(loos1)
    const looseChoiceSecond = getRandomFromArrayExclude(loos2, [looseChoice])
    const winChoice = getRandomFromArrayExclude(win)
    const readySet = [looseChoice, looseChoiceSecond, winChoice]
    return readySet
  },
  direct: ([loos1, loos2, win]) => [loos1[0], loos2[0], win[0]]
}

export const getRandomCombination = (num = 0) => {
  const variantNumber = num ? num - 1 : getCombinationNumber()
  const setCombine = variants.variants[variantNumber]
  return {
    ...setCombine,
    set: shuffle(process[setCombine.type](setCombine.combines))
  }
}
