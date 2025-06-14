// Playing Cards

// For this question, we ask you to design a card game using the traditional 52-card deck.
// We divide this question into three parts, so you can complete them in order.

// Part One

// For the first part, you must design a Game class representing the game, and these following
// functions associated with the class.

//     add_card(suit, value): Creates a new card object with a suit from one of the following
//      strings: Hearts, Spades, Clubs, Diamonds, and a value from one of the following strings:
//        A, 2~10, J, Q, K. This card is represented by i, where i is an integer indicating how
//        many cards have been created before.

//     card_string(card): Returns the string representation of the card represented by i.
//        It follows the format <value> of <suit>. For example, a card created by
//        add_card("Spades", "3") should have a string representation of 3 of Spades.

//     card_beats(card_a, card_b): Check if the card represented by card_a beats the one
//        represented by card_b. A card beats another card if and only if it has a greater value.
//        The value of the cards are ordered from A to K.

// You may implement these however you like. However, preferably this should be easily
//    expandable to accommodate new requirements.

class Card {
  constructor(suit, value, idx) {
    this.suit = suit;
    this.value = value;
    this.idx = idx;
  }

  getName() {
    return `${this.value} of ${this.suit}`;
  }

  getIdx() {
    return this.idx;
  }
}

class Joker extends Card {
  constructor(color, idx) {
    super(SUITS.joker, "", idx);
    this.color = color;
  }

  getName() {
    return `${this.color} Joker`;
  }
}

const convertValToInt = (val, isJoker = false) => {
  if (isJoker) {
    return 100;
  }

  if (val === "A") return 1;
  else if (val === "J") return 11;
  else if (val === "Q") return 12;
  else if (val === "K") return 13;
  else return parseInt(val);
};

const SUITS = {
  spades: "Spades",
  diamonds: "Diamonds",
  hearts: "Hearts",
  clubs: "Clubs",
  joker: "Joker",
};

const SPECIAL_VALS = {
  king: "K",
  queen: "Q",
  jack: "J",
  ace: "A",
};

const JOKER_COLORS = {
  red: "Red",
  black: "Black",
};

class Hand {
  constructor(card_indices, idx) {
    this.card_indices = card_indices;
    this.idx = idx;
  }
}

class Game {
  constructor() {
    this.cards = [];
    this.hands = [];
  }

  add_card(suit, value) {
    const curIdx = this.cards.length;

    let card;

    if (suit === SUITS.joker) {
      card = new Joker(value, curIdx);
    } else {
      card = new Card(suit, value, curIdx);
    }
    this.cards.push(card);
    return card;
  }

  card_string(card) {
    const cardObj = this.cards[card];
    return cardObj.getName();
  }

  card_beats(card_a, card_b) {
    const valA = convertValToInt(card_a.value, card_a instanceof Joker);
    const valB = convertValToInt(card_b.value, card_b instanceof Joker);

    return valA > valB;
  }

  add_joker(color) {
    return this.add_card(SUITS.joker, color);
  }

  add_hand(card_indices) {
    for (const idx of card_indices) {
      if (idx >= this.cards.length) {
        throw new Error("Invalid card index");
      }
    }
    const currIdx = this.hands.length;
    const hand = new Hand(card_indices, currIdx);
    this.hands.push(hand);
    return hand;
  }

  hand_string(hand) {
    const nameArr = [];
    for (const cardIdx of hand.card_indices) {
      const card = this.cards[cardIdx];
      nameArr.push(card.getName());
    }
    return nameArr.join(", ");
  }

  beats_hand(hand_a, hand_b) {
    const sortedA = this.sort_cards(hand_a.card_indices);
    const sortedB = this.sort_cards(hand_b.card_indices);

    for (let i = 0; i < sortedA.length; i++) {
      if (!sortedA[i]) {
        return hand_b;
      }
      if (!sortedB[i]) {
        return hand_a;
      }

      const cardA = this.cards[sortedA[i]];
      const cardB = this.cards[sortedB[i]];

      if (this.card_beats(cardA, cardB)) {
        return hand_a;
      } else if (this.card_beats(cardB, cardA)) {
        return hand_b;
      }
    }

    return "equal";
  }

  sort_cards(card_indices) {
    return card_indices.sort((a, b) => {
      const cardA = this.cards[a];
      const cardB = this.cards[b];

      return this.card_beats(cardB, cardA) ? 1 : -1;
    });
  }
}

const g = new Game();

const a = g.add_card(SUITS.spades, 5);
const b = g.add_card(SUITS.diamonds, SPECIAL_VALS.king);
const c = g.add_card(SUITS.clubs, 5);
const d = g.add_card(SUITS.hearts, SPECIAL_VALS.jack);
const e = g.add_card(SUITS.hearts, 9);

console.log(g.card_beats(a, b));
console.log(a.getName());

const j1 = g.add_joker(JOKER_COLORS.red);
const j2 = g.add_joker(JOKER_COLORS.black);

console.log(g.card_beats(j1, j2));
console.log(j1.getName());

const hand1 = g.add_hand([0, 1, 6]);
console.log(g.hand_string(hand1));

const hand2 = g.add_hand([2, 3, 5]);
console.log(g.hand_string(hand2));

console.log(g.beats_hand(hand1, hand2));
