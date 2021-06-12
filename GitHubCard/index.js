import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const myGithubInfo = axios.get('https://api.github.com/users/chisao101')
console.log(myGithubInfo)

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitHubCardMaker( {avatar_url, bio, followers, following, name, username, location, html_url} ){
  // create all the elements
  const cardContainer = document.querySelector('.cards')
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const userFullName = document.createElement('h3')
  const userLoginName = document.createElement('p')
  const userLocation = document.createElement('p')
  const userProfile = document.createElement('p')
  const followerCount = document.createElement('p')
  const followingCount = document.createElement('p')
  const userBio = document.createElement('p')
  // add classes where needed
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userFullName.classList.add('name')
  userLoginName.classList.add('username')
  // append children to correct parents
  cardContainer.appendChild(card)
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(userFullName)
  cardInfo.appendChild(userLoginName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(userProfile)
  cardInfo.appendChild(followerCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(userBio)
  // add attributes and textContent
  userImg.src = avatar_url
  userFullName.textContent = name
  userLoginName.textContent = username
  userLocation.textContent = location
  userProfile.textContent = html_url
  followerCount.textContent = followers
  followingCount.textContent = following
  userBio.textContent = bio

  return card
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
