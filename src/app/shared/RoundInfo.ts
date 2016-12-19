export class RoundInfo {
  private imageRounds = new Map();

  constructor() {
    this.initializeImageRounds();
  }

  private initializeImageRounds() {
    this.imageRounds.set("xmasquiz", {
      winnerText: "Je gezicht wanneer je beseft dat er geen leuke vragen meer op te lossen vallen.",
      omschrijving: "Vind de merken aan de hand van een cryptische afbeelding.",
      questions: [
        {name: "0", answer: "one", solved: false},
        {name: "1", answer: "toe", solved: false},
        {name: "2", answer: "trie", solved: false}
      ]
    });

    this.imageRounds.set("merken", {
      winnerText: "Alles opgelost!? Wat een opMERKelijke verdienste!",
      omschrijving: "Vind de merken aan de hand van een cryptische afbeelding.",
      questions: [
        {name: "one", answer: "devos lemmens", solved: false},
        {name: "two", answer: "carlsberg", solved: false},
        {name: "three", answer: "ford", solved: false},
        {name: "four", answer: "vans", solved: false},
        {name: "five", answer: "studio brussel", solved: false},
        {name: "six", answer: "coca cola", solved: false},
        {name: "seven", answer: "haagen dazs", solved: false},
        {name: "eight", answer: "albert heijn", solved: false},
        {name: "nine", answer: "thomas cook", solved: false},
        {name: "ten", answer: "de lijn", solved: false}
      ]
    });

    this.imageRounds.set("films", {
      winnerText: "Gefeliciteerd! De naam van een filmfan zoals jij zou in de aftiteling moeten staan.",
      omschrijving: "Welke films zoeken we? Je enige leidraad zijn enkele raadselachtige afbeeldingen...",
      questions: [
        {name: "one", answer: "das boot", solved: false},
        {name: "two", answer: "hector", solved: false},
        {name: "three", answer: "jaws", solved: false},
        {name: "four", answer: "mad max", solved: false},
        {name: "five", answer: "life of brian", solved: false},
        {name: "six", answer: "the silence of the lambs", solved: false},
        {name: "seven", answer: "schindler's list", solved: false},
        {name: "eight", answer: "wall-e", solved: false},
        {name: "nine", answer: "up", solved: false},
        {name: "ten", answer: "the wolf of wall street", solved: false}
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
