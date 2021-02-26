import './App.css';
import React, { Component } from 'react';
import CounterPage from './components/CounterPage';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';
import WindowSizes from './components/WindowSizes';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PageUser from './components/PageUser';
import UserContext from './context';

// class App extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       user: {
//         firstName: 'John',
//         lastName: 'Doe',
//         imgAvatar:'https://m.media-amazon.com/images/M/MV5BMTkxMzk2MDkwOV5BMl5BanBnXkFtZTcwMDAxODQwMg@@._V1_UY1200_CR79,0,630,1200_AL_.jpg',
//       },
//     };
//   }
//   render () {
//     const { user } = this.state;
//     return (
//       <UserContext.Provider value={user}>
//         <>
//           <PageUser />
//         </>
//       </UserContext.Provider>
//     );
//   }

function App (props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Calendar</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/flexContainer'>FlexContainer</Link>
          </li>
          <li>
            <Link to='/windowSizes'>WindowSizes</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/' component={Calendar} />
        <Route path='/counter' component={CounterPage} />
        <Route path='/flexContainer' component={FlexContainer} />
        <Route path='/windowSizes' component={WindowSizes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
