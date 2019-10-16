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
      id: '1',
      isActive: true,
      country: 'Belgium',
      city: 'Brussels',
      issue: 'xr/c02',
      postedBy: 'mrTaanstaafl',
      title: 'Impose penalties on companies not meeting their c02 targets',
      votes: 12315,
      comments: 231,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.',
      stages: [
        {
          id: '1',
          name: 'Defined'
        },
        {
          id: '2',
          name: 'Sent'
        },
        {
          id: '3',
          name: 'Denied'
        },
        {
          id: '4',
          name: 'Rebel'
        }
      ],
      content: [
        {
          id: '5',
          test: 'Background'
        },
        {
          id: '6',
          test: 'Cases'
        }
      ]
    },
    {
      id: '7',
      isActive: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'greyMatter',
      issue: 'xr/c02',
      title: 'Ration fossil fuels to a set limit/capita',
      votes: 11561,
      comments: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.',
      stages: [
        {
          id: '8',
          name: 'Defined'
        },
        {
          id: '9',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '10',
          test: 'Background'
        },
        {
          id: '11',
          test: 'Cases'
        }
      ]
    },
    {
      id: '12',
      isActive: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'drKnucklefinger',
      issue: 'xr/transport',
      title: 'Introduce tax breaks for railways',
      votes: 11222,
      comments: 126,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.',
      stages: [
        {
          id: '13',
          name: 'Defined'
        },
        {
          id: '14',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '15',
          test: 'Background'
        },
        {
          id: '16',
          test: 'Cases'
        }
      ]
    },
    {
      id: '17',
      isActive: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'butDontListenToMe',
      issue: 'xr/plastic',
      title: 'Introduce tax for plastic packaging',
      votes: 10124,
      comments: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.',
      stages: [
        {
          id: '18',
          name: 'Defined'
        },
        {
          id: '19',
          name: 'Sent'
        },
        {
          id: '20',
          name: 'Denied'
        },
        {
          id: '21',
          name: 'Rebel'
        }
      ],
      content: [
        {
          id: '22',
          test: 'Background'
        },
        {
          id: '23',
          test: 'Cases'
        }
      ]
    },
    {
      id: '24',
      isActive: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'mrFuzzyPants',
      issue: 'xr/plastic',
      title: 'Ban plastic bags in all supermarkets',
      votes: 10023,
      comments: 233,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in sem nunc. In lorem sem, scelerisque vel mauris in, consectetur blandit lorem. Sed malesuada a leo et tristique. Vestibulum volutpat sem id leo porttitor, id tincidunt mauris dapibus. Phasellus felis ex, faucibus vel auctor ut, rhoncus non tortor. Nulla scelerisque finibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet lacinia porta. Vivamus dapibus dapibus tempus. Nunc porta nisl turpis, a euismod sapien tempus non. Pellentesque tempus neque purus, eu semper mauris facilisis a. Nunc suscipit blandit quam, a aliquet libero dignissim at.',
      stages: [
        {
          id: '25',
          name: 'Defined'
        },
        {
          id: '26',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '27',
          test: 'Background'
        },
        {
          id: '28',
          test: 'Cases'
        }
      ]
    },
    {
      id: '29',
      isDiscussed: true,
      country: 'Belgium',
      city: 'Brussels',
      issue: 'xr/c02',
      postedBy: 'grrrrrrrr',
      title: 'Remove kalium from water cleaning',
      votes: 12315,
      comments: 231,
      description: 'Discussion goes here',
      stages: [
        {
          id: '30',
          name: 'Defined'
        },
        {
          id: '31',
          name: 'Sent'
        },
        {
          id: '32',
          name: 'Denied'
        },
        {
          id: '33',
          name: 'Rebel'
        }
      ],
      content: [
        {
          id: '34',
          test: 'Background'
        },
        {
          id: '35',
          test: 'Cases'
        }
      ]
    },
    {
      id: '36',
      isDiscussed: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'greyMatter',
      issue: 'xr/c02',
      title: 'Ration fossil fuels to a set limit/capita',
      votes: 11561,
      comments: 123,
      description: 'Discussion goes here',
      stages: [
        {
          id: '37',
          name: 'Defined'
        },
        {
          id: '38',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '39',
          test: 'Background'
        },
        {
          id: '40',
          test: 'Cases'
        }
      ]
    },
    {
      id: '41',
      isDiscussed: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'drKnucklefinger',
      issue: 'xr/transport',
      title: 'Introduce tax breaks for railways',
      votes: 11222,
      comments: 126,
      description: 'Discussion goes here',
      stages: [
        {
          id: '42',
          name: 'Defined'
        },
        {
          id: '43',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '44',
          test: 'Background'
        },
        {
          id: '45',
          test: 'Cases'
        }
      ]
    },
    {
      id: '46',
      isDiscussed: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'butDontListenToMe',
      issue: 'xr/plastic',
      title: 'Introduce tax for plastic packaging',
      votes: 10124,
      comments: 123,
      description: 'Discussion goes here',
      stages: [
        {
          id: '47',
          name: 'Defined'
        },
        {
          id: '48',
          name: 'Sent'
        },
        {
          id: '49',
          name: 'Denied'
        },
        {
          id: '50',
          name: 'Rebel'
        }
      ],
      content: [
        {
          id: '51',
          test: 'Background'
        },
        {
          id: '52',
          test: 'Cases'
        }
      ]
    },
    {
      id: '53',
      isDiscussed: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'mrFuzzyPants',
      issue: 'xr/plastic',
      title: 'Ban plastic bags in all supermarkets',
      votes: 10023,
      comments: 233,
      description: 'Discussion goes here',
      stages: [
        {
          id: '54',
          name: 'Defined'
        },
        {
          id: '55',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '56',
          test: 'Background'
        },
        {
          id: '57',
          test: 'Cases'
        }
      ]
    },
    {
      id: '58',
      isSuggested: true,
      country: 'Belgium',
      city: 'Brussels',
      issue: 'xr/c02',
      postedBy: 'mrroooaaar',
      title: 'This is a test',
      votes: 12315,
      comments: 231,
      description: 'yay',
      stages: [
        {
          id: '59',
          name: 'Defined'
        },
        {
          id: '60',
          name: 'Sent'
        },
        {
          id: '61',
          name: 'Denied'
        },
        {
          id: '62',
          name: 'Rebel'
        }
      ],
      content: [
        {
          id: '63',
          test: 'Background'
        },
        {
          id: '64',
          test: 'Cases'
        }
      ]
    },
    {
      id: '65',
      isSuggested: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'greyMatter',
      issue: 'xr/c02',
      title: 'Ration fossil fuels to a set limit/capita',
      votes: 11561,
      comments: 123,
      description: 'yay',
      stages: [
        {
          id: '66',
          name: 'Defined'
        },
        {
          id: '67',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '68',
          test: 'Background'
        },
        {
          id: '69',
          test: 'Cases'
        }
      ]
    },
    {
      id: '70',
      isSuggested: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'drKnucklefinger',
      issue: 'xr/transport',
      title: 'Introduce tax breaks for railways',
      votes: 11222,
      comments: 126,
      description: 'yay',
      stages: [
        {
          id: '71',
          name: 'Defined'
        },
        {
          id: '72',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '73',
          test: 'Background'
        },
        {
          id: '74',
          test: 'Cases'
        }
      ]
    },
    {
      id: '75',
      isSuggested: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'butDontListenToMe',
      issue: 'xr/plastic',
      title: 'Introduce tax for plastic packaging',
      votes: 10124,
      comments: 123,
      description: 'yay',
      stages: [
        {
          id: '76',
          name: 'Defined'
        },
        {
          id: '77',
          name: 'Sent'
        },
        {
          id: '78',
          name: 'Denied'
        },
        {
          id: '79',
          name: 'Rebel'
        }
      ],
      content: [
        {
          id: '80',
          test: 'Background'
        },
        {
          id: '81',
          test: 'Cases'
        }
      ]
    },
    {
      id: '82',
      isSuggested: true,
      country: 'Belgium',
      city: 'Brussels',
      postedBy: 'mrFuzzyPants',
      issue: 'xr/plastic',
      title: 'Ban plastic bags in all supermarkets',
      votes: 10023,
      comments: 233,
      description: 'yay',
      stages: [
        {
          id: '83',
          name: 'Defined'
        },
        {
          id: '84',
          name: 'Sent'
        }
      ],
      content: [
        {
          id: '85',
          test: 'Background'
        },
        {
          id: '86',
          test: 'Cases'
        }
      ]
    }
  ]
};
