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

    this.imageRounds.set("acteurs", {
      winnerText: "Als er een Oscar was voor de beste quizzer, dan ging die sowieso naar jou!",
      omschrijving: "en ook een paar actrices. Uit binnen- én buitenland!",
      questions: [
        {name: "one", answer: ["mathias coppens", "coppens", "matthias coppens"], hint: "Presenteert voornamelijk programma's en dan voornamelijk samen met zijn broer. Acteerde onder ander naast Herbert Flack. Regisseerde ook De zonen van Van As.", solved: false},
        {name: "two", answer: ["ben stiller", "stiller"], hint: "Amerikaans acteur, vooral bekend uit comedy's zoals Zoolander.", solved: false},
        {name: "three", answer: ["vin diesel"], hint: "kale actieheld. Kan snel en furieus uit de hoek komen.", solved: false},
        {name: "four", answer: ["sylvester stallone", "stallone", "stalone"], hint: "Speelde mee in de bekendste boksfilms aller tijden. Die gezichtsverlamming had hij daarvoor al.", solved: false},
        {name: "five", answer: ["matteo simoni", "simoni"], hint: "Speelde al een Italiaanse zanger, een hyperactief broodje en een Marokkaan.", solved: false},
        {name: "six", answer: ["filip peeters", "peeters", "peters", "filip peters"], hint: "De man van Liesje van Het Eiland. Deed al twee keer mee aan De Slimste Mens", solved: false},
        {name: "seven", answer: ["jan decleir", "declair", "decleir", "jan declair"], hint: "Broer van Reinhilde, vader van Sofie, Flor en Jenne", solved: false},
        {name: "eight", answer: ["peter van asbroeck", "peter van asbroek", "van asbroek", "peter van as broek"], hint: "Bij deze flik mag iedereen komen eten", solved: false},
        {name: "nine", answer: ["madonna"], hint: "Je kent haar vooral als zangeres, maar de blondine op leeftijd heeft ook meerdere hoofdrollen mogen vertolken.", solved: false},
        {name: "ten", answer: ["meryl streep", "streep"], hint: "Eén van de zes personen op aarde met 3 Oscars op haar naam. Vertolkte onder andere Margareth Thatcher.", solved: false}
      ]
    });
  }


  private initializeClassicRounds() {

    this.classicRounds.set("jaarretrospectief-2016", {
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

    this.classicRounds.set("jaarretrospectief-2017", {
      winnerText: "Als je je even hard smijt als deze hond, ben je volledig klaar voor 2018",
      omschrijving: "Twaalf vragen over het jaar 2017. Heb jij de voorbije 31,536,000 seconden goed opgelet",
      questions: [
        {
          titel: "Januari",
          vraag: "Trump legt de eed af als president van de Verenigde Staten van Amerika. De hoeveelste president is hij als je weet dat Eisenhower de 34ste president was en dat die regeerde tussen 1953 en 1961?",
          answer: ["45ste", "45"],
          solved: false
        },

        {
          titel: "Februari",
          vraag: "Belgische astronomen ontdekken een ster met bewoonbare planeten op 39 lichtjaren van de aarde. Hij noemen ze deze ster? De onderzoekers zijn fan van een biersoort gebrouwen door moniken.",
          answer: ["trappist-1", "trappist", "trapist"],
          solved: false
        },

        {
          titel: "Maart",
          vraag: "Hoe heet de Amerikaanse gitaarvirtuoos die op 90-jarige leeftijd het leven liet? Eén van zijn bekendste nummers is 'Johnny B. Goode'.",
          answer: ["chuck berry", "berry", "berrie"],
          solved: false
        },

        {
          titel: "April",
          vraag: "Welke Disneyfilm werd verfilmd met Emma Watson in de hoofdrol?",
          answer: ["beauty and the beast", "belle en het beest"],
          solved: false
        },

        {
          titel: "Mei",
          vraag: "Salvador Sobral zingt Portugal naar de Eurovisie Songfestival overwinning met het nummer 'Amor pelos dois'. De hoeveelste overwinning was dit voor Portugal?",
          answer: ["eerste", "1"],
          solved: false
        },

        {
          titel: "Juni",
          vraag: "Ariana Grande houdt een concert in Manchester ter nagedachtenis van de slachtoffers van de bom die tijdens haar vorige concert in de Engelse stad afging. Het nummer 'Don't look back in anger' werd het lijflied van het event. Maar wie bedacht dat nummer? Tip: je vindt ze in de woestijn.",
          answer: ["oasis", "oase"],
          solved: false
        },

        {
          titel: "Juli",
          vraag: "Chris Froome wint voor de vierde keer de Tour de France. Wie was de laatste Belgische winnaar? Tip: Tijdens die zomer liepen de Olympische Spelen in Montréal, Canada.",
          answer: ["lucien van impe", "van impe"],
          solved: false
        },

        {
          titel: "Augustus",
          vraag: "Prins Philip gaat op pensioen na meer dan 22.000 publieke optredens. Wie is de echtgenote van deze philip?",
          answer: ["queen elisabeth II", "queen elisabeth", "elisabeth"],
          solved: false
        },

        {
          titel: "September",
          vraag: "Eén van de bekendste uitgevers ter wereld sterft op 91-jarige leeftijd in zijn Mansion genoemd naar zijn bekendste blad. Hij laat 4 kinderen en een 31-jarige vrouw achter. Over wie hebben we het?",
          answer: ["hugh hefner", "hefner"],
          solved: false
        },

        {
          titel: "Oktober",
          vraag: "Hein Vanhaezebrouck wordt coach van Anderlecht. Welke Zwitser moest opstappen om plaats te maken voor Hein? Zijn naam is een anagram voor 'Weer in leer'",
          answer: ["rene weiler", "weiler"],
          solved: false
        },

        {
          titel: "November",
          vraag: "De afgezette minister-president van Catalonië stelt in Brugge zijn kiescampagne voor. Hoe heet die man ook alweer?",
          answer: ["puigdemont"],
          solved: false
        },

        {
          titel: "December",
          vraag: "1 eenheid van deze elektronisch munt die in 2009 het levenslicht zag is op 3 december meer dan 11.000 dollar waard. Wat is de naam van deze munt?",
          answer: ["bitcoin", "bit coin"],
          solved: false
        }
      ]
    });

    this.classicRounds.set("jaarretrospectief-2018", {
      winnerText: "Dit varken zal 2019 waarschijnlijk niet halen, maar iemand die zo veel weet als jij haalt zonder problemen het volgende decennium",
      omschrijving: "2018 ligt bijna achter ons. Hoe memorabel waren de gebeurtenissen van dit jaar voor jou?",
      questions: [
        {
          titel: "Januari",
          vraag: "Op 10 januari laat comédienne Lies Lefever op 37-jarige leeftijd het leven. Drie dagen eerder verloor de wereld ook al een andere zangeres. Welke Franse France zoeken we? (achternaam)",
          answer: ["Gall", "gal"],
          solved: false
        },

        {
          titel: "Februari",
          vraag: "SpaceX, een bedrijf die commerciële ruimtereizen poogt te organiseren, slaagt er in om zijn eerste raket, de 'Falcon Heavy', te lanceren. Mensen aan boord zijn er niet, wel een Tesla Roadster. Deze elektrische wagen wordt achtergelaten in de ruimte en speelt daar sindsdien nonstop 'Life on Mars' van David Bowie. Wat is de achternaam van de baas van SpaceX en Tesla. Hij ontwikkelde ook al PayPal, vlammenwerpers en leidt The Boring Company. ",
          answer: ["Elon Musk", "Musk"],
          solved: false
        },

        {
          titel: "Maart",
          vraag: "Een vrouw in Arizona sterft nadat ze wordt aangereden door een Uber taxi. Wat was er zo speciaal aan deze wagen waardoor dit ongeval het eerste van zijn soort werd?",
          answer: ["De wagen was zelfsturend", "zelfsturend", "geen bestuurder", "zelfrijdend"],
          solved: false
        },

        {
          titel: "April",
          vraag: "Na 35 jaar wordt de ban op films opgeheven in Saoedi-Arabië. Welke film werd de eerste die getoond werd na deze ban? Hij is ondertussen genomineerd voor 3 Oscars: beste film, beste soundtrack en beste song. Enkele hoofdrollen zijn weggelegd voor Chadwick Boseman als koning T'Challa, Michael B. Jordan als Eric Killmonger en Lupita Nyong'o als Nakia.",
          answer: ["Black Panther"],
          solved: false
        },

        {
          titel: "Mei",
          vraag: "De best bezochte film van dit jaar haalt maar liefst 2 miljard dollar binnen voor Walt Disney en wordt daarmee de vierde best verdienende film ooit. Met zijn geschatte budget dat tussen de 300 en 400 miljoen dollar ligt, is hij echter ook één van de duurste films ooit gemaakt. Welke film zoeken we?",
          answer: ["Avengers: Infinity War", "Avengers 3", "Infinity War"],
          solved: false
        },

        {
          titel: "Juni",
          vraag: "De wereldbeker voetbal vind plaats in Rusland. Frankrijk gaat met de trofee naar huis en België wordt derde. Welk land kreeg de zilveren plak?",
          answer: ["Kroatië", "Kroatie"],
          solved: false
        },

        {
          titel: "Juli",
          vraag: "De Tham Luang Nang Non grot komt uitgebreid in het nieuws. Twaalf jongeren en hun begeleider zitten er namelijk 17 dagen lang vast nadat de grot volloopt met water. Welke hobby delen deze mannen?",
          answer: ["voetbal"],
          solved: false
        },

        {
          titel: "Augustus",
          vraag: "Tientallen mensen sterven nadat een brug in Italië instort. In welke stad in het noordwesten van het land met meer dan een half miljoen inwoners bevond deze brug zich?",
          answer: ["Genua"],
          solved: false
        },

        {
          titel: "September",
          vraag: "Trump was niet welkom, maar onder meer Obama en George W. Bush waren wel aanwezig op de begrafenis van deze Republikeinse senator en krijgsgevangene uit de Vietnam oorlog. Wat is de achternaam van de man die ooit nog met Obama streed om de presidentstitel?",
          answer: ["John McCain", "McCain"],
          solved: false
        },

        {
          titel: "Oktober",
          vraag: "Gemeenteverkiezingen in België. In welke gemeente boekte Guy D'Haeseleer een monsteroverwinning met zijn extreemrechtse partij?",
          answer: ["Ninove", "Ninnove"],
          solved: false
        },

        {
          titel: "November",
          vraag: "Als gevolg van de verkiezingen trok de toenmalige minister van Defensie terug naar Hasselt om daar burgemeester te worden. Hij werd opgevolgd door partijgenoot Sander Loones die na minder dan een maand zijn post weer mocht afgeven aan Didier Reynders. Wie is de huidige burgemeester van Hasselt? (achternaam)",
          answer: ["Vandeput", "van de put"],
          solved: false
        },

        {
          titel: "December",
          vraag: "Wat is de Franse naam van de protestbeweging die onder andere Parijs en Wallonië bezette uit onvrede omtrent hoge brandstofprijzen en lage inkomens?",
          answer: ["Gilets jaunes", "Gilet jaune"],
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
