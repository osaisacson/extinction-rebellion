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

  cards: [
    {
      id: "1",
      isRebel: true,
      country: "Belgium",
      city: "Brussels",
      issue: "xr/c02",
      postedBy: "mrTaanstaafl",
      votes: 12315,
      comments: 231,
      timeSent: "46 days ago",
      representative: "John Smith",
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ],
      title: "Impose penalties on companies not meeting their c02 targets",
      purpose:
        "A significant reduction of c02 released by the commercial sector in Belgium",
      background:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.",
      affectedRegion: "Belgium",
      successIndicators: "c02 reduced by 12% in Belgium",
      appendices: [
        {
          id: "5",
          title: "Majority of European firms have no CO2 reduction targets",
          href:
            "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
          source: "The Guardian",
          date: "19 Feb 2019"
        },
        {
          id: "6",
          title:
            "Vast majority of CO2 emitting firms will not meet climate targets",
          href:
            "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
          source: "Engineering & Technology",
          date: "10 July 2019"
        }
      ]
    },
    {
      id: "7",
      isRebel: true,
      country: "Spain",
      city: "Barcelona",
      postedBy: "greyMatter",
      issue: "xr/c02",
      votes: 11561,
      comments: 123,
      timeSent: "72 days ago",
      title: "Ration fossil fuels to a set limit/capita",
      representative: "Johnny Paycheck",
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ],
      appendices: [
        {
          id: "5",
          title: "Majority of European firms have no CO2 reduction targets",
          href:
            "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
          source: "The Guardian",
          date: "19 Feb 2019"
        },
        {
          id: "6",
          title:
            "Vast majority of CO2 emitting firms will not meet climate targets",
          href:
            "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
          source: "Engineering & Technology",
          date: "10 July 2019"
        }
      ]
    },
    {
      id: "12",
      isActive: true,
      country: "Belgium",
      city: "Brussels",
      postedBy: "drKnucklefinger",
      issue: "xr/transport",
      title: "Introduce tax breaks for railways",
      votes: 11222,
      comments: 126,
      timeSent: "23 days ago",
      representative: "Clara Bow",
      stages: [
        {
          id: "13",
          name: "Defined"
        },
        {
          id: "14",
          name: "Sent"
        }
      ],
      appendices: [
        {
          id: "5",
          title: "Majority of European firms have no CO2 reduction targets",
          href:
            "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
          source: "The Guardian",
          date: "19 Feb 2019"
        },
        {
          id: "6",
          title:
            "Vast majority of CO2 emitting firms will not meet climate targets",
          href:
            "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
          source: "Engineering & Technology",
          date: "10 July 2019"
        }
      ]
    },
    {
      id: "17",
      isActive: true,
      country: "Sweden",
      city: "Stockholm",
      postedBy: "butDontListenToMe",
      issue: "xr/plastic",
      title: "Introduce tax for plastic packaging",
      votes: 10124,
      comments: 123,
      timeSent: "16 days ago",
      representative: "Maura Grim",
      stages: [
        {
          id: "18",
          name: "Defined"
        },
        {
          id: "19",
          name: "Sent"
        },
        {
          id: "20",
          name: "In court"
        }
      ],
      appendices: [
        {
          id: "5",
          title: "Majority of European firms have no CO2 reduction targets",
          href:
            "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
          source: "The Guardian",
          date: "19 Feb 2019"
        },
        {
          id: "6",
          title:
            "Vast majority of CO2 emitting firms will not meet climate targets",
          href:
            "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
          source: "Engineering & Technology",
          date: "10 July 2019"
        }
      ]
    },
    {
      id: "24",
      isActive: true,
      country: "Belgium",
      city: "Brussels",
      postedBy: "mrFuzzyPants",
      issue: "xr/plastic",
      title: "Ban plastic bags in all supermarkets",
      votes: 10023,
      comments: 233,
      timeSent: "19 days ago",
      representative: "Benjamin Harrods",
      stages: [
        {
          id: "25",
          name: "Defined"
        },
        {
          id: "26",
          name: "Sent"
        }
      ],
      appendices: [
        {
          id: "5",
          title: "Majority of European firms have no CO2 reduction targets",
          href:
            "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
          source: "The Guardian",
          date: "19 Feb 2019"
        },
        {
          id: "6",
          title:
            "Vast majority of CO2 emitting firms will not meet climate targets",
          href:
            "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
          source: "Engineering & Technology",
          date: "10 July 2019"
        }
      ]
    },
    {
      id: "29",
      isDiscussed: true,
      country: "Sweden",
      city: "Gothenburg",
      issue: "xr/c02",
      postedBy: "grrrrrrrr",
      title: "Remove kalium from water cleaning",
      votes: 12315,
      comments: 231,
      representative: "Yvette Ungers"
    },
    {
      id: "36",
      isDiscussed: true,
      country: "Belgium",
      city: "Brussels",
      postedBy: "greyMatter",
      issue: "xr/c02",
      title: "Ration fossil fuels to a set limit/capita",
      votes: 11561,
      comments: 123
    },
    {
      id: "41",
      isDiscussed: true,
      country: "Belgium",
      city: "Brussels",
      postedBy: "drKnucklefinger",
      issue: "xr/transport",
      title: "Introduce tax breaks for railways",
      votes: 11222,
      comments: 126,
      representative: "Michael Schultz"
    },
    {
      id: "46",
      isDiscussed: true,
      country: "UK",
      city: "London",
      postedBy: "butDontListenToMe",
      issue: "xr/plastic",
      title: "Introduce tax for plastic packaging",
      votes: 10124,
      comments: 123
    },
    {
      id: "53",
      isDiscussed: true,
      country: "UK",
      city: "London",
      postedBy: "mrFuzzyPants",
      issue: "xr/plastic",
      title: "Ban plastic bags in all supermarkets",
      votes: 10023,
      comments: 233
    }
  ],

  stories: [
    {
      id: "1",
      country: "Belgium",
      city: "Brussels",
      img:
        "https://images.unsplash.com/photo-1550481010-dfad748ad5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
      pics: [
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ]
    },
    {
      id: "2",
      country: "UK",
      city: "London",
      img:
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
      pics: [
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ]
    },
    {
      id: "3",
      country: "Sweden",
      city: "Stockholm",
      img:
        "https://images.unsplash.com/photo-1536788589593-bb9e9a2d9917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      pics: [
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ]
    },
    {
      id: "4",
      country: "Spain",
      city: "Barcelona",
      img:
        "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=961&q=80",
      pics: [
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ]
    },
    {
      id: "5",
      country: "Sweden",
      city: "Gothenburg",
      img:
        "https://images.unsplash.com/photo-1514229917620-e7041bcb7d56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      pics: [
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ]
    },
    {
      id: "6",
      country: "Spain",
      city: "Madrid",
      img:
        "https://images.unsplash.com/photo-1565447162108-5a44f22d5364?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      pics: [
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
        },
        {
          id: "4",
          name: "Rebel"
        }
      ]
    }
  ]
};
