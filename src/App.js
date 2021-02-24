import React, { useEffect } from "react";
import { kittens } from './kittens.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

function App() {
  return(
    <Router>
      <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            className="navbar-brand"
            to="/"
          >
            Navbar
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                >
                  Kittens
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/kittens">
            <PageKittens />
          </Route>

          <Route path="/">
            <PageKittens />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

function About() {
  return (
    <div>
      <div className="container py-4">
        <h2>About Page</h2>
        <p>
          Cat ipsum dolor sit amet, x but see owner, run in terror and curl up and sleep on the freshly laundered towels.
          Bury the poop bury it deep. Fall asleep upside-down flee in terror at cucumber discovered on floor and ask to
          go outside and ask to come inside and ask to go outside and ask to come inside. If it smells like fish eat as
          much as you wish sit on the laptop. Plan your travel i like big cats and i can not lie yet gimme attention gimme
          attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore
          meow bye or hiding behind the couch until lured out by a feathery toy yet climb into cupboard and lick the salt
          off rice cakes. Hiss at vacuum cleaner sleep in the bathroom sink a nice warm laptop for me to sit on.
          box is life, for oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly
          nap. Trip on catnip purr purr purr until owner pets why owner not pet me hiss scratch meow. Need to check on
          human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me fish i must find
          my red catnip fishy fish or purr as loud as possible, be the most annoying cat that you can, and, knock
          everything off the table, so give attitude meowing non stop for food pretend not to be evil.
        </p>
          <br />
          <p>
          Cat mojo . Cats are the world run in circles proudly present butt to human. Purr hack up furballs eat and than
          sleep on your face or if it fits i sits so and sometimes switches in french and say "miaou" just because well
          why not and climb a tree, wait for a fireman jump to fireman then scratch his face. Roll over and sun my belly
          floof tum, tickle bum, jellybean footies curly toes yet push your water glass on the floor for lick left leg
          for ninety minutes, still dirty, love refuse to leave cardboard box. Mice jump around on couch, meow constantly
          until given food, . Mew mew whenever a door is opened, rush in before the human chew master's slippers or i
          see a bird i stare at it i meow at it i do a wiggle come here birdy grass smells good so touch water with paw
          then recoil in horror. Chase dog then run away refuse to leave cardboard box attack like a vicious monster so
          stare at the wall, play with food and get confused by dust chase the pig around the house. Give attitude don't
          nosh on the birds. I shall purr myself to sleep trip on catnip wack the mini furry mouse yet sit on human they
          not getting up ever. Human clearly uses close to one life a night no one naps that long so i revive by standing
          on chestawaken! eat the rubberband you are a captive audience while sitting on the toilet, pet me. Adventure
          always cats woo. Cat dog hate mouse eat string barf pillow no baths hate everything white cat sleeps on a black
          shirt. Scratch me there, elevator butt cat dog hate mouse eat string barf pillow no baths hate everything yet
          eat too much then proceed to regurgitate all over living room carpet while humans eat dinner.
          </p>
          <br />
          <p>
          Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed
          lasers are tiny mice and purr or dead stare with ears cocked yet pet me pet me don't pet me but destroy the
          blinds or plop down in the middle where everybody walks. Munch, munch, chomp, chomp destroy the blinds so pee
          in the shoe so meowzer make meme, make cute face kitty power. The fat cat sat on the mat bat away with paws
          steal mom's crouton while she is in the bathroom so meow in empty rooms and sleeps on my head. Find box a little
          too small and curl up with fur hanging out murder hooman toes. Ignore the human until she needs to get up,
          then climb on her lap and sprawl purr yet paw your face to wake you up in the morning russian blue.
        </p>
      </div>

      <footer
        className="footer py-3 o-footer text-center bg-light"
      >
        <div className="container">
          <a
            className="btn btn-outline-primary"
            href="https://github.com/rachel-blue/atomic-design-example"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            View the Source Code
          </a>
        </div>
      </footer>
    </div>
  )
}

function PageKittens() {

  const makeSound = (e) => {
    e.preventDefault();
    console.log('meow test');
    window.alert('meow , meow!')
  }

  return (
    <div>

      <div className="container py-4">
        <h2>Content!</h2>
        <p>There will be content and things here. For now, just some simple text</p>

        <div className="row">

          {
            kittens.map((animal) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 py-2"
                key={animal.title}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={animal.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{animal.title}</h5>
                    <p className="card-text">{animal.description}</p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={makeSound}
                    >
                      meow
                    </button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>



      </div>

      <footer
        className="footer py-3 o-footer text-center bg-light"
      >
        <div className="container">
          <a
            className="btn btn-outline-primary"
            href="https://github.com/rachel-blue/atomic-design-example"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            View the Source Code
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
