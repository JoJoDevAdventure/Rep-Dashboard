// src/data.js
export const users = [
  {
    email: "joseph@replicaide.com",
    password: "12345678",
    username: "Joseph Bouhlel",
  },
  {
    email: "amin@replicaide.com",
    password: "12345678",
    username: "Amin Abdi",
  },
];

export const Restaurants = [
  {
    clientInfo: {
      firstName: "Geoff",
      lastName: "Smith",
      email: "geoffsmith@gmail.com",
      phone: "702-55-1212",
    },
    propertyInfo: {
      address: "1116 Ocean Drive",
      city: "Miami Beach",
      state: "Florida",
      zip: "33139",
      surface: "5000 sq/f",
      rooms: 5,
      bathrooms: 6,
    },

    messages: [
      {
        isAgent: true,
        text: "Hello, this is via group. My name is John. How can I help you today?",
        timestamp: "00:01",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Hi, John. I saw your flyer in South Beach.",
        timestamp: "00:04",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "It say you list homes for sale. Is that correct?",
        timestamp: "00:06",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "We sure do. What's your name? So I know who I'm talking to.",
        timestamp: "00:11",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "My name is Jeff Smith.",
        timestamp: "00:14",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Jeff is spelled as G E O F F.",
        timestamp: "00:16",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Cool.",
        timestamp: "00:21",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Got it, Jeff. What's your email address?",
        timestamp: "00:22",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "It is JeffSmith@me.com.",
        timestamp: "00:25",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Just like your name, right?",
        timestamp: "00:30",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Yes.",
        timestamp: "00:31",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Thanks Jeff, I just have a quick couple of questions and then we can book an appointment for the walkthrough. Does that sound good?",
        timestamp: "00:34",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "That sounds wonderful.",
        timestamp: "00:40",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Cool. Is the property currently listed?",
        timestamp: "00:42",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "No, it's not.",
        timestamp: "00:46",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Okay, what kind of property is it? House, townhouse or condo?",
        timestamp: "00:47",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "It's a house.",
        timestamp: "00:51",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "And where is it located?",
        timestamp: "00:53",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "1116 Ocean Drive, Miami Beach.",
        timestamp: "00:56",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Perfect. That's in the zip code 33139, correct?",
        timestamp: "01:05",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "That is correct. Yes.",
        timestamp: "01:07",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Awesome. I can see from Zillow it's 5,000 square feet, 6 rooms and 5 baths, right?",
        timestamp: "01:07",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "That is correct.",
        timestamp: "01:12",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Great. When's a good time next week to meet for the walkthrough? Are you available Sunday?",
        timestamp: "01:15",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "No, I go to church on Sundays.",
        timestamp: "01:19",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "How about Monday at 12 p.m.?",
        timestamp: "01:21",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "I'm actually busy at that time. How about Tuesday at noon, Wednesday at 10 a.m., or Thursday anytime after 1 p.m.?",
        timestamp: "01:26",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Wednesday at 10 a.m. is fine.",
        timestamp: "01:32",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Hey, honey.",
        timestamp: "01:36",
        isGuest: true,
      },
      {
        isAgent: true,
        text: "Ah, a mystery guest. Could that be your lovely partner perhaps?",
        timestamp: "01:36",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Absolutely. You got it.",
        timestamp: "01:42",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Hello there. Lovely to meet you. How are you today?",
        timestamp: "01:42",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Great. How are you?",
        timestamp: "01:48",
        isGuest: true,
      },
      {
        isAgent: true,
        text: "I'm doing splendidly. Thank you. Any exciting plans for the day?",
        timestamp: "01:48",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Looking for a home.",
        timestamp: "01:55",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "How exciting times ahead then. Are you looking for something specific?",
        timestamp: "01:55",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Yes, we will get to you once we have our agent, once we have our listing going and we can find a new place.",
        timestamp: "02:00",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Thank you so much for your help. See you Wednesday at 10 a.m.",
        timestamp: "02:06",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "You're welcome. See you then. Have a great day.",
        timestamp: "02:12",
        isGuest: false,
      },
    ],
    audio: "/demo.mp3",
    date: "2023-11-16",
    notes: "Client is very interested in oceanfront properties.",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/Paris_Exterior_4-Edit-e1714649473120.png",
  },
  {
    clientInfo: {
      firstName: "Anna",
      lastName: "Johnson",
      email: "anna.johnson@gmail.com",
      phone: "312-45-6789",
    },
    propertyInfo: {
      address: "14 Sunset Boulevard",
      city: "Los Angeles",
      state: "California",
      zip: "90028",
      surface: "4000 sq/f",
      rooms: 4,
      bathrooms: 5,
    },
    messages: [
      { isAgent: true, text: "Hello, Anna. How can I help today?" },
      { isAgent: false, text: "Can you send me details on the listing?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-15",
    notes: "Requested virtual tour information.",
    image:
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  },
  {
    clientInfo: {
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@gmail.com",
      phone: "415-67-8901",
    },
    propertyInfo: {
      address: "88 Bay Street",
      city: "San Francisco",
      state: "California",
      zip: "94133",
      surface: "3000 sq/f",
      rooms: 3,
      bathrooms: 4,
    },
    messages: [
      { isAgent: true, text: "Hi Michael, what can I do for you?" },
      { isAgent: false, text: "What are the monthly fees for this property?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-14",
    notes: "Client wants cost breakdown for condos.",
    image:
      "https://media.onthemarket.com/properties/16128318/1518230897/image-2-480x320.jpg",
  },
  {
    clientInfo: {
      firstName: "Jessica",
      lastName: "Taylor",
      email: "jessica.taylor@gmail.com",
      phone: "646-32-1098",
    },
    propertyInfo: {
      address: "20 Central Park West",
      city: "New York",
      state: "New York",
      zip: "10023",
      surface: "2500 sq/f",
      rooms: 2,
      bathrooms: 3,
    },
    messages: [
      { isAgent: true, text: "Hi Jessica, how can I assist you today?" },
      { isAgent: false, text: "Can you provide the HOA information?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-13",
    notes: "Awaiting HOA documentation from the owner.",
    image:
      "https://town-n-country-living.com/wp-content/uploads/2023/06/craftsman-exterior.jpg",
  },
  {
    clientInfo: {
      firstName: "Robert",
      lastName: "Wilson",
      email: "robert.wilson@gmail.com",
      phone: "702-89-2345",
    },
    propertyInfo: {
      address: "77 Strip Avenue",
      city: "Las Vegas",
      state: "Nevada",
      zip: "89109",
      surface: "3500 sq/f",
      rooms: 4,
      bathrooms: 5,
    },
    messages: [
      { isAgent: true, text: "Good afternoon, Robert!" },
      { isAgent: false, text: "How flexible is the seller on price?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-12",
    notes: "Negotiating terms with the seller.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtH2Sklx2mXrE7-njf7bqy_mvW-2W0AXzaQ&s",
  },
  {
    clientInfo: {
      firstName: "Emily",
      lastName: "Clark",
      email: "emily.clark@gmail.com",
      phone: "503-12-3456",
    },
    propertyInfo: {
      address: "555 Rose Garden Lane",
      city: "Portland",
      state: "Oregon",
      zip: "97210",
      surface: "3200 sq/f",
      rooms: 3,
      bathrooms: 4,
    },
    messages: [
      { isAgent: true, text: "Hi Emily, what’s on your mind today?" },
      { isAgent: false, text: "Can I schedule a walkthrough?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-11",
    notes: "Scheduled walkthrough for next week.",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
  },
  {
    clientInfo: {
      firstName: "David",
      lastName: "Martinez",
      email: "david.martinez@gmail.com",
      phone: "818-56-7890",
    },
    propertyInfo: {
      address: "101 Hollywood Drive",
      city: "Hollywood",
      state: "California",
      zip: "90038",
      surface: "4500 sq/f",
      rooms: 5,
      bathrooms: 6,
    },
    messages: [
      { isAgent: true, text: "Hello David, how’s it going?" },
      { isAgent: false, text: "Can you explain the zoning regulations?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-10",
    notes: "Follow up with city zoning department.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNXkUAfzN1zIis7vf0rS9P9bizKEhzSOrMv-RdA30KIBIly9i6HMXGkit3YgjR734f6k&usqp=CAU",
  },

];


export const Calls = [
  {
    clientInfo: {
      firstName: "Geoff",
      lastName: "Smith",
      email: "geoffsmith@gmail.com",
      phone: "702-55-1212",
    },
    propertyInfo: {
      address: "1116 Ocean Drive",
      city: "Miami Beach",
      state: "Florida",
      zip: "33139",
      surface: "5000 sq/f",
      rooms: 5,
      bathrooms: 6,
    },

    messages: [
      {
        isAgent: true,
        text: "Hello, this is via group. My name is John. How can I help you today?",
        timestamp: "00:01",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Hi, John. I saw your flyer in South Beach.",
        timestamp: "00:04",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "It say you list homes for sale. Is that correct?",
        timestamp: "00:06",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "We sure do. What's your name? So I know who I'm talking to.",
        timestamp: "00:11",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "My name is Jeff Smith.",
        timestamp: "00:14",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Jeff is spelled as G E O F F.",
        timestamp: "00:16",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Cool.",
        timestamp: "00:21",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Got it, Jeff. What's your email address?",
        timestamp: "00:22",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "It is JeffSmith@me.com.",
        timestamp: "00:25",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Just like your name, right?",
        timestamp: "00:30",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Yes.",
        timestamp: "00:31",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Thanks Jeff, I just have a quick couple of questions and then we can book an appointment for the walkthrough. Does that sound good?",
        timestamp: "00:34",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "That sounds wonderful.",
        timestamp: "00:40",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Cool. Is the property currently listed?",
        timestamp: "00:42",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "No, it's not.",
        timestamp: "00:46",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Okay, what kind of property is it? House, townhouse or condo?",
        timestamp: "00:47",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "It's a house.",
        timestamp: "00:51",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "And where is it located?",
        timestamp: "00:53",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "1116 Ocean Drive, Miami Beach.",
        timestamp: "00:56",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Perfect. That's in the zip code 33139, correct?",
        timestamp: "01:05",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "That is correct. Yes.",
        timestamp: "01:07",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Awesome. I can see from Zillow it's 5,000 square feet, 6 rooms and 5 baths, right?",
        timestamp: "01:07",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "That is correct.",
        timestamp: "01:12",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Great. When's a good time next week to meet for the walkthrough? Are you available Sunday?",
        timestamp: "01:15",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "No, I go to church on Sundays.",
        timestamp: "01:19",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "How about Monday at 12 p.m.?",
        timestamp: "01:21",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "I'm actually busy at that time. How about Tuesday at noon, Wednesday at 10 a.m., or Thursday anytime after 1 p.m.?",
        timestamp: "01:26",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Wednesday at 10 a.m. is fine.",
        timestamp: "01:32",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Hey, honey.",
        timestamp: "01:36",
        isGuest: true,
      },
      {
        isAgent: true,
        text: "Ah, a mystery guest. Could that be your lovely partner perhaps?",
        timestamp: "01:36",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Absolutely. You got it.",
        timestamp: "01:42",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Hello there. Lovely to meet you. How are you today?",
        timestamp: "01:42",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Great. How are you?",
        timestamp: "01:48",
        isGuest: true,
      },
      {
        isAgent: true,
        text: "I'm doing splendidly. Thank you. Any exciting plans for the day?",
        timestamp: "01:48",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Looking for a home.",
        timestamp: "01:55",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "How exciting times ahead then. Are you looking for something specific?",
        timestamp: "01:55",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "Yes, we will get to you once we have our agent, once we have our listing going and we can find a new place.",
        timestamp: "02:00",
        isGuest: false,
      },
      {
        isAgent: true,
        text: "Thank you so much for your help. See you Wednesday at 10 a.m.",
        timestamp: "02:06",
        isGuest: false,
      },
      {
        isAgent: false,
        text: "You're welcome. See you then. Have a great day.",
        timestamp: "02:12",
        isGuest: false,
      },
    ],
    audio: "/demo.mp3",
    date: "2023-11-16",
    notes: "Client is very interested in oceanfront properties.",
    image:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/Paris_Exterior_4-Edit-e1714649473120.png",
  },
  {
    clientInfo: {
      firstName: "Anna",
      lastName: "Johnson",
      email: "anna.johnson@gmail.com",
      phone: "312-45-6789",
    },
    propertyInfo: {
      address: "14 Sunset Boulevard",
      city: "Los Angeles",
      state: "California",
      zip: "90028",
      surface: "4000 sq/f",
      rooms: 4,
      bathrooms: 5,
    },
    messages: [
      { isAgent: true, text: "Hello, Anna. How can I help today?" },
      { isAgent: false, text: "Can you send me details on the listing?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-15",
    notes: "Requested virtual tour information.",
    image:
      "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
  },
  {
    clientInfo: {
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@gmail.com",
      phone: "415-67-8901",
    },
    propertyInfo: {
      address: "88 Bay Street",
      city: "San Francisco",
      state: "California",
      zip: "94133",
      surface: "3000 sq/f",
      rooms: 3,
      bathrooms: 4,
    },
    messages: [
      { isAgent: true, text: "Hi Michael, what can I do for you?" },
      { isAgent: false, text: "What are the monthly fees for this property?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-14",
    notes: "Client wants cost breakdown for condos.",
    image:
      "https://media.onthemarket.com/properties/16128318/1518230897/image-2-480x320.jpg",
  },
  {
    clientInfo: {
      firstName: "Jessica",
      lastName: "Taylor",
      email: "jessica.taylor@gmail.com",
      phone: "646-32-1098",
    },
    propertyInfo: {
      address: "20 Central Park West",
      city: "New York",
      state: "New York",
      zip: "10023",
      surface: "2500 sq/f",
      rooms: 2,
      bathrooms: 3,
    },
    messages: [
      { isAgent: true, text: "Hi Jessica, how can I assist you today?" },
      { isAgent: false, text: "Can you provide the HOA information?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-13",
    notes: "Awaiting HOA documentation from the owner.",
    image:
      "https://town-n-country-living.com/wp-content/uploads/2023/06/craftsman-exterior.jpg",
  },
  {
    clientInfo: {
      firstName: "Robert",
      lastName: "Wilson",
      email: "robert.wilson@gmail.com",
      phone: "702-89-2345",
    },
    propertyInfo: {
      address: "77 Strip Avenue",
      city: "Las Vegas",
      state: "Nevada",
      zip: "89109",
      surface: "3500 sq/f",
      rooms: 4,
      bathrooms: 5,
    },
    messages: [
      { isAgent: true, text: "Good afternoon, Robert!" },
      { isAgent: false, text: "How flexible is the seller on price?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-12",
    notes: "Negotiating terms with the seller.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtH2Sklx2mXrE7-njf7bqy_mvW-2W0AXzaQ&s",
  },
  {
    clientInfo: {
      firstName: "Emily",
      lastName: "Clark",
      email: "emily.clark@gmail.com",
      phone: "503-12-3456",
    },
    propertyInfo: {
      address: "555 Rose Garden Lane",
      city: "Portland",
      state: "Oregon",
      zip: "97210",
      surface: "3200 sq/f",
      rooms: 3,
      bathrooms: 4,
    },
    messages: [
      { isAgent: true, text: "Hi Emily, what’s on your mind today?" },
      { isAgent: false, text: "Can I schedule a walkthrough?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-11",
    notes: "Scheduled walkthrough for next week.",
    image:
      "https://www.properties.market/in/blog/wp-content/uploads/2024/01/5-Most-Lavish-And-Expensive-Celebrity-Owned-Houses-In-Hyderabad-1200x675.png",
  },
  {
    clientInfo: {
      firstName: "David",
      lastName: "Martinez",
      email: "david.martinez@gmail.com",
      phone: "818-56-7890",
    },
    propertyInfo: {
      address: "101 Hollywood Drive",
      city: "Hollywood",
      state: "California",
      zip: "90038",
      surface: "4500 sq/f",
      rooms: 5,
      bathrooms: 6,
    },
    messages: [
      { isAgent: true, text: "Hello David, how’s it going?" },
      { isAgent: false, text: "Can you explain the zoning regulations?" },
    ],
    audio: "./demo.mp3",
    date: "2023-11-10",
    notes: "Follow up with city zoning department.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNXkUAfzN1zIis7vf0rS9P9bizKEhzSOrMv-RdA30KIBIly9i6HMXGkit3YgjR734f6k&usqp=CAU",
  },

];

export const liveCall = {
  isLive: true,
  clientInfo: {
    firstName: { value: "Geoff", timestamp: "00:16" },
    lastName: { value: "Smith", timestamp: "00:16" },
    email: { value: "geoffsmith@me.com", timestamp: "00:28" },
    phone: { value: "702-55-1212", timestamp: "00:00" },
  },
  propertyInfo: {
    currentlyListed: { value: "NO", timestamp: "00:46" },
    propretyType: {value: "House" , timestamp:"00:51"},
    address: { value: "1116 Ocean Drive", timestamp: "00:58" },
    city: { value: "Miami Beach", timestamp: "00:59" },
    state: { value: "Florida", timestamp: "00:59" },
    zip: { value: "33139", timestamp: "01:05" },
    surface: { value: "5000 sq/f", timestamp: "01:14" },
    rooms: { value: 5, timestamp: "01:14" },
    bathrooms: { value: 6, timestamp: "01:14" },
  },

  messages: [
    {
      isAgent: true,
      text: "Hello, this is via group. My name is John. How can I help you today?",
      timestamp: "00:01",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Hi, John. I saw your flyer in South Beach.",
      timestamp: "00:04",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "It say you list homes for sale. Is that correct?",
      timestamp: "00:06",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "We sure do. What's your name? So I know who I'm talking to.",
      timestamp: "00:11",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "My name is Jeff Smith.",
      timestamp: "00:14",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Jeff is spelled as G E O F F.",
      timestamp: "00:16",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Cool.",
      timestamp: "00:21",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Got it, Jeff. What's your email address?",
      timestamp: "00:22",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "It is JeffSmith@me.com.",
      timestamp: "00:25",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Just like your name, right?",
      timestamp: "00:30",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Yes.",
      timestamp: "00:31",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Thanks Jeff, I just have a quick couple of questions and then we can book an appointment for the walkthrough. Does that sound good?",
      timestamp: "00:34",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "That sounds wonderful.",
      timestamp: "00:40",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Cool. Is the property currently listed?",
      timestamp: "00:42",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "No, it's not.",
      timestamp: "00:46",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Okay, what kind of property is it? House, townhouse or condo?",
      timestamp: "00:47",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "It's a house.",
      timestamp: "00:51",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "And where is it located?",
      timestamp: "00:53",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "1116 Ocean Drive, Miami Beach.",
      timestamp: "00:56",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Perfect. That's in the zip code 33139, correct?",
      timestamp: "01:05",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "That is correct. Yes.",
      timestamp: "01:07",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Awesome. I can see from Zillow it's 5,000 square feet, 6 rooms and 5 baths, right?",
      timestamp: "01:07",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "That is correct.",
      timestamp: "01:12",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Great. When's a good time next week to meet for the walkthrough? Are you available Sunday?",
      timestamp: "01:15",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "No, I go to church on Sundays.",
      timestamp: "01:19",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "How about Monday at 12 p.m.?",
      timestamp: "01:21",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "I'm actually busy at that time. How about Tuesday at noon, Wednesday at 10 a.m., or Thursday anytime after 1 p.m.?",
      timestamp: "01:26",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Wednesday at 10 a.m. is fine.",
      timestamp: "01:32",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Hey, honey.",
      timestamp: "01:34",
      isGuest: true,
    },
    {
      isAgent: true,
      text: "Ah, a mystery guest. Could that be your lovely partner perhaps?",
      timestamp: "01:36",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Absolutely. You got it.",
      timestamp: "01:40",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "Hello there. Lovely to meet you. How are you today?",
      timestamp: "01:42",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Great. How are you?",
      timestamp: "01:46",
      isGuest: true,
    },
    {
      isAgent: true,
      text: "I'm doing splendidly. Thank you. Any exciting plans for the day?",
      timestamp: "01:48",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Looking for a home.",
      timestamp: "01:52",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "How exciting times ahead then. Are you looking for something specific?",
      timestamp: "01:55",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Yes, we will get to you once we have our agent, once we have our listing going and we can find a new place.",
      timestamp: "02:00",
      isGuest: false,
    },
    {
      isAgent: false,
      text: "Thank you so much for your help. See you Wednesday at 10 a.m.",
      timestamp: "02:06",
      isGuest: false,
    },
    {
      isAgent: true,
      text: "You're welcome. See you then. Have a great day.",
      timestamp: "02:12",
      isGuest: false,
    },
  ],
  audio: "/demo.mp3",
  date: "2023-11-16",
  notes: "Client is very interested in oceanfront properties.",
  image:
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/Paris_Exterior_4-Edit-e1714649473120.png",
}