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
