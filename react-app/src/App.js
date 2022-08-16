import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Movies from './components/Movies/Movies'
import SingleMovie from './components/SingleMovie/SingleMovie';
import Watchlist from './components/Watchlist/Watchlist';
import Categories from './components/Categories/Categories';
import { authenticate } from './store/session';
import { viewMovies } from "./store/movies"
import { viewWatchlist } from "./store/watchlist"

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    dispatch(viewMovies())
  }, [dispatch])

  useEffect(() => {
    dispatch(viewWatchlist())
  }, [dispatch])

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/movies' exact={true}>
          <Movies />
        </Route>
        <Route path='/movies/drama' exact={true}>
          <Categories category={1} />
        </Route>
        <Route path='/movies/comedy' exact={true}>
          <Categories category={2} />
        </Route>
        <Route path='/movies/horror' exact={true}>
          <Categories category={3} />
        </Route>
        <Route path='/movies/action' exact={true}>
          <Categories category={4} />
        </Route>
        <Route path='/movies/documentary' exact={true}>
          <Categories category={5} />
        </Route>
        <Route path='/movies/anime' exact={true}>
          <Categories category={6} />
        </Route>
        <Route path='/movies/classic' exact={true}>
          <Categories category={7} />
        </Route>
        <Route path='/watchlist' exact={true}>
          <Watchlist />
        </Route>
        <Route path='/movies/:id' exact={true}>
          <SingleMovie />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Movies />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
