# group-project
Phase 2 group project

Notes & Configurations & API Documentation:
Branches
    master: Final Code
    development: Branch for development phase
        

Config

Client Side
    In development we use "Live-server" with port 8080 for running client side
    https://www.npmjs.com/package/live-server
    
    command running client: live-server --host=localhost --port=8080

Server Side
    PORT: 3000
    command running server: npm run dev
    
    .env_example
    
        RAPID_HOST = api-football-v1.p.rapidapi.com
        RAPID_KEY = 104*2cb*92ms*a6a*50df*ff74f8p1**91***e2ae8**c43
        

API Documentation
=================
    
**User Register**
----

  Returns json data about a single user.

* **URL**
  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
   
  None 

* **Data Params**

   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, email : "onesinus231@gmail.com" }`
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `Email cannot be empty`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `Invalid email format`

* **Sample Call:**

  ```javascript
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/users/register`,
        data: {email, password}
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  ```
  
**User Login**
----
  Returns json data about a token authentication.

* **URL**
  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
   
  None 

* **Data Params**

   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ token: "Swadikaplew070314" }`
    
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `Email cannot be empty`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `Invalid email or password`

* **Sample Call:**

  ```javascript
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/users/login`,
        data: {email, password}
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  ```

**API-NBA Search Event**
----
  Returns json data about NBA event by date.

* **URL**
  /api-nba/searchNBAEvent

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
   
  `dateEvent=[string]`

* **Data Params**

   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "event": [
        {
            "idEvent": "648459",
            "idSoccerXML": null,
            "idAPIfootball": null,
            "strEvent": "Boston Celtics vs Atlanta Hawks",
            "strEventAlternate": "Atlanta Hawks @ Boston Celtics",
            "strFilename": "NBA 2020-02-07 Boston Celtics vs Atlanta Hawks",
            "strSport": "Basketball",
            "idLeague": "4387",
            "strLeague": "NBA",
            "strSeason": "1920",
            "strDescriptionEN": null,
            "strHomeTeam": "Boston Celtics",
            "strAwayTeam": "Atlanta Hawks",
            "intHomeScore": null,
            "intRound": "0",
            "intAwayScore": null,
            "intSpectators": null,
            "strHomeGoalDetails": null,
            "strHomeRedCards": null,
            "strHomeYellowCards": null,
            "strHomeLineupGoalkeeper": null,
            "strHomeLineupDefense": null,
            "strHomeLineupMidfield": null,
            "strHomeLineupForward": null,
            "strHomeLineupSubstitutes": null,
            "strHomeFormation": null,
            "strAwayRedCards": null,
            "strAwayYellowCards": null,
            "strAwayGoalDetails": null,
            "strAwayLineupGoalkeeper": null,
            "strAwayLineupDefense": null,
            "strAwayLineupMidfield": null,
            "strAwayLineupForward": null,
            "strAwayLineupSubstitutes": null,
            "strAwayFormation": null,
            "intHomeShots": null,
            "intAwayShots": null,
            "dateEvent": "2020-02-07",
            "dateEventLocal": "2020-02-07",
            "strDate": null,
            "strTime": "23:30:00",
            "strTimeLocal": null,
            "strTVStation": null,
            "idHomeTeam": "134860",
            "idAwayTeam": "134880",
            "strResult": null,
            "strCircuit": null,
            "strCountry": null,
            "strCity": null,
            "strPoster": null,
            "strFanart": null,
            "strThumb": null,
            "strBanner": null,
            "strMap": null,
            "strTweet1": null,
            "strTweet2": null,
            "strTweet3": null,
            "strVideo": null,
            "strLocked": "unlocked"
        },
    `

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error: event null }`

* **Sample Call:**

  ```javascript
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/api-nba/searchNBAEvent?dateEvent=2020-02-07`,
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  ```

**API-FOOTBALL Search Event**
----
  Returns json data about a Football by date

* **URL**
  /footballs/fixtures

* **Method:**
  `POST

*  **URL Params**
   **Required:**

  None

* **Data Params**
   `league_id=[string]`
   `date=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "api": {
        "results": 2,
        "fixtures": [
            {
                "fixture_id": 157272,
                "league_id": 524,
                "league": {
                    "name": "Premier League",
                    "country": "England",
                    "logo": "https://media.api-football.com/leagues/2.png",
                    "flag": "https://media.api-football.com/flags/gb.svg"
                },
                "event_date": "2020-02-09T14:00:00+00:00",
                "event_timestamp": 1581256800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 26",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Bramall Lane (Sheffield)",
                "referee": null,
                "homeTeam": {
                    "team_id": 62,
                    "team_name": "Sheffield Utd",
                    "logo": "https://media.api-football.com/teams/62.png"
                },
                "awayTeam": {
                    "team_id": 35,
                    "team_name": "Bournemouth",
                    "logo": "https://media.api-football.com/teams/35.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157270,
                "league_id": 524,
                "league": {
                    "name": "Premier League",
                    "country": "England",
                    "logo": "https://media.api-football.com/leagues/2.png",
                    "flag": "https://media.api-football.com/flags/gb.svg"
                },
                "event_date": "2020-02-09T16:30:00+00:00",
                "event_timestamp": 1581265800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 26",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Etihad Stadium (Manchester)",
                "referee": null,
                "homeTeam": {
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "logo": "https://media.api-football.com/teams/50.png"
                },
                "awayTeam": {
                    "team_id": 48,
                    "team_name": "West Ham",
                    "logo": "https://media.api-football.com/teams/48.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            }
        ]
    }
}`

* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />

* **Sample Call:**
  ```javascript
    $.ajax({
        method: 'post',
        url: `http://localhost:3000/footballs/fixtures`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            league_id: 524,
            date: due_date
        }
    })
  ```
