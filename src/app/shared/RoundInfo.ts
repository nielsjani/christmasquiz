export class RoundInfo {
  private imageRounds = new Map();

  constructor() {
    this.initializeImageRounds();
  }

  private initializeImageRounds() {
    this.imageRounds.set("xmasquiz", {
      winnerText: "Het gezicht dat je maakt wanneer je beseft dat er geen leuke vragen meer op te lossen vallen.",
      omschrijving: "Vind de merken aan de hand van een cryptische afbeelding.",
      questions: [
        {name: "0", answer: "one", solved: false},
        {name: "1", answer: "toe", solved: false},
        {name: "2", answer: "trie", solved: false}
      ]
    });
  }

  getImageRoundQuestions(roundName) {
    return this.imageRounds.get(roundName).questions;
  }

  getImageRoundWinnerText(roundName) {
    return this.imageRounds.get(roundName).winnerText;
  }

  getImageRoundOmschrijving(roundName) {
    return this.imageRounds.get(roundName).omschrijving;
  }

  getRoundNames() {
    return Array.from(this.imageRounds.keys());
  }
}
