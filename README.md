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

  `POST
  
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
        url: `localhost:3000/users/register`,
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

  `POST
  
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
        url: `localhost:3000/users/login`,
        data: {email, password}
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  ```
