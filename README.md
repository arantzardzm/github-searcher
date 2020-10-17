## Github Searcher
This project contains the frontend for the Github Search Application. It allows any user to type a search value and filter by three different categories: Users, Repositories, and Issues. The data is returned and displayed in cards inside a grid.

## Motivation
This project was created as a result of a code challenge provided by Tradeling. \
More details on the code challenge implementation can be found [here](https://github.com/tradeling/coding-tasks/tree/develop/fullstack-javascript).

## Screenshots of Project
<img src="https://github.com/arantzardzm/github-searcher/blob/main/public/images/UsersSelect.png" width="50%" height="50%">
<img src="https://github.com/arantzardzm/github-searcher/blob/main/public/images/RepositoriesSelect.png" width="50%" height="50%">


## Technologies Used
<b>Built with</b>
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Persist](https://github.com/rt2zz/redux-persist)
- [Typescript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)


## Standards
<b>Code Conventions:</b>
- [Airbnb](https://github.com/airbnb/javascript)


## Installation
```
git clone https://github.com/arantzardzm/github-searcher
cd github-searcher/
cp env .env
yarn install
yarn start
```
The application should open up in your browser with: http://localhost:3000. \
Feel free to explore and search for users, repositories, and issues!


## Implementation Setup
The application is split into three pages (About, Search, Not Found) and four reusable components (Grid, Input, Loader, Select). The Search page holds most of the functionality: the setting of the user input and user selection through the debounce implementation. 


## Implementation Redux/Redux Persist
The application uses Redux and Redux Persist for handling state management. The reducer and its actions allow for the storing and managing of the user input, user selection, the results retrieved, the status of the API call, and message information display.


## Implementation Search API 
The Search API is made as a POST request from the reducer action to our local backend. It simply sends the search and select parameters that the user chose and retrieves a list of either users, respositories, and issues. The success and/or failure of the calls is also handled in the reducer action.

<b>Request:</b>
```
POST /api/search HTTP/1.1
Accept: application/json
Content-Type: application/json
Body:
{
    "searchInput": "arantzardzm",
    "selectInput": "users" 
}
```

<b>Response:</b>
```
HTTP/1.1 200 OK
Server: github-be-app
Content-Type: application/json
Body:
{
   "status": 200,
   "message": "2018-02-13T15:31:55.559Z",
   "data": {
     "total_count": 0,
     "incomplete_results": false,
     "items": []
   }
}
```


## Tests
In order to run the test cases created for this project, you can run the following command:
```
yarn test:cover
```


## Credits
For the loader, a CSS Spinner was used:
[CSS Spinner Implementation](https://tobiasahlin.com/spinkit/)


## Author
Arantza Rodriguez Melchor
