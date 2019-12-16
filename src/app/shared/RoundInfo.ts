export class RoundInfo {
  private imageRounds = new Map();
  private classicRounds = new Map();
  private crosswordRounds = new Map();
  private rodeDraadRounds = new Map();
  private puzzleRounds = new Map();

  constructor() {
    this.initializeImageRounds();
    this.initializeClassicRounds();
    this.initializeCrosswordRounds();
    this.initializeRodeDraadRounds();
    this.initializePuzzleRounds();
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

    this.imageRounds.set("plekken", {
      winnerText: "Hopelijk heb je nog een plekje in je maag gereserveerd voor het dessert straks!",
      omschrijving: "Kan jij deze tien wereldberoemde trekpleisters afleiden uit een reeks cryptische afbeeldingen?",
      questions: [
        {name: "one", answer: ["Arc de Triomphe", "Ark de Triomphe"], hint: "In het midden van een rond punt in Parijs.", solved: false},
        {name: "two", answer: ["Mont Saint-Michel", "Mont Saint Michel"], hint: "Soms geraak je er te voet, soms met een bootje", solved: false},
        {name: "three", answer: ["Vlooybergtoren", "Vlooibergtoren"], hint: "Voorzichtig op de baan, he!", solved: false},
        {name: "four", answer: ["Big Ben"], hint: "Ding-dong!", solved: false},
        {name: "five", answer: ["Chinese muur", "De chinese muur"], hint: "In tegenstelling tot wat sommigen beweren is dit bouwwerk niét zichtbaar vanuit de ruimte", solved: false},
        {name: "six", answer: ["Brandenburger Poort", "Brandenburger Tor"], hint: "Twee woorden. Als je het op z'n Duits uitspreekt wordt het tweede woord 'Tor'", solved: false},
        {name: "seven", answer: ["Times Square", "Time Square"], hint: "Overal reclameborden, taxi's en toeristen. Eén van de beste plekken om Nieuwjaar te vieren", solved: false},
        {name: "eight", answer: ["Christus de Verlosser", "Christ The Redeemer", "Christ The Redeemer"], hint: "Welk beroep oefent de man rechts uit?", solved: false},
        {name: "nine", answer: ["Alhambra"], hint: "Meneer Pacino vraagt dat je het derde item op z'n Engels uitspreekt.", solved: false},
        {name: "ten", answer: ["Eiffeltoren", "Eifeltoren"], hint: "De maker van dit bouwwerk, Gustave, leverde ook het Vrijheidsbeeld aan de VS.", solved: false}
      ]
    });

    this.imageRounds.set("muziek", {
      imgUrl: "https://i.imgur.com/4zrclW9.jpg",
      winnerText: "Jouw antwoorden klinken als muziek in de oren",
      omschrijving: "Welke artiesten en bands werden er in deze ronde verborgen?",
      questions: [
        {url: "https://i.imgur.com/qPgUHxs.png", answer: ["Roxette", "Roxet"], hint: "Zangeres Marie Fredriksson overleed onlangs", solved: false},
        {url: "https://i.imgur.com/MHE5H0l.png", answer: ["The Weeknd", "The Weekend"], hint: "Deze Canadees kan zijn gezicht niet voelen als hij bij je is", solved: false},
        {url: "https://i.imgur.com/zk6rECh.png", answer: ["Eminem"], hint: "Deze rapper speelde ook al zichzelf in de film 8 Mile", solved: false},
        {url: "https://i.imgur.com/ac4Dh1T.png", answer: ["Miley Cyrus"], hint: "Dochter van Billy Ray en nicht van Dolly Parton", solved: false},
        {url: "https://i.imgur.com/qwRGUqX.png", answer: ["Amy Winehouse"], hint: "Recentste vrouwelijk lid van de 27 club", solved: false},
        {url: "https://i.imgur.com/Uxc8vPG.png", answer: ["Deep Purple"], hint: "Rockers die begonnen in de sixties en nog steeds actief touren", solved: false},
        {url: "https://i.imgur.com/rXTzzfI.jpg", answer: ["Nick Cave"], hint: "Zong een duet met Kylie Minogue en speelt meestal samen met zijn Bad Seeds", solved: false},
        {url: "https://i.imgur.com/Zu5XriR.jpg", answer: ["School is cool"], hint: "Frontman Johannes Genard deed mee aan het VTM-programma 'Liefde voor Muziek'", solved: false},
        {url: "https://i.imgur.com/MyosTo0.jpg", answer: ["Bruce Springsteen", "Springsteen"], hint: "Deze baas is geboren om te lopen", solved: false},
        {url: "https://i.imgur.com/ZPmubzQ.png", answer: ["The Chainsmokers", "Chainsmokers"], hint: "Niels moet er van kotsen", solved: false},
        {url: "https://i.imgur.com/Q1A2c4F.png", answer: ["Twenty-one pilots", "twentyone pilots", "21 pilots"], hint: "<hoeveel> <beroep>", solved: false}
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

    this.classicRounds.set("decennium-retrospectief", {
      winnerText: "Tien (jaar) op tien!",
      omschrijving: "Wat weet jij nog over de voorbije tien jaar? Omdat sommige antwoorden misschien ver weg zitten, zijn er meerdere vragen per jaar waar je op kan antwoorden",
      questions: [
        {
          titel: "2010",
          vraag: "De Slimste Mens Ter Wereld loopt voor de laatste keer op één. Tijdens deze editie nemen de beste deelnemers van de voorbije edities het tegen elkaar op. Welke comedian met opvallende snor won deze quiz zowel in 2004 als in 2010? Wie presenteerde de quiz in 2003?",
          answer: ["Bert Kruismans won twee keer, Bruno Wyndaele presenteerde voor Eric van Looy", 'Kruismans', 'Wyndaele', 'Wijndaele', 'Weyndaele'],
          solved: false
        },

        {
          titel: "2011",
          vraag: "Deze Apple topman en bedenker van onder meer de iPhone en iPod verliest de strijd tegen kanker. Hoe heet deze man? Wie volgde hem op?",
          answer: ["Steve Jobs stierf en werd opgevolgd door Tim Cook", "Jobs", 'Cook'],
          solved: false
        },

        {
          titel: "2012",
          vraag: "De Olympsche Spelen vinden plaats in Londen. Noem één Belgische medaillewinnaar (we haalden 1 zilveren medaille en twee bronzen)",
          answer: ["Cox (Schietsport, Zilver), Van Snick (Judo, Brons), Van Acker (Zeilen, Brons)", "Cox", "Cockx", "Van Snick", "Van Snik", "Van Acker", "Van Akker"],
          solved: false
        },

        {
          titel: "2013",
          vraag: "We krijgen een nieuwe paus. Jorge Mario Bergoglio zal voortaan door het leven gaan als paus Franciscus. Uit welke land komt Jorge? Vaticaanstad is een land en elk land heeft ook een voetbalploeg. Sinds hun oprichting in 1994 speelden de voetballers van Vaticaanstad al 7 interlands. Hoeveel keer wonnen ze al?",
          answer: ["Argentinie en hun voetbalploeg won nog nooit", "Argentinie", 'Nooit', "0", 'nul'],
          solved: false
        },

        {
          titel: "2014",
          vraag: "De Ice Bucket Challenge doet de ronde. Door een emmer ijswater over je heen te gieten, voel je je even als een patiënt die aan de ziekte lijdt waarvoor deze virale challenge aandacht wilt vragen. Welke ziekte zoeken we? Welke wetenschapper was de bekendste persoon die aan deze ziekte leed? Hij overleed in 2018 en hield zich vooral bezig met het heelal.",
          answer: ["Amyotrofe laterale sclerosen Stephen Hawking", "ALS", 'Hawking'],
          solved: false
        },

        {
          titel: "2015",
          vraag: "Documenten omtrent wereldwijde belastingontduiking worden gelekt naar de pers. Deze lek wordt genoemd naar een Centraal-Amerikaanse land waar de eigenaar van de documenten verbleef. Hoe heet deze leak? Enkele jaren later wordt het Belgisch voetbal getroffen door een schandaal omtrent matchfixing en omkoping. Hoe heet deze operatie?",
          answer: ["Panama Papers/Operatie Propere Handen (of Operatie Zero)", "Panama Papers", "Operatie Propere Handen", "Operatie Zero"],
          solved: false
        },

        {
          titel: "2016",
          vraag: "Wie won op 41-jarige leeftijd zijn eerste Oscar voor zijn hoofdrol in The Revenant? James Bond film Spectre gaat naar huis met de Oscar voor beste origineel nummer. Wie zong dit nummer?",
          answer: ["Leonardo DiCaprio was beste acteur en Sam Smith verzorgde het beste nummer met Writing's on the Wall.", 'Dicaprio', 'Sam Smith'],
          solved: false
        },

        {
          titel: "2017",
          vraag: "Wie werd met 6 nominaties (waarvan hij er 3 wist te verzilveren) de ster van de MIAs? Deze Max loopt er altijd zeer fashionable bij en deed in 2005 al mee aan Eurosong for kids. Welke dame won hit van het jaar? Tip: het was de eurosong inzending van dat jaar?",
          answer: ["Oscar and the wolf won 3 keer, Blanche had de hit van het jaar te pakken (met City Lights)", 'Oscar and the wolf', 'blanche', 'blanch'],
          solved: false
        },

        {
          titel: "2018",
          vraag: "Wie won de Tour de France? Welke Belg droeg even de gele trui?",
          answer: ["Geraint Thomas won, Greg Van Avermaet mocht 7 etappes lang in het geel fietsen", "Thomas", "Van Avermaet"],
          solved: false
        },
        {
          titel: "2019",
          vraag: "Tv-serie met Sophie Declair, Titus De Voogdt en Maaike Neuville in de hoofdrol. De serie werd steeds per twee afleveringen uitgezonden waarbij dezelfde gebeurtenissen steeds langs twee kanten bekeken werden. Welke serie zoeken we? Hoe heet de eerste Vlaamse 'duikbootfilm'?",
          answer: ["De Dag & Torpedo", 'De dag', 'torpedo'],
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


  private initializeRodeDraadRounds() {
    this.rodeDraadRounds.set("rode-draad-1", {
      winnerText: "Jouw outfit ziet er vandaag ook sprankelend uit",
      omschrijving: "Vier vragen, vier antwoorden, 1 rode draad.",
      questions: [
        { vraag: "We zoeken de naam van een hondenras. De soort komt voort uit een ander ras dat oorspronkelijk gebruikt werd als een oud-griekse waak-, vecht- en herdershond. Later zette men deze honden zelfs in om op everzwijnen en beren te jagen. Sommigen namen zelfs deel aan stierengevechten. Het mannetje is gemiddeld 63 cm hoog en weegt 32 kg. Vrouwtjes zijn enkele kilo's en centimeters kleiner. Hij wordt omschreven als 'Een forse atleet met een tragisch denkershoofd en een speels hart',maar een blauw oog zal hij je niet snel slaan.", answer: ["Boxer", "Duitse Boxer"], solved: false},
        { vraag: "Wat is de naam van een houder voor vloeistoffen vervaardigd uit polyethyleentereftalaat? Ze werd in 1973 gepatenteerd en wordt gebruikt als verpakking voor onder meer cosmetica, zepen, schoonmaakmiddelen en medicijnen. Meestal bevatten ze echter gewone drinkbare stoffen zoals water of frisdrank. Met drie letters kom je al een heel eind.", answer: ["Petfles", "pet"], solved: false},
        { vraag: "Hoe heet de Belgische groep die in 1994 werd opgericht en oorspronkelijk 'Things To Come' heette? In '98 wonnen ze Humo's Rock Rally waarna singles als 'Never get enough' en 'Fool for Love' volgden. Na de release van hun plaat 'The Game' en hun daaropvolgende tour in 2012 kondigde de groep een hiatus aan die nog steeds loopt. Hun frontman begon een succesvolle solocarrière en zetelde onder meer in The Voice.", answer: ["Das Pop"], solved: false},
        { vraag: "Een glaasje alcoholhoudende drank dat je vlak voor het slapen binnengiet, hoe heet dat ook alweer? Het is ook een synoniem voor de goudpapaver, een bloem die voorkomt in de Verenigde Staten en Mexico.", answer: ["Slaapmutsje", "Slaapmuts"], solved: false},
        { vraag: "Wat is de rode draad?", answer: ["kleding", "kledij", "kledingstukken", "kledingstuk"], solved: false}
      ]
    });

    this.rodeDraadRounds.set("rode-draad-2", {
      winnerText: "Een quiztalent zoals jij kan hele inboedels winnen!",
      omschrijving: "Nog eens vier vragen en vier antwoorden. En dan nog een rode draad.",
      questions: [
        { vraag: "Elk jaar wordt er in Thailand het Loi Krathong gevierd. De deelnemers van dit religieus festival maken elk een 'Khom Loi' en laten deze los als de nacht is gevallen. Hierdoor wordt de hemel gevuld met ontelbaar veel lichtjes. Wat zijn deze 'Khom Loi's in het Nederlands?", answer: ["Lampionnen", "Lampion"], solved: false},
        { vraag: "Met een kabelbaan kan je de top van deze Zuid-Afrikaanse berg van meer dan een kilometer hoog bereiken. De berg kijkt uit over Kaapstad en heeft een typerende platte bovenkant. Wat is de naam van deze berg?", answer: ["Tafelberg"], solved: false},
        { vraag: "De vrucht van de boom die we zoeken is een noot die met 2 tot 4 stuks in een bolster zitten. De bolster wordt gevormd door schutbladen met stekels. Onder meer eekhoorns, kraaien en muizen zijn er verzot op. Ook voor de mens is de vrucht eetbaar. Je kan ze rauw eten, poffen, roosteren of koken. Indien je ze droogt kan je ze verwerken in meel.", answer: ["Kastanje", "Tamme kastanje"], solved: false},
        { vraag: "Dit turntoestel kan je ook in speeltuinen vinden. Het bestaat uit een aan verticale palen bevestigde legger van metaal of glasfiber. De elementen die turners aan dit toestel ondernemen zijn bijvboorbeeld de reuzenzwaai of de buikdraai. Vooraleer ze die elementen proberen te voltooien smeren ze hun handen echter best in met magnesium. Over welk toestel hebben we het?", answer: ["Rekstok"], solved: false},
        { vraag: "Wat is de rode draad?", answer: ["meubels", "meubel", "meubilair"], solved: false}
      ]
    });
  }

  private initializePuzzleRounds() {
    this.puzzleRounds.set('puzzle-1', {
      winnerText: 'Alle puzzelstukjes vallen op hun plaats!',
      omschrijving: 'De puzzelronde, integraal gepikt uit De Slimste Mens',
      questions: [
        {answer: 'para', keywords: ['Chute', 'Sol', 'Fix', 'Maribo']},
        {answer: 'das', keywords: ['Duits lidwoord', 'Moeilijk om te knopen', 'Woont in een burcht', 'Dat is']},
        {answer: 'ros', keywords: ['Florence Welch', 'Clara Cleymans', 'Ed Sheeran', 'Thibault Christiaensen']},
        {answer: 'zout', keywords: ['Umami', 'Zoet', 'Zuur', 'Bitter']}
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

  getRodeDraadRoundQuestions(roundName) {
    return this.rodeDraadRounds.get(roundName).questions;
  }

  getImageRoundWinnerText(roundName) {
    if (this.imageRounds.has(roundName)) {
      return this.imageRounds.get(roundName).winnerText;
    } else if(this.classicRounds.has(roundName)) {
      return this.classicRounds.get(roundName).winnerText;
    } else if(this.rodeDraadRounds.has(roundName)) {
      return this.rodeDraadRounds.get(roundName).winnerText;
    } else if(this.crosswordRounds.has(roundName)){
      return this.crosswordRounds.get(roundName).winnerText;
    }else {
      return this.puzzleRounds.get(roundName).winnerText;
    }
  }

  getImageRoundOmschrijving(roundName) {
    return this.imageRounds.get(roundName).omschrijving;
  }

  getCrosswordRoundOmschrijving(roundName) {
    return this.crosswordRounds.get(roundName).omschrijving;
  }

  getClassicRoundOmschrijving(rondeNaam) {
    return this.classicRounds.get(rondeNaam).omschrijving;
  }

  getRodeDraadRoundOmschrijving(rondeNaam: any) {
    return this.rodeDraadRounds.get(rondeNaam).omschrijving;
  }

  getPuzzleRoundOmschrijving(rondeNaam: any) {
    return this.puzzleRounds.get(rondeNaam).omschrijving;
  }

  getImageRoundNames() {
    return this.getRoundNames(this.imageRounds);
  }

  private getRoundNames(roundMap) {
    return Array.from(roundMap, ([key, value]) => {
      let imgLocation = value.imgUrl ? value.imgUrl : key;
      return {
        roundName: key,
        link: imgLocation,
        isUrl: value.imgUrl !== undefined
      };
    });
  }

  getClassicRoundNames() {
    return this.getRoundNames(this.classicRounds);
  }

  getCrosswordRoundNames() {
    return this.getRoundNames(this.crosswordRounds);
  }

  getRodeDraadRoundNames() {
    return this.getRoundNames(this.rodeDraadRounds);
  }

  getPuzzleRoundNames() {
    return this.getRoundNames(this.puzzleRounds);
  }

  getPuzzleRound(roundName: any) {
    return this.puzzleRounds.get(roundName);
  }
}
