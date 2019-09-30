import vatten from "./vatten.png";
import fisk from "./fisk.png";
import jord from "./jord.png";
import naringslosning from "./naringslosning.png";
import odling from "./odling.png";
import odlingslampor from "./odlingslampor.png";
import regn from "./regn.png";
import solel from "./solel.png";

window.Dataset = {
  //Factory to create an incremented set of numbers
  increment: (function(lowest, highest) {
    var set = [];
    for (var i = lowest; i <= highest; i++) {
      set.push(i);
      set.push(i + 0.5); //incrementation step
    }

    return set;
  })(0, 10), //starts at 0, ends at 10

  choices: [
    {
      id: "1",
      img:
        "https://images.unsplash.com/photo-1536630596251-b12ba0d9f7d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Föreslagen ny gröda: Mikroblad!",
      description:
        "Microblad är en relativt ny företeelse i Sverige - det är plantor som skördas när det första paret med riktiga blad syns. De har ett väldigt högt näringsvärde med studier som visat att dessa plantor trots sin ringa storlek har ett 4-40 gånger högre näringsinnehåll än den färdigvuxna salladen (beroende på näringsämne)."
    },
    {
      id: "2",
      img:
        "https://images.unsplash.com/photo-1533650936805-912836eda0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      title: "Föreslagen ny aktivitet: Bilfria Tisdagar!",
      description:
        "Om vi alla tar bilen på Tisdagar skulle vi minska vårt fotavtryck med 157kg c02/år. Vad säger ni? Ska vi?"
    }
  ],

  production: [
    {
      id: "1",
      icon: vatten,
      title: "Vattenåtervinning",
      unit: "liter",
      lastMonth: 122542,
      thisMonthStart: 12303,
      thisMonthEnd: 13370,
      thisMonthDuration: 17000,
      thisYearStart: 1422092,
      thisYearEnd: 1422230,
      thisYearDuration: 2000,
      quoteBefore: "Vilket betyder att vi sparat ",
      quoteStart: 1422092,
      quoteEnd: 1422230,
      quoteDuration: 2000,
      quoteUnit: "liter",
      quoteAfter: " hittills i år på att återvinna eget vatten"
    },
    {
      id: "2",
      icon: regn,
      title: "Regnvatten",
      unit: "liter",
      lastMonth: 56340,
      thisMonthStart: 0,
      thisMonthEnd: 9453,
      thisMonthDuration: 3,
      thisYearStart: 0,
      thisYearEnd: 340562,
      thisYearDuration: 3,
      quoteBefore: "Och genom det drygat ut vår vattenförsöjning i år med ",
      quoteStart: 0,
      quoteEnd: 26,
      quoteDuration: 3,
      quoteUnit: "%",
      quoteAfter: ""
    },
    {
      id: "3",
      icon: fisk,
      title: "Fisk",
      unit: "kg",
      lastMonth: 470,
      thisMonthStart: 0,
      thisMonthEnd: 380,
      thisMonthDuration: 3,
      thisYearStart: 0,
      thisYearEnd: 3240,
      thisYearDuration: 3,
      quoteBefore: "Vilket motsvarar ett värde av ",
      quoteStart: 0,
      quoteEnd: 675000,
      quoteDuration: 3,
      quoteUnit: "kr",
      quoteAfter: ""
    },
    {
      id: "4",
      icon: odling,
      title: "Odling",
      unit: "kg",
      lastMonth: 612,
      thisMonthStart: 0,
      thisMonthEnd: 525,
      thisMonthDuration: 3,
      thisYearStart: 0,
      thisYearEnd: 4710,
      thisYearDuration: 3,
      quoteBefore: "Och genom det minskat vår gemensamma CO2 med ",
      quoteStart: 0,
      quoteEnd: 250,
      quoteDuration: 3,
      quoteUnit: "kg",
      quoteAfter: ". Läs mer om detta här"
    },
    {
      id: "5",
      icon: naringslosning,
      title: "Näringslösning",
      unit: "liter",
      lastMonth: 2770,
      thisMonthStart: 0,
      thisMonthEnd: 1453,
      thisMonthDuration: 3,
      thisYearStart: 0,
      thisYearEnd: 21000,
      thisYearDuration: 3,
      quoteBefore: "Att köpa motsvarande mängd skulle kostat ",
      quoteStart: 0,
      quoteEnd: 5200,
      quoteDuration: 3,
      quoteUnit: "kr",
      quoteAfter: ""
    },
    {
      id: "6",
      icon: jord,
      title: "Jord",
      unit: "kg",
      lastMonth: 41,
      thisMonthStart: 0,
      thisMonthEnd: 23,
      thisMonthDuration: 3,
      thisYearStart: 0,
      thisYearEnd: 145,
      thisYearDuration: 3,
      quoteBefore: "Skapat av ",
      quoteStart: 0,
      quoteEnd: 331,
      quoteDuration: 3,
      quoteUnit: "kg",
      quoteAfter: " råmaterial"
    },
    {
      id: "7",
      icon: solel,
      title: "Energiproduktion",
      unit: "kWh",
      lastMonth: 5121,
      thisMonthStart: 3100,
      thisMonthEnd: 3251,
      thisMonthDuration: 2000,
      thisYearStart: 70000,
      thisYearEnd: 74000,
      thisYearDuration: 16000,
      quoteBefore: "Motvarande laddningen av ",
      quoteStart: 0,
      quoteEnd: 123,
      quoteDuration: 3,
      quoteUnit: "elbilar",
      quoteAfter: " dagligen i ett år"
    },
    {
      id: "8",
      icon: solel,
      title: "Energikonsumtion",
      unit: "kWh",
      lastMonth: 8421,
      thisMonthStart: 0,
      thisMonthEnd: 5982,
      thisMonthDuration: 3,
      thisYearStart: 160000,
      thisYearEnd: 180000,
      thisYearDuration: 16000,
      quoteBefore: "Motvarande ",
      quoteStart: 1234,
      quoteEnd: 2245,
      quoteDuration: 2000,
      quoteUnit: "elbilar",
      quoteAfter: " lampor konstant tända i ett år"
    },
    {
      id: "9",
      icon: odlingslampor,
      title: "Sollampor",
      unit: "kWh",
      lastMonth: 5121,
      thisMonthStart: 3251,
      thisMonthEnd: 4182,
      thisMonthDuration: 19000,
      thisYearStart: 121500,
      thisYearEnd: 122000,
      thisYearDuration: 4000,
      quoteBefore: "Varav ",
      quoteStart: 0,
      quoteEnd: 43,
      quoteDuration: 3,
      quoteUnit: "%",
      quoteAfter: " är täckt av vår egen elproduktion"
    }
  ],

  harvest: [
    {
      id: "1",
      img:
        "https://images.unsplash.com/photo-1508595165502-3e2652e5a405?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      title: "Basilika",
      subtitle: "Extra söt denna veckan!",
      clickedText: "Redo att hämtas imorgon 12:00",
      class: "bokad",
      lastUpdated: "2 mins ago"
    },
    {
      id: "2",
      img:
        "https://images.unsplash.com/photo-1508061461508-cb18c242f556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      title: "Pak Choi",
      clickedText: "Redo att hämtas på fredag 12:00",
      class: "bokad",
      lastUpdated: "3 hours ago"
    },
    {
      id: "3",
      img:
        "https://images.unsplash.com/photo-1528796940112-4979b4a98424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      title: "Koriander",
      clickedText: "Redo att hämtas på torsdag 18:00",
      class: "bokad",
      lastUpdated: "yesterday"
    }
  ],

  neighbours: [
    {
      id: "1",
      profileImg:
        "https://i1.wp.com/linuxcreations.tips/wp-content/uploads/2019/01/migliorare-foto.jpg?resize=160%2C160&ssl=1",
      name: "May Brunby",
      description: "På fjärde våningen and loving it!"
    },
    {
      id: "2",
      profileImg:
        "https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg",
      name: "Pontus Meyer",
      description: "På andra våningen and loving it!"
    },
    {
      id: "3",
      profileImg:
        "https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg",
      name: "Carl Moss",
      description: "På första våningen and loving it!"
    },
    {
      id: "4",
      profileImg:
        "https://content-static.upwork.com/blog/uploads/sites/4/2014/10/27173913/BLOG-Upwork-profile-photo-face.png",
      name: "Fatima Scharman",
      description: "På första våningen and loving it!"
    }
  ],

  notifications: [
    {
      id: "1",
      description: "Basilika redo att hämtas imorgon 12:00!",
      class: "bokad"
    },
    {
      id: "2",
      description: "Din vattenkonsumtion är högre än vanligt.",
      class: "warning"
    }
  ]
};
