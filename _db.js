const games = [
  {id: '1', title: 'Game one', platform: ['PC', 'PS']},
  {id: '2', title: 'Game two', platform: ['PC2', 'PS2']},
  {id: '3', title: 'Game three', platform: ['PC3', 'PS3']},
  {id: '4', title: 'Game four', platform: ['PC4', 'PS4']},
  {id: '5', title: 'Game five', platform: ['PC5', 'FIFA EA 25']},
]

const authors = [
  {id: '1', name: 'Author one', verified: true},
  {id: '2', name: 'Author two', verified: false},
  {id: '3', name: 'Author three', verified: true},
]

const reviews = [
  {id: '1', rating: 5, content: 'Great game!', author_id: '1', game_id: '2'},
  {id: '2', rating: 4, content: 'Good game!', author_id: '2', game_id: '1'},
  {id: '3', rating: 6, content: 'Average game!', author_id: '3', game_id: '3'},
  {id: '4', rating: 3, content: 'Not so good!', author_id: '2', game_id: '4'},
  {id: '5', rating: 8, content: 'Bad game!', author_id: '2', game_id: '5'},
   {id: '6', rating: 10, content: 'Not so good and bad!', author_id: '3', game_id: '2'},
  {id: '7', rating: 7, content: 'Bad game or not so good!', author_id: '3', game_id: '1'},
]

export default { games , authors, reviews }