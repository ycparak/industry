const candidates = [
  {
    id: '1',
    photoURL: '/assets/user.png',
    name: "Yusuf",
    lastName: "Parak",
  },
  {
    id: '2',
    photoURL: '/assets/user.png',
    name: "Haseena",
    lastName: "Asmal",
  },
  {
    id: '3',
    photoURL: '/assets/user.png',
    name: "Zaheer",
    lastName: "Ebrahim",
  },
  {
    id: '4',
    photoURL: '/assets/user.png',
    name: "Zain",
    lastName: "Asmal",
  },
  {
    id: '5',
    photoURL: '/assets/user.png',
    name: "Moe",
    lastName: "Asvat",
  },
  {
    id: '6',
    photoURL: '/assets/user.png',
    name: "Kashvir",
    lastName: "Naidoo",
  }
]

const sampleData = {
  positions: [
    {
      id: "1",
      title: 'Texas Nexus Jnr',
      role: 'Full-stack developer',
      address1: '94 Kilcullen Estate, Witney rd',
      address2: 'Bryanston, Sandton',
      zip: '2196',
      provence: 'Gauteng',
      seniority: 'Junior',
      team: 'Nexus team',
      skills: ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS", "PHP"],
      minExperience: '2',
      maxExperience: '10',
      minSalary: '20000',
      maxSalary: '50000',
      numHiring: '3',
      spec: "Looking to hire a talented junior developer to work at one of South Africa's fastest growing tech companies, Texas",
      candidatesAdded: {
        numCandidates: 30,
        numInterviewRequests: 15,
        numInterviews: 10,
        numOfferLetters: 3,
        numHired: 2
      },
      unContactedCandidates: [candidates[0], candidates[2], candidates[1], candidates[3], candidates[4]],
      interviewRequests: [candidates[2]],
      interviews: [candidates[3], candidates[4]],
      offerLetters: [candidates[5]],
      hired: [candidates[5]]
    },
    {
      id: "2",
      title: 'Elipses Team Lead',
      role: 'Front-end developer',
      address1: '94 Kilcullen Estate, Witney rd',
      address2: 'Bryanston, Sandton',
      zip: '2196',
      provence: 'Gauteng',
      seniority: 'Senior',
      team: 'Avengers team',
      skills: ["HTML", "CSS", "Javascript", "AngularJS", "Angular"],
      minExperience: '2',
      maxExperience: '10',
      minSalary: '20000',
      maxSalary: '50000',
      numHiring: '5',
      spec: "Looking to hire a talented junior developer to work at one of South Africa's fastest growing tech companies, Elipse",
      candidatesAdded: {
        numCandidates: 40,
        numInterviewRequests: 25,
        numInterviews: 13,
        numOfferLetters: 7,
        numHired: 5
      },
      unContactedCandidates: [candidates[1]],
      interviewRequests: [candidates[4]],
      interviews: [candidates[2], candidates[3]],
      offerLetters: [candidates[5]],
      hired: []
    },
  ]
}

export default sampleData;