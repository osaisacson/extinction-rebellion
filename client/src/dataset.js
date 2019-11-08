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
      isSent: true,
      isRebel: true,
      petitionId: "xr102",
      country: "Belgium",
      city: "Brussels",
      postedBy: "greyMatter",
      votes: 11561,
      noOfContributors: 22,
      noOfEdits: 34,
      representative: "Johan Eggers",
      timeSent: "57 days ago",
      status: "Denied - Needs urgent action",
      title: "Impose penalties on companies not meeting their c02 targets",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Impose penalties on companies not meeting their c02 targets",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "A significant reduction of c02 released by the commercial sector in Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "c02 reduced by 12% in Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ],
      actions: [
        {
          id: "00",
          date: "26 Dec",
          time: "10:00 - 14:00",
          joined: 392,
          details: "Meet outside the parliament"
        },
        {
          id: "01",
          date: "27 Dec",
          time: "14:00 - 18:00",
          joined: 351,
          details: "Bring your bikes, lets block the roads"
        }
      ]
    },
    {
      id: "2",
      isSent: true,
      isRebel: true,
      petitionId: "xr104",
      country: "UK",
      city: "London",
      postedBy: "greyMatter",
      votes: 11561,
      noOfContributors: 28,
      noOfEdits: 39,
      representative: "Knut Loman",
      timeSent: "46 days ago",
      status: "Denied - Entering next session in 2 days",
      title: "Ration fossil fuels to a set limit/capita",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Ration fossil fuels to a set limit/capita",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "UK",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "Reduce the use of fossil fuels in London by 21%",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ],
      actions: [
        {
          id: "02",
          date: "1 Jan",
          time: "10:00 - 14:00",
          joined: 298,
          details: "Meet outside the parliament"
        },
        {
          id: "03",
          date: "2 Jan",
          time: "14:00 - 18:00",
          joined: 216,
          details: "Bring your bikes, lets block the roads"
        }
      ]
    },
    {
      id: "3",
      isSent: true,
      petitionId: "xr108",
      country: "Belgium",
      city: "Brussels",
      postedBy: "Michael Grim",
      votes: 11561,
      noOfContributors: 15,
      noOfEdits: 32,
      representative: "Clara Bow",
      timeSent: "32 days ago",
      status: "In parliament",
      title: "Ban plastic bags in all central Brussel supermarkets",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Ration fossil fuels to a set limit/capita",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "Reduce the use of fossil fuels in Barcelona by 21%",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ]
    },
    {
      id: "4",
      isSent: true,
      petitionId: "xr119",
      country: "Sweden",
      city: "Stockholm",
      postedBy: "greyMatter",
      votes: 11561,
      noOfContributors: 32,
      noOfEdits: 36,
      representative: "Hans Snell",
      timeSent: "21 days ago",
      status: "In parliament",
      title: "Ration fossil fuels to a set limit/capita",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Ration fossil fuels to a set limit/capita",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "Reduce the use of fossil fuels in Barcelona by ",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ]
    },
    {
      id: "5",
      isSent: true,
      petitionId: "xr120",
      country: "Belgium",
      city: "Brussels",
      postedBy: "greyMatter",
      votes: 11561,
      noOfContributors: 26,
      noOfEdits: 41,
      representative: "Ulf Hans",
      timeSent: "46 days ago",
      status: "In parliament",
      title: "Ration fossil fuels to a set limit/capita",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Ration fossil fuels to a set limit/capita",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "Reduce the use of fossil fuels in Barcelona by ",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ]
    },
    {
      id: "6",
      isDiscussed: true,
      petitionId: "xr121",
      country: "Belgium",
      city: "Brussels",
      postedBy: "greyMatter",
      votes: 2321,
      comments: 12,
      status: "Being defined",
      title: "Ration fossil fuels to a set limit/capita",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Ration fossil fuels to a set limit/capita",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "Reduce the use of fossil fuels in Barcelona by ",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ]
    },
    {
      id: "7",
      isDiscussed: true,
      petitionId: "xr124",
      country: "UK",
      city: "London",
      postedBy: "greyMatter",
      votes: 1367,
      comments: 12,
      status: "Being defined",
      title: "Ration fossil fuels to a set limit/capita",
      description: [
        {
          id: "1",
          section: "Title",
          text: "Ration fossil fuels to a set limit/capita",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Title section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "2",
          section: "Summary",
          text:
            "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added summary section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "3",
          section: "Background",
          text: "Here is the background",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Background section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "4",
          section: "Affected Region",
          text: "Belgium",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Region section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        },
        {
          id: "5",
          section: "Success Indicators",
          text: "Reduce the use of fossil fuels in Barcelona by ",
          edits: [
            {
              id: "1",
              date: "2 hours ago",
              name: "Sara Johansson, PhD",
              title: "Added Indicator section",
              votes: "21",
              edit:
                "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
            },
            {
              id: "2",
              date: "4 hours ago",
              name: "Moritz Movits, PhD",
              title: "Adding something more on the main issue here",
              votes: "15",
              edit: "This is the edit"
            }
          ]
        }
      ]
    }

    // {
    //   id: "1",
    //   isRebel: true,
    //   country: "Belgium",
    //   city: "Brussels",
    //   issue: "xr/c02",
    //   postedBy: "mrTaanstaafl",
    //   votes: 12315,
    //   comments: 41,
    //   timeSent: "46 days ago",
    //   representative: "John Smith",
    //   status: "Denied",
    //   title: "Impose penalties on companies not meeting their c02 targets",
    //   summary:
    //     "A significant reduction of c02 released by the commercial sector in Belgium",
    //   background:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.",
    //   affectedRegion: "Belgium",
    //   successIndicators: "c02 reduced by 12% in Belgium",
    //   references: [
    //     {
    //       id: "5",
    //       title: "Majority of European firms have no CO2 reduction targets",
    //       href:
    //         "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
    //       source: "The Guardian",
    //       date: "19 Feb 2019"
    //     },
    //     {
    //       id: "6",
    //       title:
    //         "Vast majority of CO2 emitting firms will not meet climate targets",
    //       href:
    //         "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
    //       source: "Engineering & Technology",
    //       date: "10 July 2019"
    //     }
    //   ]
    // },
    // {
    //   id: "7",
    //   isRebel: true,
    //   country: "Spain",
    //   city: "Barcelona",
    //   postedBy: "Jose Manuel Santos",
    //   issue: "xr/c02",
    //   votes: 11561,
    //   comments: 35,
    //   timeSent: "72 days ago",
    //   representative: "Miguel Ferrer",
    //   status: "Denied",
    //   title: "Ration fossil fuels to a set limit/capita",
    //   summary:
    //     "Limit the individual use of fossil fuels to match the needed c02 reduction rate.",
    //   background:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.",
    //   affectedRegion: "Belgium",
    //   successIndicators: "Reduce the use of fossil fuels in Barcelona by 21%",
    //   references: [
    //     {
    //       id: "5",
    //       title: "Energy statistics - an overview",
    //       href:
    //         "https://ec.europa.eu/eurostat/statistics-explained/pdfscache/29046.pdf",
    //       source: "European Commission",
    //       date: "18 March 2019"
    //     },
    //     {
    //       id: "6",
    //       title:
    //         "Traversing the mountaintop: world fossil fuel production to 2050",
    //       href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2781836/",
    //       source: "National Library of Medicine, National Institutes of Health",
    //       date: "10 July 2019"
    //     }
    //   ]
    // },
    // {
    //   id: "12",
    //   isSent: true,
    //   country: "Belgium",
    //   city: "Brussels",
    //   postedBy: "drKnucklefinger",
    //   issue: "xr/transport",
    //   title: "Introduce tax breaks for railways",
    //   votes: 11222,
    //   comments: 15,
    //   timeSent: "23 days ago",
    //   representative: "Clara Bow",
    //   status: "In parliament",
    //   references: [
    //     {
    //       id: "5",
    //       title: "Majority of European firms have no CO2 reduction targets",
    //       href:
    //         "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
    //       source: "The Guardian",
    //       date: "19 Feb 2019"
    //     },
    //     {
    //       id: "6",
    //       title:
    //         "Vast majority of CO2 emitting firms will not meet climate targets",
    //       href:
    //         "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
    //       source: "Engineering & Technology",
    //       date: "10 July 2019"
    //     }
    //   ]
    // },
    // {
    //   id: "17",
    //   isSent: true,
    //   country: "Sweden",
    //   city: "Stockholm",
    //   postedBy: "butDontListenToMe",
    //   issue: "xr/plastic",
    //   title: "Introduce tax for plastic packaging",
    //   votes: 10124,
    //   comments: 14,
    //   timeSent: "16 days ago",
    //   representative: "Maura Grim",
    //   status: "In parliament",
    //   references: [
    //     {
    //       id: "5",
    //       title: "Majority of European firms have no CO2 reduction targets",
    //       href:
    //         "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
    //       source: "The Guardian",
    //       date: "19 Feb 2019"
    //     },
    //     {
    //       id: "6",
    //       title:
    //         "Vast majority of CO2 emitting firms will not meet climate targets",
    //       href:
    //         "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
    //       source: "Engineering & Technology",
    //       date: "10 July 2019"
    //     }
    //   ]
    // },
    // {
    //   id: "24",
    //   isSent: true,
    //   country: "Belgium",
    //   city: "Brussels",
    //   postedBy: "Elhar Muminovic",
    //   issue: "xr/plastic",
    //   title: "Ban plastic bags in all supermarkets",
    //   votes: 10023,
    //   comments: 23,
    //   timeSent: "19 days ago",
    //   representative: "Benjamin Harrods",
    //   status: "In parliament",
    //   references: [
    //     {
    //       id: "5",
    //       title: "Majority of European firms have no CO2 reduction targets",
    //       href:
    //         "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
    //       source: "The Guardian",
    //       date: "19 Feb 2019"
    //     },
    //     {
    //       id: "6",
    //       title:
    //         "Vast majority of CO2 emitting firms will not meet climate targets",
    //       href:
    //         "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
    //       source: "Engineering & Technology",
    //       date: "10 July 2019"
    //     }
    //   ]
    // },
    // {
    //   id: "29",
    //   isDiscussed: true,
    //   country: "Sweden",
    //   city: "Gothenburg",
    //   issue: "xr/c02",
    //   postedBy: "grrrrrrrr",
    //   title: "Remove kalium from water cleaning",
    //   votes: 12315,
    //   comments: 11,
    //   representative: "Yvette Ungers",
    //   status: "Being defined",
    //   edits: [
    //     {
    //       id: "1",
    //       section: "Summary",
    //       date: "2 hours ago",
    //       name: "Sara Johansson, PhD",
    //       title: "Lets make the summary more summarized",
    //       votes: "21",
    //       edit: "This is the edit"
    //     },
    //     {
    //       id: "2",
    //       section: "Indicators",
    //       date: "4 hours ago",
    //       name: "Moritz Movits, PhD",
    //       title: "More accurate measurements",
    //       votes: "26",
    //       edit: "This is the edit"
    //     }
    //   ]
    // },
    // {
    //   id: "36",
    //   isDiscussed: true,
    //   country: "Belgium",
    //   city: "Brussels",
    //   postedBy: "greyMatter",
    //   issue: "xr/c02",
    //   votes: 11561,
    //   comments: 12,
    //   status: "Being defined",
    //   description: [
    //     {
    //       id: "1",
    //       section: "Title",
    //       text: "Ration fossil fuels to a set limit/capita"
    //     },
    //     {
    //       id: "2",
    //       section: "Summary",
    //       text:
    //         "Limit the individual use of fossil fuels to match the needed c02 reduction rate."
    //     },
    //     {
    //       id: "3",
    //       section: "Background",
    //       text: "Here is the background"
    //     },
    //     {
    //       id: "4",
    //       section: "Affected Region",
    //       text: "Belgium"
    //     },
    //     {
    //       id: "5",
    //       section: "Success Indicators",
    //       text: "Reduce the use of fossil fuels in Barcelona by "
    //     }
    //   ],
    //   references: [
    //     {
    //       id: "1",
    //       title: "Majority of European firms have no CO2 reduction targets",
    //       href:
    //         "https://www.theguardian.com/environment/2019/feb/19/majority-of-european-firms-have-no-co2-reduction-targets",
    //       source: "The Guardian",
    //       date: "19 Feb 2019"
    //     },
    //     {
    //       id: "2",
    //       title:
    //         "Vast majority of CO2 emitting firms will not meet climate targets",
    //       href:
    //         "https://eandt.theiet.org/content/articles/2019/07/vast-majority-of-co2-emitting-firms-will-not-meet-climate-targets-report-finds/",
    //       source: "Engineering & Technology",
    //       date: "10 July 2019"
    //     }
    //   ],
    //   edits: [
    //     {
    //       id: "1",
    //       section: "Summary",
    //       date: "2 hours ago",
    //       name: "Sara Johansson, PhD",
    //       title: "Added summary section",
    //       votes: "21",
    //       edit:
    //         "Limit the increased individual use of fossil fuels to match the much needed c02 reduction rate"
    //     },
    //     {
    //       id: "2",
    //       section: "Summary",
    //       date: "4 hours ago",
    //       name: "Moritz Movits, PhD",
    //       title: "Adding something more on the main issue here",
    //       votes: "15",
    //       edit: "This is the edit"
    //     },
    //     {
    //       id: "3",
    //       section: "Indicators",
    //       date: "4 hours ago",
    //       name: "Moritz Movits, PhD",
    //       title: "More accurate measurements",
    //       votes: "26",
    //       edit: "This is the edit"
    //     }
    //   ]
    // },
    // {
    //   id: "41",
    //   isDiscussed: true,
    //   country: "Belgium",
    //   city: "Brussels",
    //   postedBy: "drKnucklefinger",
    //   issue: "xr/transport",
    //   title: "Introduce tax breaks for railways",
    //   votes: 11222,
    //   comments: 16,
    //   representative: "Michael Schultz",
    //   status: "Being defined",
    //   edits: [
    //     {
    //       id: "1",
    //       section: "Summary",
    //       date: "2 hours ago",
    //       name: "Sara Johansson, PhD",
    //       title: "Lets make the summary more summarized",
    //       votes: "21",
    //       edit: "This is the edit"
    //     },
    //     {
    //       id: "2",
    //       section: "Indicators",
    //       date: "4 hours ago",
    //       name: "Moritz Movits, PhD",
    //       title: "More accurate measurements",
    //       votes: "26",
    //       edit: "This is the edit"
    //     }
    //   ]
    // },
    // {
    //   id: "46",
    //   isDiscussed: true,
    //   country: "UK",
    //   city: "London",
    //   postedBy: "butDontListenToMe",
    //   issue: "xr/plastic",
    //   title: "Introduce tax for plastic packaging",
    //   votes: 10124,
    //   comments: 14,
    //   status: "Being defined",
    //   edits: [
    //     {
    //       id: "1",
    //       section: "Summary",
    //       date: "2 hours ago",
    //       name: "Sara Johansson, PhD",
    //       title: "Lets make the summary more summarized",
    //       votes: "21",
    //       edit: "This is the edit"
    //     },
    //     {
    //       id: "2",
    //       section: "Indicators",
    //       date: "4 hours ago",
    //       name: "Moritz Movits, PhD",
    //       title: "More accurate measurements",
    //       votes: "26",
    //       edit: "This is the edit"
    //     }
    //   ]
    // },
    // {
    //   id: "53",
    //   isDiscussed: true,
    //   country: "UK",
    //   city: "London",
    //   postedBy: "mrFuzzyPants",
    //   issue: "xr/plastic",
    //   title: "Ban plastic bags in all supermarkets",
    //   votes: 10023,
    //   comments: 14,
    //   status: "Being defined",
    //   edits: [
    //     {
    //       id: "1",
    //       section: "Summary",
    //       date: "2 hours ago",
    //       name: "Sara Johansson, PhD",
    //       title: "Lets make the summary more summarized",
    //       votes: "21",
    //       edit: "This is the edit"
    //     },
    //     {
    //       id: "2",
    //       section: "Indicators",
    //       date: "4 hours ago",
    //       name: "Moritz Movits, PhD",
    //       title: "More accurate measurements",
    //       votes: "26",
    //       edit: "This is the edit"
    //     }
    //   ]
    // }
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
