



## Code Details


The App is hosted on heroku [ here ]http://gixxo-nft.herokuapp.com/

The charity token contract is available [ here ](https://testnet.bscscan.com/address/0xB2eE37e74237cbaFeCff9833132e03EA89F826B8).

The Voting token contract is available [ here ](https://testnet.bscscan.com/address/0x7d417d0Bb17bE24000b8c738C17154FC145C97EF).
<!-- The endpoints are hosted on heroku [ here ](https://andela-vlf.herokuapp.com/api-docs/). -->

## Made With
  ### UI
    * HTML for writing the webpage
    * CSS for styling
    * Javascript to add some behaviour
  
  ### Server
    * Nodejs for server-side logic
    * Babel for transpiling
    * Express for api routes implementation
    * Heroku for hosting services
    * Mongodb for the App database
    * Swagger for documentation
    * IPFS for filestorage
    * Solidity for smart contract

## Structure of the backend
    *The server folder holds the backend code
    *The config folder holds the postgress connection configuration
    *The controller file holds the code for handling requests processing it through the 
    processor queries and returning a transformed result via the transformer file
    *The database folder holds the database seeder and migration files
    *The middlewares folder holds the middleware files/functions for input validation,
    authentication check and authorization checks
    *The processor folder holds the files/functions for database queries and return the
    result to the controller
    *The public folder holds the ui for the apidocs
    *The routes folder holds the files for the routes
    *The swagger folder holds the files for the swagger documentation
    *The tests folder holds the files for integrated tests
    *The utils folder holds helper functions often reused accross the app such as the
    response transformer function.
    
## Structure of the Smart Contract
    * Vote token contract for voting funding accounts
    * Charity token contract for actual charity and donation

## Installation.
  * Install [Nodejs](https://nodejs.org/en/download/)
  * Clone this repo ``` git clone https://github.com/Itsdenty/Binance-Masterclass-Charity-Funding.git ```
  * Run ```npm install``` to install the required dependencies
  * Navigate to http://localhost:3300 to lauch the home page

## Features of the template
* Users can Signup and log in on the app.
* User Can Navigate to their dashboard.
* User can check their wallet address.
* User can check their token balance
* User can check their voteprofile
* User can swap tokens, BNB for CHT, CHT for VCT and CHT for BNB
* User can check his vote history
* User can create fund account
* User can vote a fund account for activation
* User can donate to a token account

## Available APIs
<table>
  <tr>
      <th>HTTP REQUEST VERB</th>
      <th>API ENDPOINT/PATH</th>
      <th>ACTION</th>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/</td>
      <td>Welcomes users to the application</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/user/signup</td>
      <td>Registers a new user on the app</td>
  </tr>
  <tr>
      <td>POST</td>
      <td>/api/v1/user/login</td>
      <td>Logs in a registered user</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/balance</td>
      <td>Allows users to check their  personal address balance</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/vote</td>
      <td>Gets user vote profile</td>
  </tr>
  <tr>
      <td>GET</td>
      <td>/api/v1/vote/:address:amount</td>
      <td>To vote for a particular funding account</td>
  </tr>
  <tr>
      <td>Post</td>
      <td>/api/v1/swap</td>
      <td>To swap user tokens</td>
  </tr>
  <tr>
      <td>Post</td>
      <td>/api/v1/withdraw</td>
      <td>To withdraw bnb from wallet</td>
  </tr>
  <tr>
      <td>Post</td>
      <td>/api/v1/fund-account</td>
      <td>To fund a donation address after activation</td>
  </tr>
  <tr>
      <td>Get</td>
      <td>/api/v1/funding/:address</td>
      <td>To get a funding account details</td>
  </tr>
  <tr>
      <td>Post</td>
      <td>/api/v1/funding</td>
      <td>To create a funding account</td>
  </tr>
  <tr>
      <td>Get</td>
      <td>/api/v1/votes</td>
      <td>To get a user vote history</td>
  </tr>
</table>

## License and Copyright
&copy; Binance Masterclass Project group 7
Licensed under the [MIT License](LICENSE).
