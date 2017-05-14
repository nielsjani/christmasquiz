import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'trm-love-letter',
  templateUrl: './love-letter.component.html'
})
export class LoveLetterComponent implements OnInit {

  private cardList: any[];
  deck: any[];
  burnCard: any;
  activePlayerIndex: number = 1;
  player1: any = {active: true, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden:false};
  player2: any = {active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden:false};
  player3: any = {active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden:false};
  player4: any = {active: false, alive: true, cards: [], playedCards: [], isProtectedByHandmaiden:false};
  private remainingCardsSummary: any[];
  menusToShow: string;
  guardCardTarget: any;
  priestCardTarget: any;
  lookingAtCardAsPriest: boolean= false;
  baronCardTarget: any;

  constructor() {}

  ngOnInit() {
    //16 cards
    this.cardList = [
      {name: "GUARD", score: 1, isTargeting:true},
      {name: "GUARD", score: 1, isTargeting:true},
      {name: "GUARD", score: 1, isTargeting:true},
      {name: "GUARD", score: 1, isTargeting:true},
      {name: "GUARD", score: 1, isTargeting:true},

      {name: "PRIEST", score: 2, isTargeting:true}, {name: "PRIEST", score: 2, isTargeting:true},
      {name: "BARON", score: 3, isTargeting:true}, {name: "BARON", score: 3, isTargeting:true},
      {name: "HANDMAIDEN", score: 4, isTargeting:false}, {name: "HANDMAIDEN", score: 4, isTargeting:false},
      {name: "PRINCE", score: 5, isTargeting:true}, {name: "PRINCE", score: 5, isTargeting:true},
      {name: "KING", score: 6, isTargeting:true},
      {name: "COUNTESS", score: 7, isTargeting:false},
      {name: "PRINCESS", score: 8, isTargeting:false}
    ];

    this.deck = this.shuffleArray(this.cardList);
    this.burnFirstCard();
    this.dealCards();
    this.dealCardToActivePlayer();
    this.createRemainingCardsSummary();
  }

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  private shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  private burnFirstCard() {
    this.burnCard = this.deck[0];
    this.removeFirstCardFromDeck();
  }

  private removeFirstCardFromDeck() {
    this.deck.splice(0, 1);
  }

  private dealCardToActivePlayer() {
    //TODO: check if still cards in deck, otherwise end game by comparing cards in hand
    this.giveTopCardTo(this["player" + this.activePlayerIndex]);
  }

  private dealCards() {
    this.giveTopCardTo(this.player1);
    this.giveTopCardTo(this.player2);
    this.giveTopCardTo(this.player3);
    this.giveTopCardTo(this.player4);
  }

  private giveTopCardTo(player: any) {
    player.cards.push(this.deck[0]);
    this.removeFirstCardFromDeck();
  }

  isActivePlayer(player) {
    return player.active;
  }

  getActivePlayer() {
    return this["player"+this.activePlayerIndex];
  }

  getCardHoverText(player, card) {
    if (this.isActivePlayer(player) || (this.lookingAtCardAsPriest && this[this.priestCardTarget] === player)) {
      return card.name + " (" + card.score + ")";
    }
    return "Cheater (-1)";
  }

  createRemainingCardsSummary() {
    let tempDeck = this.deck.slice();
    tempDeck.push(this.burnCard);
    tempDeck.push(...this.player1.cards);
    tempDeck.push(...this.player2.cards);
    tempDeck.push(...this.player3.cards);
    tempDeck.push(...this.player4.cards);

    let tempSummary = [];
    tempDeck.forEach(cardInDeck => {
      if (tempSummary.filter(summaryCard => summaryCard.name === cardInDeck.name).length === 0) {
        tempSummary.push({name: cardInDeck.name, score: cardInDeck.score, amount: 1});
      } else {
        tempSummary[tempSummary.indexOf(tempSummary.filter(summaryCard => summaryCard.name === cardInDeck.name)[0])].amount++;
      }
    });
    this.remainingCardsSummary = tempSummary.sort((card1, card2) => card1.score > card2.score ? -1 : 1);
  }

  playCard(player, card) {
    this.addCardToPlayedCards(player, card);
    this.createRemainingCardsSummary();
    if(card.name === "HANDMAIDEN"){
      this.performHandmaidenAction(player);
    } else {
      if(card.isTargeting && this.noPlayerTargetAvailable()){
        this.nextPlayer();
      } else {
        this.menusToShow = card.name;
      }
    }
  }

  private performHandmaidenAction(player) {
    this.performHandMaidenAction(player);
    this.nextPlayer();
  }

  private addCardToPlayedCards(player: any, card: any) {
    const index = player.cards.indexOf(card);
    if (!player.playedCards) {
      player.playedCards = [];
    }
    player.playedCards.push(...player.cards.splice(index, 1));
  }

  private moveActivePlayerMarker() {
    this["player" + this.activePlayerIndex].active = false;
    if (this.activePlayerIndex === 4) {
      this.activePlayerIndex = 1;
    } else {
      this.activePlayerIndex++;
      if(!this["player" + this.activePlayerIndex].alive){
        this.moveActivePlayerMarker();
      }
    }
    this["player" + this.activePlayerIndex].active = true;
  }

  performGuardAction(cardName) {
    if(this.guardCardTarget){
      if(this[this.guardCardTarget].cards[0].name === cardName){
        this.addCardToPlayedCards(this[this.guardCardTarget], this[this.guardCardTarget].cards[0]);
        this[this.guardCardTarget].alive = false;
      }
      this.guardCardTarget = undefined;
      this.nextPlayer();
    }
  }

  nextPlayer() {
    this.menusToShow = undefined;
    this.moveActivePlayerMarker();
    this.dealCardToActivePlayer();
    this.undoHandmaidenProtection();
  }

  isAlive(player){
    return player.alive ? "" : "line-through";
  }

  //TODO: debug method, remove after finishing
  getFirstCardName(player) {
    if(player.cards.length !== 0){
      return player.cards[0].name;
    }
  }

  performPriestAction() {
    this.lookingAtCardAsPriest = true;
  }

  endPriestAction() {
    this.lookingAtCardAsPriest = false;
    this.priestCardTarget = undefined;
    this.nextPlayer();
  }

  endBaronAction() {
    if(this.getActivePlayer().cards[0].score > this[this.baronCardTarget].cards[0].score){
      this.addCardToPlayedCards(this[this.baronCardTarget], this[this.baronCardTarget].cards[0]);
      this[this.baronCardTarget].alive = false;
    } else if(this.getActivePlayer().cards[0].score < this[this.baronCardTarget].cards[0].score) {
      this.addCardToPlayedCards(this.getActivePlayer(), this.getActivePlayer().cards[0]);
      this.getActivePlayer().alive = false;
    }
    this.baronCardTarget = undefined;
    this.nextPlayer();
  }

  private performHandMaidenAction(player: any) {
    player.isProtectedByHandmaiden = true;
  }

  private undoHandmaidenProtection() {
    this.getActivePlayer().isProtectedByHandmaiden = false;
  }

  canBeTargeted(player) {
    return !this.isActivePlayer(player) && player.alive === true && player.isProtectedByHandmaiden === false;
  }

  private noPlayerTargetAvailable() {
    return !this.canBeTargeted(this.player1) && !this.canBeTargeted(this.player2) && !this.canBeTargeted(this.player3) && !this.canBeTargeted(this.player4);
  }
}
