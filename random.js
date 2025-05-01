const random = document.querySelector('#random')
// add click event listener

random.addEventListener('click', openRandom)

// figure out rest

const links = [
  'https://www.youtube.com/watch?v=v0cTTQKOHys',
  'https://sudoku.com/',
  'https://www.merriam-webster.com/word-of-the-day',
  'https://en.wikipedia.org/wiki/Randomness',
  'https://maze.toys/',
  'https://creativetechguy.com/plantersprogress',
  'https://www.youtube.com/watch?v=nubJjB95VdY',
  'random/wod.html',
]

function openRandom() {
  let randomIndex = Math.floor(Math.random() * links.length)
  // randomIndex = parseInt(randomIndex, 10)
  let link = links[randomIndex]
  window.open(link)
}
