import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Body from "./Layout"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"
import Page404 from "./pages/Page404"

function App() {
  return (
    <Router>
      <>
        <Body>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Pokemon} />
            <Route exact path="*" component={Page404} />
          </Switch>
        </Body>
      </>
    </Router>
  )
}

export default App
