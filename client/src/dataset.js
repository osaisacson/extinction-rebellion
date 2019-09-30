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

  active: [
    {
      id: "1",
      title: "Impose penalties on companies not meeting their c02 targets",
      votes: 12315,
      description: "yay",
      stages: [
        {
          id: "1",
          name: "Defined"
        },
        {
          id: "2",
          name: "Sent"
        },
        {
          id: "3",
          name: "Denied",
          class: "active"
        }
      ],
      content: [
        {
          id: "1",
          test: "Background"
        },
        {
          id: "2",
          test: "Cases"
        }
      ]
    },
    {
      id: "2",
      title: "Ration fossil fuels to a set limit/capita",
      votes: 11561,
      description: "yay",
      stages: [
        {
          id: "1",
          name: "Defined"
        },
        {
          id: "2",
          name: "Sent"
        }
      ],
      content: [
        {
          id: "1",
          test: "Background"
        },
        {
          id: "2",
          test: "Cases"
        }
      ]
    },
    {
      id: "3",
      title: "Introduce tax breaks for railways",
      votes: 11222,
      description: "yay",
      stages: [
        {
          id: "1",
          name: "Defined"
        },
        {
          id: "2",
          name: "Sent"
        }
      ],
      content: [
        {
          id: "1",
          test: "Background"
        },
        {
          id: "2",
          test: "Cases"
        }
      ]
    },
    {
      id: "4",
      title: "Introduce tax for plastic packaging",
      votes: 10124,
      description: "yay",
      stages: [
        {
          id: "1",
          name: "Defined"
        },
        {
          id: "2",
          name: "Sent"
        },
        {
          id: "3",
          name: "Denied"
        }
      ],
      content: [
        {
          id: "1",
          test: "Background"
        },
        {
          id: "2",
          test: "Cases"
        }
      ]
    },
    {
      id: "5",
      title: "Ban plastic bags in all supermarkets",
      votes: 10023,
      description: "yay",
      stages: [
        {
          id: "1",
          name: "Defined"
        },
        {
          id: "2",
          name: "Sent"
        }
      ],
      content: [
        {
          id: "1",
          test: "Background"
        },
        {
          id: "2",
          test: "Cases"
        }
      ]
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
