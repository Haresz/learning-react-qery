import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/Users.page'
import { SuperHeroesPage } from './components/Posts.page'
import { UserPage } from './components/User.page'
import { ParallelQueriesPage } from './components/ParallelQueries.page'
import { DynamicParallel, DynamicParallelPage } from './components/DynamicParallel.page'
import { DependentQueries } from './components/DependentQueries'
function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/users'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/dependent' >
              <DependentQueries email='1' />
            </Route>
            <Route path='/users-dynamic-parallel' >
              <DynamicParallelPage ids={[1, 3]}/>
            </Route>
            <Route path='/users-parallel' >
              <ParallelQueriesPage/>
            </Route>
            <Route path='/users/:id' >
              <UserPage/>
            </Route>
            <Route path='/super-heroes'>
              <SuperHeroesPage />
            </Route>
            <Route path='/users'>
              <RQSuperHeroesPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  )
}

export default App
