const games = [
  {
    price: 99.99,
    id: 452638,
    name: 'Stray',
    background_image:
      'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4'],
    categories: [
      'Adventure',
      'Action',
      'Puzzle',
      'Simulation',
      'Indie',
      'Platformer',
    ],
    released: '2022-07-19',
    esrb: 'Everyone 10+',
  },
  {
    price: 99.99,
    id: 685577,
    name: 'Vampire Survivors',
    background_image:
      'https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg',
    platforms: ['PC'],
    categories: ['Casual', 'Indie', 'Action', 'RPG'],
    released: '2022-10-20',
    esrb: null,
  },
  {
    price: 99.99,
    id: 791638,
    name: 'MultiVersus',
    background_image:
      'https://media.rawg.io/media/games/d2e/d2ee15fda80056efef174da4ca5ae54f.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Action', 'Fighting'],
    released: '2022-07-26',
    esrb: null,
  },
  {
    price: 99.99,
    id: 570074,
    name: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
    background_image:
      'https://media.rawg.io/media/games/aac/aac683272f862540a18625f02f5f3679.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox Series S/X',
      'Nintendo Switch',
      'Linux',
    ],
    categories: ['Casual', 'Indie', 'Adventure', 'Action'],
    released: '2022-06-16',
    esrb: null,
  },
  {
    price: 99.99,
    id: 303576,
    name: 'Vampire: The Masquerade - Bloodlines 2',
    background_image:
      'https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Action', 'RPG'],
    released: '2022-12-31',
    esrb: null,
  },
  {
    price: 99.99,
    id: 10069,
    name: 'Mount & Blade II: Bannerlord',
    background_image:
      'https://media.rawg.io/media/games/d8d/d8d8f7e64a2fd36f9a414514005cd37a.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Strategy', 'Action', 'RPG', 'Simulation'],
    released: '2022-10-25',
    esrb: null,
  },
  {
    price: 99.99,
    id: 391397,
    name: 'Grounded',
    background_image:
      'https://media.rawg.io/media/games/0d7/0d7b7a687bf665b61337904193c56855.jpg',
    platforms: ['PC', 'Xbox One', 'Xbox Series S/X'],
    categories: ['Indie', 'Adventure'],
    released: '2022-09-27',
    esrb: 'Teen',
  },
  {
    price: 99.99,
    id: 616697,
    name: 'A Plague Tale: Requiem',
    background_image:
      'https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
    ],
    categories: ['Adventure', 'Action'],
    released: '2022-10-17',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 388308,
    name: 'Overwatch 2',
    background_image:
      'https://media.rawg.io/media/games/95a/95a10817d1fc648cff1153f3fa8ef6c5.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
    ],
    categories: ['Shooter', 'Action'],
    released: '2022-10-04',
    esrb: 'Teen',
  },
  {
    price: 99.99,
    id: 545033,
    name: 'Resident Evil Re:Verse',
    background_image:
      'https://media.rawg.io/media/games/d8d/d8dd3610968f15a78816494ecef9c562.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Shooter', 'Action'],
    released: '2022-10-28',
    esrb: 'Adults Only',
  },
  {
    price: 99.99,
    id: 650605,
    name: 'Cult of the Lamb',
    background_image:
      'https://media.rawg.io/media/games/ab8/ab8217a1fe2ced388a388722734e6d16.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
      'macOS',
    ],
    categories: ['Indie', 'Strategy', 'Adventure', 'Action'],
    released: '2022-08-11',
    esrb: null,
  },
  {
    price: 99.99,
    id: 46220,
    name: 'Scorn',
    background_image:
      'https://media.rawg.io/media/games/f8c/f8cc3b4834259f8a812ce77804bc12ed.jpg',
    platforms: ['PC', 'Xbox Series S/X'],
    categories: ['Indie', 'Adventure', 'Action'],
    released: '2022-10-14',
    esrb: null,
  },
  {
    price: 99.99,
    id: 754888,
    name: 'The Quarry',
    background_image:
      'https://media.rawg.io/media/games/f40/f407a80be4c604d013e4b9d1e0c6dbef.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Adventure', 'Action'],
    released: '2022-06-09',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 494384,
    name: 'God of War: Ragnarök',
    background_image:
      'https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg',
    platforms: ['PlayStation 5', 'PlayStation 4'],
    categories: ['Action'],
    released: '2022-11-09',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 454544,
    name: 'Metal: Hellsinger',
    background_image:
      'https://media.rawg.io/media/games/34e/34eb79862b32835924d999d575e08202.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Shooter', 'Adventure', 'Action'],
    released: '2022-09-15',
    esrb: null,
  },
  {
    price: 99.99,
    id: 791636,
    name: 'Call of Duty: Modern Warfare II',
    background_image:
      'https://media.rawg.io/media/games/1af/1af8edc7491c6d9d0776fc423d93548d.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Shooter', 'Action'],
    released: '2022-10-27',
    esrb: null,
  },
  {
    price: 99.99,
    id: 558980,
    name: 'Neon White',
    background_image:
      'https://media.rawg.io/media/games/a12/a120fc7faed7666f8c320a755137e316.jpg',
    platforms: ['PC', 'Nintendo Switch'],
    categories: ['Indie', 'Shooter', 'Adventure', 'Action'],
    released: '2022-06-16',
    esrb: 'Teen',
  },
  {
    price: 99.99,
    id: 15272,
    name: 'System Shock (Remake)',
    background_image:
      'https://media.rawg.io/media/games/e98/e98c259aeac26d1ef5c1affc670eec83.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Linux',
    ],
    categories: ['Shooter', 'Adventure', 'Action'],
    released: '2022-12-31',
    esrb: null,
  },
  {
    price: 99.99,
    id: 471031,
    name: 'As Dusk Falls',
    background_image:
      'https://media.rawg.io/media/games/0eb/0eb6673637d877b09a9a1f9aa6e25db4.jpg',
    platforms: ['PC', 'Xbox Series S/X'],
    categories: ['Adventure'],
    released: '2022-07-19',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 529698,
    name: 'The Callisto Protocol',
    background_image:
      'https://media.rawg.io/media/games/d16/d163e28ce9c5c17d36ad2a518015f2cf.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Adventure'],
    released: '2022-12-02',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 268363,
    name: 'Prodeus',
    background_image:
      'https://media.rawg.io/media/games/f7a/f7a0b6c68b86058de31414ebf1355acf.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
      'macOS',
      'Linux',
    ],
    categories: ['Indie', 'Adventure', 'Action'],
    released: '2022-09-23',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 856178,
    name: 'Call of Duty: Modern Warfare II - Open Beta',
    background_image:
      'https://media.rawg.io/media/screenshots/ae0/ae0bb3c16d0660acb18b197d5856baf8.jpg',
    platforms: ['PC'],
    categories: ['Action'],
    released: '2022-09-24',
    esrb: 'Adults Only',
  },
  {
    price: 99.99,
    id: 490430,
    name: 'Prince of Persia: The Sands of Time Remake',
    background_image:
      'https://media.rawg.io/media/games/b92/b92b55aeab9ed1777104f71f4b22a613.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
    ],
    categories: ['Platformer', 'Adventure', 'Action', 'Puzzle'],
    released: '2022-12-31',
    esrb: 'Teen',
  },
  {
    price: 99.99,
    id: 332787,
    name: 'Somerville',
    background_image:
      'https://media.rawg.io/media/games/4fa/4fa26d7d2a9bd1deed199291668690a3.jpg',
    platforms: ['PC', 'Xbox One', 'Xbox Series S/X'],
    categories: ['Adventure', 'Action'],
    released: '2022-11-15',
    esrb: null,
  },
  {
    price: 99.99,
    id: 481908,
    name: 'Gotham Knights',
    background_image:
      'https://media.rawg.io/media/games/067/067480b8c161115c90e60fd120b1570e.jpg',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series S/X'],
    categories: ['Adventure', 'Action', 'RPG'],
    released: '2022-10-21',
    esrb: 'Rating Pending',
  },
  {
    price: 99.99,
    id: 627521,
    name: 'Undecember',
    background_image:
      'https://media.rawg.io/media/screenshots/8d4/8d415666ba185218e7d9d72b6c431856.jpg',
    platforms: ['PC'],
    categories: ['Action', 'RPG'],
    released: '2022-10-11',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 614967,
    name: 'Two Point Campus',
    background_image:
      'https://media.rawg.io/media/games/bde/bdedc180d7e2bca40fd105980d74b452.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
      'macOS',
      'Linux',
    ],
    categories: ['Strategy', 'Indie', 'Simulation'],
    released: '2022-08-09',
    esrb: 'Teen',
  },
  {
    price: 99.99,
    id: 499258,
    name: 'Midnight Fight Express',
    background_image:
      'https://media.rawg.io/media/games/cd2/cd28a066e3a8d602e1ebbff8111fd10a.jpg',
    platforms: [
      'PC',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
    ],
    categories: ['Indie', 'Action'],
    released: '2022-08-23',
    esrb: null,
  },
  {
    price: 99.99,
    id: 440082,
    name: 'Second Extinction',
    background_image:
      'https://media.rawg.io/media/games/17b/17bcf0d95af7f341adbfa5eaab2841a5.jpg',
    platforms: ['PC', 'Xbox One', 'Xbox Series S/X'],
    categories: ['Action'],
    released: '2022-10-20',
    esrb: null,
  },
  {
    price: 99.99,
    id: 846499,
    name: 'Shatterline',
    background_image:
      'https://media.rawg.io/media/games/def/def62dcd2d1751dc4dd38d662919a6f9.jpg',
    platforms: ['PC'],
    categories: ['Massively Multiplayer', 'Action'],
    released: '2022-09-08',
    esrb: null,
  },
  {
    price: 99.99,
    id: 868085,
    name: 'Marvel Snap',
    background_image:
      'https://media.rawg.io/media/games/1f7/1f73ddf4231f9296d73358ddd5d54e29.jpg',
    platforms: ['PC'],
    categories: ['Casual', 'Card', 'Strategy'],
    released: '2022-10-18',
    esrb: 'Everyone 10+',
  },
  {
    price: 99.99,
    id: 799323,
    name: '20 Minutes Till Dawn',
    background_image:
      'https://media.rawg.io/media/screenshots/648/648c01a5606ab1225c1db250544b0f82.jpg',
    platforms: ['PC'],
    categories: ['Adventure', 'Action', 'Casual', 'Strategy', 'Indie'],
    released: '2022-06-07',
    esrb: null,
  },
  {
    price: 99.99,
    id: 802000,
    name: 'Immortality',
    background_image:
      'https://media.rawg.io/media/games/7df/7df4efb7075152f421edbf651f3a9c0c.jpg',
    platforms: ['PC', 'Xbox Series S/X', 'macOS'],
    categories: ['Adventure'],
    released: '2022-08-29',
    esrb: null,
  },
  {
    price: 99.99,
    id: 424978,
    name: 'Signalis',
    background_image:
      'https://media.rawg.io/media/games/480/480295ba922318bb052d169174ec88aa.jpg',
    platforms: [
      'PC',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
    ],
    categories: ['Indie', 'Adventure', 'Action'],
    released: '2022-10-27',
    esrb: null,
  },
  {
    price: 99.99,
    id: 762618,
    name: 'Return to Monkey Island',
    background_image:
      'https://media.rawg.io/media/games/db8/db86188577f4b61dfd2a960e18f660a5.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox Series S/X',
      'Nintendo Switch',
      'macOS',
      'Linux',
    ],
    categories: ['Casual', 'Adventure'],
    released: '2022-09-19',
    esrb: null,
  },
  {
    price: 99.99,
    id: 50737,
    name: 'Bayonetta 3',
    background_image:
      'https://media.rawg.io/media/games/c30/c30ac50cb13096f5402250bf666a321c.jpg',
    platforms: ['Nintendo Switch'],
    categories: ['Action'],
    released: '2022-10-28',
    esrb: null,
  },
  {
    price: 99.99,
    id: 833441,
    name: 'Tower of Fantasy',
    background_image:
      'https://media.rawg.io/media/games/e35/e35b2e3c8e62e27152cc56cd56307497.jpg',
    platforms: ['PC'],
    categories: ['Massively Multiplayer', 'Adventure', 'Action', 'RPG'],
    released: '2022-08-09',
    esrb: 'Teen',
  },
  {
    price: 99.99,
    id: 801567,
    name: 'Pentiment',
    background_image:
      'https://media.rawg.io/media/games/f1d/f1d25c007b9b45c98b57ff9ebbca9692.jpg',
    platforms: ['PC', 'Xbox One', 'Xbox Series S/X'],
    categories: ['Casual', 'Adventure'],
    released: '2022-11-14',
    esrb: 'Mature',
  },
  {
    price: 99.99,
    id: 471029,
    name: 'Warhammer 40,000: Darktide',
    background_image:
      'https://media.rawg.io/media/games/63e/63ee51f2fc8c78ff3a4fa8f60d5898b4.jpg',
    platforms: ['PC', 'Xbox Series S/X'],
    categories: ['Shooter', 'Action'],
    released: '2022-11-30',
    esrb: null,
  },
  {
    price: 99.99,
    id: 619533,
    name: 'Tinykin',
    background_image:
      'https://media.rawg.io/media/games/2a3/2a35da986abc10082c27c3d230ccf1e1.jpg',
    platforms: [
      'PC',
      'PlayStation 5',
      'Xbox One',
      'PlayStation 4',
      'Xbox Series S/X',
      'Nintendo Switch',
    ],
    categories: ['Adventure', 'Action'],
    released: '2022-08-29',
    esrb: null,
  },
]
console.log(games.length)
