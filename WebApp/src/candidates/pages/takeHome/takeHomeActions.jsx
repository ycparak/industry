import { toastr } from 'react-redux-toastr';

// Randomly choose beteen 3 take home tests
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const projects = [
  {
    title: 'Show the Local Weather',
    objective: 'Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/bELRjV',
    userStory1: 'I can see the weather in my current location.',
    userStory2: 'I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.',
    userStory3: 'I can push a button to toggle between Fahrenheit and Celsius.',
  },
  {
    title: 'Build a Wikipedia Viewer',
    objective: 'Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/wGqEga/',
    userStory1: 'I can search Wikipedia entries in a search box and see the resulting Wikipedia entries',
    userStory2: 'I can click a button to see a random Wikipedia entry within the app',
    userStory3: 'I can push buttons to sshare the article accross all the major social networking paltforms (Facebook, Twitter and LinkedIn)',
  },
  {
    title: 'Use the Twitch JSON API',
    objective: 'Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/Myvqmo/',
    userStory1: 'I can see whether @ninja is currently streaming on Twitch.tv.',
    userStory2: "I can click the status output and be sent directly to @ninja's Twitch.tv channel",
    userStory3: 'If a Twitch user is currently streaming, I can see additional details about what they are streaming.',
  }
]

export const startTakeHomeChallenge = (me, user) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    let project = projects[getRandomInt(0, 2)];
    let takeHomeStarted = true;
    let takeHomeFinished = false;
    let updatedUser = {
      ...user,
      project,
      takeHomeStarted,
      takeHomeFinished
    }
    try {
      await firestore.update(`users/${me.uid}`, updatedUser);
      toastr.success('Success', 'Take home challenge updated successfully')
    }
    catch (error) {
      console.log(error);
    }
  }

export const finishTakeHomeChallenge = (me, user, url) =>
  async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    let takeHomeFinished = true;
    let takeHomeURL = url;
    let updatedUser = {
      ...user,
      takeHomeURL,
      takeHomeFinished,
      stage5: true,
    }
    try {
      await firestore.update(`users/${me.uid}`, updatedUser);
      toastr.success('Success', 'Take home challenge submited successfully')
    }
    catch (error) {
      console.log(error);
    }
  }