// creating an array and passing the number, questions, options, and answers
let questions = [
    //---------------------English---------------------
    {
    numb: 1,
    question: "All of us......arrived yesterday.",
    answer: "had",
    options: [
      "has",
      "have",
      "had",
      "none"
    ]
  },
    {
    numb: 2,
    question: "He is sitting ______an armchair and I am sitting ______the chair.",
    answer: "in, on",
    options: [
      "in, on",
      "on, at",
      "in, in",
      "with, by"
    ]
  },
    {
    numb: 3,
    question: "I went ____ a walk early ___ the morning with pimple___ my face.",
    answer: "for, in, on",
    options: [
        " on, in, on",
        "on, in, at",
        "on, at, on",           
        "for, in, on"
    ]
  },
    {
    numb: 4,
    question: "So you are working very hard,________?",
    answer: "aren't you?",
    options: [
        "are you?",                             
        "aren't you?", 
        "do you?",
        "don't you?"
    ]
  },
    {
    numb: 5,
    question: "“To beat the air” means",
    answer: "To make efforts that are useless or vain",
    options: [
      "To act foolishly",
      "To make efforts that are useless or vain",
      " To move vigorously",
      "To move sluggishly"
    ]
  },

    {
    numb: 6,
    question: "The bed and breakfast — nice. We had fun.",
    answer: "was",
    options: [
      "is",
      "are",
      "was",
      "none"
    ]
  },

  {
    numb: 7,
    question: "It's high time that Nepali government _______ more in health sectors.  ",
    answer: "invest",
    options: [
      "invest",
      "should invest",
      "will invest",
      "invested"
    ]
  },

  {
    numb: 8,
    question: "You must dispense ….. his service.",
    answer: "with",
    options: [
      "in",
      "at",
      "with",
      "of"
    ]
  },

  {
    numb: 9,
    question: "which of the following sentence Is correct:",
    answer: "When I went to kitchen, mom bought ; bread, butter and Milk.",
    options: [
      "When I went to kitchen mom bought : bread, butter and Milk.",
      "When I went to kitchen. mom bought bread, butter and Milk.",
      "When I went to kitchen mom bought; bread, butter and Milk.",
      "When I went to kitchen, mom bought ; bread, butter and Milk."
    ]
  },

  {
    numb: 10,
    question: "……. The owner and buyer finally agreed on a price for the house.",
    answer: "After bargaining for several weeks",
    options: [
      "They had been bargain for several weeks",
      "As if bargaining for several weeks",
      "After bargaining for several weeks",
      "None of the above"
    ]
  },

  {
    numb: 11,
    question: "The passive of the sentence, 'He will not speak a word.' is:",
    answer: "No word will be spoken by him.",
    options: [
      "A word will not be spoken by him.",
      "No word will be spoken by him.",
      "A word will never be spoken by him. ",
      "All of the above."
    ]
  },

  {
    numb: 12,
    question: "The word similar to given sentence Is “stick made up of wood or plastic acts like lighter when friction Is applied.”",
    answer: "match",
    options: [
      "wave",
      "wood",
      "match",
      "none"
    ]
  },

  {
    numb: 13,
    question: "The principal and secretary _______highly impressed with overall progress of the students.",
    answer: "is",
    options: [
      "were",
      "was",
      "are",
      "is"
    ]
  },

  {
    numb: 14,
    question: " A densely populated as the city is, there are surprisingly few people seen ……. The streets.",
    answer: "on",
    options: [
      "on",
      "of",
      "to",
      "at"
    ]
  },

  {
    numb: 15,
    question: "Don't get off the bus until it is______.",
    answer: "stationary",
    options: [
      "station",
      "stationery",
      "stationary",
      "None"
    ]
  },

// --------------------Maths----------------

  {
    numb: 16,
    question: "If sinQ - cosQ = 0, then Q = __ degree",
    answer: "45",
    options: [
      "90",
      "45",
      "180",
      "30"
    ]
  },

  {
    numb: 17,
    question: "Let Na={an: n is a natural number},then N6 ∩ N8",
    answer: "N24",
    options: [
      " N2",
      "N48",
      "N8",
      "N24"
    ]
  },

  {
    numb: 18,
    question: "P & Q were brother and sister. They can do work in 6 and 12 days respectively. They started to make house but brother left after 3 days. Sister became alone so She married with her Bestfriend R and completed remaining work in 2 day. In how many days R alone can finish the work ?",
    answer: "24",
    options: [
      "42",
      "24",
      "14",
      "34"
    ]
  },

  {
    numb: 19,
    question: "A polynomial f(x) of degree m is divided a polynomial of degree n such that n<m, then degree of quotient is",
    answer: "m-n",
    options: [
      "m/n",
      "m-n",
      "m+n",
      "n-m"
    ]
  },

  {
    numb:20 ,
    question: "A pack has 52 cards. What is probability that a card will either black or king if picked randomly?",
    answer: "7/13",
    options: [
      "11/13",
      "4/3",
      "7/13",
      "7/3"
    ]
  },

  {
    numb: 21,
    question: "For a fixed sum of money for 10 years, which one of the following scheme provides the scheme provides the maximum amount of interest during 10 years?",
    answer: "compound interest at the rate of 10% p.a. compounded quarterly ",
    options: [
      " simple interest at the rate of 10% p.a.",
      "compound interest at the rate of 10% p.a. compounded annually",
      "compound interest at the rate of 10% p.a. compounded half yearly",
      "compound interest at the rate of 10% p.a. compounded quarterly "
    ]
  },

  {
    numb: 22,
    question: " Two years ago, the population of a village was 16000.The rate of population growth of that village is 5%. Find the population of present.",
    answer: "17640",
    options: [
      "17640",
      "17460",
      "17064",
      "17046"
    ]
  },
 
  {
    numb: 23,
    question: "Two right circular cones x & y are made, x having 3 times the radius of y and y having half of the volume of x. Then the ratio of height of x and y will be:",
    answer: "2:9",
    options: [
      "1:9",
      "9:1",
      "2:9",
      "None"
    ]
  },

  {
    numb:24 ,
    question: "The LCM & HCF of the two numbers are 840 & 14 respectively and if one of the numbers is 42 then the other number is",
    answer: "280",
    options: [
      "84",
      "280",
      "868",
      "42"
    ]
  },

 

  {
    numb: 25,
    question: "In a final step of the calculation, a student accidentally divided by 100 instead of multiplying by 100. What should he do to correct his answer?",
    answer: "Multiply by 104",
    options: [
      "Multiply by 100",
      "Multiply by 1,00,00",
      "Divide by 100",
      "Multiply by 103"
    ]
  },

  
  {
    numb: 26,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
];