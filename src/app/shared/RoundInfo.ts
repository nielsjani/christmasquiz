export class RoundInfo {
  private imageRounds = new Map();
  private classicRounds = new Map();
  private crosswordRounds = new Map();

  constructor() {
    this.initializeImageRounds();
    this.initializeClassicRounds();
    this.initializeCrosswordRounds();
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

    this.imageRounds.set("steden", {
      winnerText: "Van de Alpen tot Zimbabwe, jij vindt overal de weg terug naar huis!",
      omschrijving: "Tien bekende steden uit binnen- en buitenland verbergen zich achter mysterieuze foto's",
      questions: [
        {name: "one", answer: ["dinant"], hint: "zoek het in Wallonië", solved: false},
        {name: "two", answer: ["parijs"], hint: "Ze zijn met twee, ze zijn een stel, een koppel, een ...", solved: false},
        {name: "three", answer: ["den haag"], hint: "Onpopulaire plek voor massamoordenaars en dictators", solved: false},
        {name: "four", answer: ["bonn", "bon"], hint: "pas mal", solved: false},
        {name: "five", answer: ["lissabon", "lisabon"], hint: "In deze stad ligt Vasco da Gama begraven", solved: false},
        {name: "six", answer: ["ankara"], hint: "De hoofdstad", solved: false},
        {
          name: "seven",
          answer: ["port-au-prince", "port-o-prince", "portoprince", "port au prince"],
          hint: "Dat is de vlag van Haïti",
          solved: false
        },
        {name: "eight", answer: ["oxford"], hint: "Ze hebben een bekende unief", solved: false},
        {name: "nine", answer: ["stalingrad", "stalinrad"], hint: "A single death is a tragedy; a million deaths is a statistic.", solved: false},
        {name: "ten", answer: ["las vegas", "vegas"], hint: "Ik zet 2000 dollar op rood", solved: false}
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

    this.classicRounds.set("vijftig", {
      winnerText: "Op naar de volgende 50 jaar",
      omschrijving: "Algemene kennis vragen over de voorbije vijftig jaar",
      questions: [
        {
          titel: "1967",
          vraag: "Welke acteur die later president van de VS zou worden, wordt ingewijd als gouverneur van Californië? (achternaam)",
          answer: ["raegan", "regan"],
          solved: false
        },

        {
          titel: "1972",
          vraag: "Het Britse leger doodt 14 ongewapende burgers in Noord-Ierland. Welke naam kreeg deze gebeurtenis?",
          answer: ["bloody sunday"],
          solved: false
        },

        {
          titel: "1977",
          vraag: "George Lucas breekt alle box-office records met zijn nieuwste film. Hoe heet deze?",
          answer: ["Star Wars: A New Hope", "star wars", "star wars a new hope", "a new hope"],
          solved: false
        },

        {
          titel: "1982",
          vraag: "Er breekt een tien weken durende oorlog uit tussen Groot-Brittanië en Argentinië. Rond welke eilanden speelt deze oorlog zich af?",
          answer: ["falkland", "falkland eilanden"],
          solved: false
        },

        {
          titel: "1987",
          vraag: "Wie wordt het eerste vrouwelijke lid van de Rock and Roll Hall of Fame? Je kent haar van nummers als 'Respect' en 'Faith' (achternaam)",
          answer: ["franklin"],
          solved: false
        },

        {
          titel: "1992",
          vraag: "Steffi Graf wint Wimbledon bij het vrouwentennis. Wie won bij de mannen? (achternaam)",
          answer: ["agassi", "agasi", "aggassi", 'aggassi'],
          solved: false
        },

        {
          titel: "1997",
          vraag: "De avonturen van Ash Ketchum, Misty en Brock beginnen. Over welke tv-serie die nog steeds loopt (weliswaar zonder Misty en Brock) gaat het?",
          answer: ["pokémon", "pokemon"],
          solved: false
        },

        {
          titel: "2002",
          vraag: "De auteur van onder meer Pipi Langkous sterft. Wat is de achternaam van deze Zweedse?",
          answer: ["lindgren", "lintgren"],
          solved: false
        },

        {
          titel: "2007",
          vraag: "Wie wint de nobelprijs voor de vrede omwille van zijn werk rond klimaatopwarming? (achternaam)",
          answer: ["gore"],
          solved: false
        },

        {
          titel: "2012",
          vraag: "Lonesome George sterft op 102-jarige leeftijd waardoor zijn soort uitsterft. Wat was Lonesome George?",
          answer: ["schildpad"],
          solved: false
        },

        {
          titel: "2017",
          vraag: "Wie haalde Grammy's binnen voor 'Record of the Year', 'Album of the Year', 'Song of the Year', 'Best Pop Solo' en 'Best Pop Vocal album'?",
          answer: ["adele"],
          solved: false
        }
      ]
    });
  }

  private initializeCrosswordRounds() {
    this.crosswordRounds.set("merken-crossword", {
      winnerText: "Hopelijk blijven jouw kleren na de fondue ook onbevlekt",
      omschrijving: "Een bisronde merken raden. Nu met 100% extra kruiswoordraadsels!",
      questions: [
        {name: "one", verticalWordLetterIndex: 1, answer: ["dove"], hint: "Een diersoort in het Engels", solved: false},
        {name: "two", verticalWordLetterIndex: 5, answer: ["mustang"], hint: "Een automerk die je in België quasi nooit ziet rijden. Ook een diersoort.", solved: false},
        {name: "three", verticalWordLetterIndex: 6, answer: ["ravensburger"], hint: "Maken speelgoed en puzzels", solved: false},
        {name: "four", verticalWordLetterIndex: 1, answer: ["becel"], hint: "Niet te dik smeren, dat is ongezond!", solved: false},
        {name: "five", verticalWordLetterIndex: 8, answer: ["harleydavidson", "harley davidson", "harley-davidson"], hint: "Met twee wielen ben je sneller de file door", solved: false},
        {name: "six", verticalWordLetterIndex: 1, answer: ["aldi"], hint: "De bijnaam van die rechtse was Lady...", solved: false},
        {name: "seven", verticalWordLetterIndex: 3, answer: ["drpepper", "dr pepper", "dr. pepper", "dokter pepper", "doctor pepper"], hint: "Artsen raden het drinken van dit merk af", solved: false},
        {name: "eight", verticalWordLetterIndex: 5, answer: ["hellokitty", "hello kitty"], hint: "Meisjes hebben er waarschijnlijk een schrift, pen, inpakpapier en dekbedovertrek van", solved: false},
        {name: "nine", verticalWordLetterIndex: 7, answer: ["kruidvat"], hint: "Amerikanen zouden het een 'Drug store' noemen. Verrast? Dat kan misschien in je voordeel spelen!", solved: false},
      ]
    });
  }

  getImageRoundQuestions(roundName) {
    return this.imageRounds.get(roundName).questions;
  }

  getCrosswordRoundQuestions(roundName) {
    return this.crosswordRounds.get(roundName).questions;
  }

  getClassicRoundQuestions(roundName) {
    return this.classicRounds.get(roundName).questions;
  }

  getImageRoundWinnerText(roundName) {
    if (this.imageRounds.has(roundName)) {
      return this.imageRounds.get(roundName).winnerText;
    } else if(this.classicRounds.has(roundName)) {
      return this.classicRounds.get(roundName).winnerText;
    } else {
      return this.crosswordRounds.get(roundName).winnerText;
    }
  }

  getImageRoundOmschrijving(roundName) {
    return this.imageRounds.get(roundName).omschrijving;
  }

  getCrosswordRoundOmschrijving(roundName) {
    return this.crosswordRounds.get(roundName).omschrijving;
  }

  getImageRoundNames() {
    return Array.from(this.imageRounds.keys());
  }

  getClassicRoundNames() {
    return Array.from(this.classicRounds.keys());
  }

  getCrosswordRoundNames() {
    return Array.from(this.crosswordRounds.keys());
  }

  getClassicRoundOmschrijving(rondeNaam) {
    return this.classicRounds.get(rondeNaam).omschrijving;
  }
}
