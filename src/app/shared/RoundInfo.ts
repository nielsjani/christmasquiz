export class RoundInfo {
  private imageRounds = new Map();
  private classicRounds = new Map();

  constructor() {
    this.initializeImageRounds();
    this.initializeClassicRounds();
  }

  private initializeImageRounds() {

    this.imageRounds.set("merken", {
      winnerText: "Alles opgelost!? Wat een opMERKelijke verdienste!",
      omschrijving: "Vind de merken aan de hand van een cryptische afbeelding.",
      questions: [
        {
          name: "one",
          answer: ["devos & lemmens", "devos&lemmens", "devos-lemmens", "devos lemmens"],
          hint: "Aan tafel!",
          solved: false
        },
        {name: "two", answer: ["carlsberg", "carl'sberg"], hint: "Probably not the best in the world", solved: false},
        {name: "three", answer: ["ford"], hint: "Vroem!", solved: false},
        {name: "four", answer: ["vans"], hint: "Engelse busjes", solved: false},
        {name: "five", answer: ["studio brussel", "stubru"], hint: "Meer dan 1000 goede doelen", solved: false},
        {name: "six", answer: ["coca-cola", "coca cola"], hint: "In het rood, in het grijs, in het zwart en in het groen", solved: false},
        {
          name: "seven",
          answer: ["häagen-dazs", "haagen-dazs", "haagen dazs", "hagen das", "haagen das", "haagen daz"],
          hint: "Niet Ben&Jerries",
          solved: false
        },
        {name: "eight", answer: ["albert heijn", "albert-heijn", "albert hein"], hint: "Hechte vriend van Delhaize", solved: false},
        {name: "nine", answer: ["thomas cook", "tomas cook"], hint: "Boven de wolken", solved: false},
        {name: "ten", answer: ["de lijn"], hint: "Er is momenteel geen hint beschikbaar wegens stakend personeel", solved: false}
      ]
    });

    this.imageRounds.set("films", {
      winnerText: "Gefeliciteerd! De naam van een filmfan zoals jij zou in de aftiteling moeten staan.",
      omschrijving: "Welke films zoeken we? Je enige leidraad zijn enkele raadselachtige prenten...",
      questions: [
        {name: "one", answer: ["das boot"], hint: "auf Deutsch", solved: false},
        {name: "two", answer: ["hector"], hint: "Vlaamse film", solved: false},
        {name: "three", answer: ["jaws"], hint: "Eentje van Spielberg", solved: false},
        {name: "four", answer: ["mad max"], hint: "Werd al gespeeld door Mel Gibson en Tom Hardy", solved: false},
        {name: "five", answer: ["life of brian"], hint: "Monty Python", solved: false},
        {name: "six", answer: ["the silence of the lambs", "silence of the lambs"], hint: "Politie gaat ten rade bij kannibaal", solved: false},
        {
          name: "seven",
          answer: ["schindler's list", "schindlers list", "shindler's list", "shindlers list"],
          hint: "Nog eentje van Spielberg. Bijna volledig in zwart-wit.",
          solved: false
        },
        {name: "eight", answer: ["wall-e", "wall e", "walle"], hint: "Populatie van de aarde: 0", solved: false},
        {name: "nine", answer: ["up"], hint: "ballonnen", solved: false},
        {name: "ten", answer: ["the wolf of wall street", "wolf of wall street"], hint: "Rijk worden met andermans geld", solved: false}
      ]
    });
  }


  private initializeClassicRounds() {

    this.classicRounds.set("jaarretrospectief", {
      winnerText: "Ben jij even klaar voor het volgend jaar als deze poes?",
      omschrijving: "Weet jij nog wat er het afgelopen jaar allemaal is gebeurd? Bewijs het in deze ronde!",
      questions: [
        {
          titel: "Januari",
          vraag: "Naast David Bowie stierf ook de carrière van een Vlaamse veldrijdster. Wat werd er gevonden in de fiets van Femke Van Den Driessche?",
          answer: ["motor", "motortje", "een motor", "een motortje"],
          solved: false
        },

        {
          titel: "Februari",
          vraag: "Leonardo DiCaprio won voor het eerst in zijn leven een Oscar voor zijn hoofdrol in The Revenant. Weet je echter welke Valentijnsfilm zo maar even 5 Razzies (filmprijzen voor de slechtste films in een bepaalde categorie) naar huis mocht meenemen?",
          answer: ["50 shades of grey", "50 shades of gray", "fifty shades of grey", "fifty shades of gray"],
          solved: false
        },

        {
          titel: "Maart",
          vraag: "Barack Obama hief het handelsembargo met dit Zuid-Amerikaanse land op dat in 1959 werd opgericht. Dat werd prompt gevierd met een concert van de Rolling Stones. Over welk land gaat het?",
          answer: ["cuba"],
          solved: false
        },

        {
          titel: "April",
          vraag: "In April moesten we niet alleen van Prince afscheid nemen. Ook een minister uit de Vlaamse regering stapte op. Niet omwille van haar gelijkenis met de zanger van The Cure. Wel omwille van haar slecht ontvangen taks. Wat is de achternaam van deze minister?",
          answer: ["turtelboom"],
          solved: false
        },

        {
          titel: "Mei",
          vraag: "In Mei kwam het grootste dopingschandaal ooit aan het licht toen werd ontdekt dat de Russische regering al jarenlang de dopingtests van honderden atleten vervalste. In Mei vond ook het Eurovisiesongfestival plaats. Dit jaar won Jamala met het liedje '1944'. Dat gaat over de deportatie van 240.000 Krim-Tataren naar Centraal-Azië door Jozef Stalin. Wat is de nationaliteit van Jamala?",
          answer: ["oekraïne", "oekraine"],
          solved: false
        },

        {
          titel: "Juni",
          vraag: "Deze maand stond in het teken van het EK voetbal in Frankrijk. Omdat ik niks van voetbal ken, maak ik er een antropologische vraag van. Wat zijn de drie laatste letters van de meeste achternamen van de leden uit de Ijslandse voetbalploeg?",
          answer: ["son"],
          solved: false
        },

        {
          titel: "Juli",
          vraag: "Eén spel kreeg alle aandacht tijdens de zomermaanden: Pokémon Go. De hoeveelste verjaardag vierde de franchise dit jaar? Tip: het is een rond getal.",
          answer: ["20", "twintig"],
          solved: false
        },

        {
          titel: "Augustus",
          vraag: "Welke vrouw won dit jaar onze enige gouden medaille in de atletiek (achternaam)?",
          answer: ["thiam", "tiam"],
          solved: false
        },

        {
          titel: "September",
          vraag: "Welke Nobelprijswinnares voor de vrede werd door Paus Franciscus heilig verklaard?",
          answer: ["moeder teresa", "moeder theresa", "teresa", "theresa"],
          solved: false
        },

        {
          titel: "Oktober",
          vraag: "Wie won de Nobelprijs voor de Literatuur?",
          answer: ["bob dylan", "dylan"],
          solved: false
        },

        {
          titel: "November",
          vraag: "The Donald haalde het van Hillary Clinton. Ken je ook de achternaam van zijn running mate en dus toekomstige vice-president van de VS? Tip: het lijkt op een synoniem voor 'worst'",
          answer: ["pence"],
          solved: false
        },

        {
          titel: "December",
          vraag: "Koning Bhumibol van Thailand kwam dit jaar te gaan. Hoe lang gaat het land om zijn heengaan rouwen?",
          answer: ["1 jaar", "een jaar", "één jaar", "twaalf maanden", "twaalf maand", "12 maand", "twaalf maanden"],
          solved: false
        }
      ]
    });
  }

  getImageRoundQuestions(roundName) {
    return this.imageRounds.get(roundName).questions;
  }

  getClassicRoundQuestions(roundName) {
    return this.classicRounds.get(roundName).questions;
  }

  getImageRoundWinnerText(roundName) {
    if (this.imageRounds.has(roundName)) {
      return this.imageRounds.get(roundName).winnerText;
    } else {
      return this.classicRounds.get(roundName).winnerText;
    }
  }

  getImageRoundOmschrijving(roundName) {
    return this.imageRounds.get(roundName).omschrijving;
  }

  getImageRoundNames() {
    return Array.from(this.imageRounds.keys());
  }

  getClassicRoundNames() {
    return Array.from(this.classicRounds.keys());
  }

  getClassicRoundOmschrijving(rondeNaam) {
    return this.classicRounds.get(rondeNaam).omschrijving;
  }

}
