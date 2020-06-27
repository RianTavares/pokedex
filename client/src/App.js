import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Body from "./Layout"
import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon"

function App() {
  return (
    <Router>
      <>
        <Body>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Pokemon} />
          </Switch>
        </Body>
      </>
    </Router>
  )
}

export default App
