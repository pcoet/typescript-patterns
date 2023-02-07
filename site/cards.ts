// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const CARD_IDS = [
  'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK', 'CA',
  'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'DA',
  'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'HA',
  'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK', 'SA'
] as const;

type CardIdTuple = typeof CARD_IDS;
type CardId = CardIdTuple[number];
type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'| 'J' | 'Q' | 'K' | 'A';
type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades';
type SuitIcon =  '&clubs;' | '&diams;' | '&hearts;' | '&spades;';
type Card = { rank: Rank, suit: Suit };

const suitIconMap: Record<Suit, SuitIcon> = {
  clubs: '&clubs;',
  diamonds: '&diams;',
  hearts: '&hearts;',
  spades: '&spades;',
};

const deck: Record<CardId, Card> = {
  C2 : { rank: '2', suit: 'clubs' },
  C3 : { rank: '3', suit: 'clubs' },
  C4 : { rank: '4', suit: 'clubs' },
  C5 : { rank: '5', suit: 'clubs' },
  C6 : { rank: '6', suit: 'clubs' },
  C7 : { rank: '7', suit: 'clubs' },
  C8 : { rank: '8', suit: 'clubs' },
  C9 : { rank: '9', suit: 'clubs' },
  C10: { rank: '10', suit: 'clubs' },
  CJ : { rank: 'J', suit: 'clubs' },
  CQ : { rank: 'Q', suit: 'clubs' },
  CK : { rank: 'K', suit: 'clubs' },
  CA : { rank: 'A', suit: 'clubs' },
  D2 : { rank: '2', suit: 'diamonds' },
  D3 : { rank: '3', suit: 'diamonds' },
  D4 : { rank: '4', suit: 'diamonds' },
  D5 : { rank: '5', suit: 'diamonds' },
  D6 : { rank: '6', suit: 'diamonds' },
  D7 : { rank: '7', suit: 'diamonds' },
  D8 : { rank: '8', suit: 'diamonds' },
  D9 : { rank: '9', suit: 'diamonds' },
  D10: { rank: '10', suit: 'diamonds' },
  DJ : { rank: 'J', suit: 'diamonds' },
  DQ : { rank: 'Q', suit: 'diamonds' },
  DK : { rank: 'K', suit: 'diamonds' },
  DA : { rank: 'A', suit: 'diamonds' },
  H2 : { rank: '2', suit: 'hearts' },
  H3 : { rank: '3', suit: 'hearts' },
  H4 : { rank: '4', suit: 'hearts' },
  H5 : { rank: '5', suit: 'hearts' },
  H6 : { rank: '6', suit: 'hearts' },
  H7 : { rank: '7', suit: 'hearts' },
  H8 : { rank: '8', suit: 'hearts' },
  H9 : { rank: '9', suit: 'hearts' },
  H10 : { rank: '10', suit: 'hearts' },
  HJ : { rank: 'J', suit: 'hearts' },
  HQ : { rank: 'Q', suit: 'hearts' },
  HK : { rank: 'K', suit: 'hearts' },
  HA : { rank: 'A', suit: 'hearts' },
  S2 : { rank: '2', suit: 'spades' },
  S3 : { rank: '3', suit: 'spades' },
  S4 : { rank: '4', suit: 'spades' },
  S5 : { rank: '5', suit: 'spades' },
  S6 : { rank: '6', suit: 'spades' },
  S7 : { rank: '7', suit: 'spades' },
  S8 : { rank: '8', suit: 'spades' },
  S9 : { rank: '9', suit: 'spades' },
  S10: { rank: '10', suit: 'spades' },
  SJ : { rank: 'J', suit: 'spades' },
  SQ : { rank: 'Q', suit: 'spades' },
  SK : { rank: 'K', suit: 'spades' },
  SA : { rank: 'A', suit: 'spades' },
};

function showRank(cardId: CardId, card: HTMLDivElement): void {
  const div = document.createElement('div');
  div.innerHTML = `${deck[cardId].rank}`;
  card.append(div);
}

function showSuit(cardId: CardId, card: HTMLDivElement): void {
  const div = document.createElement('div');
  div.innerHTML = `${suitIconMap[deck[cardId].suit]}`;
  card.append(div);
}

function shuffle(cards: CardId[]): void {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

function deal(cardIds: CardId[]): void {
  const hand = document.querySelector('#hand');
  if (hand) {
    for (let i = 0; i < cardIds.length; i++) {
      const card = document.createElement('div');
      card.id = `card${i}`;
      card.setAttribute('class', `card ${deck[cardIds[i]].suit}`);
      showRank(cardIds[i], card);
      showSuit(cardIds[i], card);
      showRank(cardIds[i], card);
      hand.append(card);
    }
  }
}

const cards: CardId[] = [
  'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK', 'CA',
  'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'DA',
  'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'HA',
  'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK', 'SA'
];

shuffle(cards);
deal(cards.slice(0, 5));
