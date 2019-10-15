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
      issue: "r/c02",
      postedBy: "phDing",
      title: "Impose penalties on companies not meeting their c02 targets",
      votes: 12315,
      comments: 231,
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
      postedBy: "howDareYou",
      issue: "r/c02",
      title: "Ration fossil fuels to a set limit/capita",
      votes: 11561,
      comments: 123,
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
      postedBy: "theVaughn",
      issue: "r/transport",
      title: "Introduce tax breaks for railways",
      votes: 11222,
      comments: 126,
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
      postedBy: "butDontListenToMe",
      issue: "r/plastic",
      title: "Introduce tax for plastic packaging",
      votes: 10124,
      comments: 123,
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
      postedBy: "mrFuzzyPants",
      issue: "r/plastic",
      title: "Ban plastic bags in all supermarkets",
      votes: 10023,
      comments: 233,
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
  ]
};
