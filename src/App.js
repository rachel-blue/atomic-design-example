import React from "react";
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

        <div className="navbar navbar-light bg-light">
          <nav>
            <h1>Navbar</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>


        <Switch>
          <Route path="/about">
            <About />
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
          off rice cakes. Hiss at vacuum cleaner sleep in the bathroom sink a nice warm laptop for me to sit on. Eat the
          rubberband man running from cops stops to pet cats, goes to jail sit as close as possible to warm fire without
          sitting on cold floor so poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at
          birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree sleep nap i like fish or
          playing with balls of wool. Lick left leg for ninety minutes, still dirty chirp at birds. Sit in a box for hours
          pose purrfectly to show my beauty so naughty running cat for find empty spot in cupboard and sleep all day or
          sleep on dog bed, force dog to sleep on floor for leave dead animals as gifts has closed eyes but still sees you.
          Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Pet me
          pet me pet me pet me, bite, scratch, why are you petting me always ensure to lay down in such a manner that tail
          can lightly brush human's nose , jumps off balcony gives owner dead mouse at present then poops in litter box
          snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps
          all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down
          the water slide and into pool and swims even though it does not like water and pooping rainbow while flying in
          a toasted bread costume in space or one of these days i'm going to get that red dot, just you wait and see.
          Roll on the floor purring your whiskers off furrier and even more furrier hairball fight an alligator and win
          kitty for trip on catnip shed everywhere shed everywhere stretching attack your ankles chase the red dot,
          hairball run catnip eat the grass sniff yet ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss.
           While happily ignoring when being called litter
          box is life, for oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly
          nap. Trip on catnip purr purr purr until owner pets why owner not pet me hiss scratch meow. Need to check on
          human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me fish i must find
          my red catnip fishy fish or purr as loud as possible, be the most annoying cat that you can, and, knock
          everything off the table, so give attitude meowing non stop for food pretend not to be evil. Purrrrrr catch
          mouse and gave it as a present. Have a lot of grump in yourself because you can't forget to be grumpy and not
          be like king grumpy cat burrow under covers, or lick face hiss at owner, pee a lot, and meow repeatedly scratch
          at fence purrrrrr eat muffins and poutine until owner comes back and pounce on unsuspecting person, and scratch
          me there, elevator butt bleghbleghvomit my furball really tie the room together chase after silly colored fish
          toys around the house. Lick master's hand at first then bite because im moody if it smells like fish eat as
          much as you wish but claw drapes. Throw down all the stuff in the kitchen stare at owner accusingly then wink.
          I shredded your linens for you ptracy stare at wall turn and meow stare at wall some more meow again continue
          staring . Lick arm hair bird bird bird bird bird bird human why take bird out i could have eaten that scratch
          me there, elevator butt refuse to leave cardboard box pee in the shoe, suddenly go on wild-eyed crazy rampage.
          Drink from the toilet eat fish on floor loved it, hated it, loved it, hated it eat the fat cats food flee in
          terror at cucumber discovered on floor. Murr i hate humans they are so annoying brown cats with pink ears
          toilet paper attack claws fluff everywhere meow miao french ciao litterbox fish i must find my red catnip
          fishy fish.
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

      <div className="card-footer">
        <small>Footer placeholder</small>
      </div>
    </div>
  )
}

function PageKittens() {

  return (
    <div>

      <div className="container py-4">
        <h2>Content!</h2>
        <p>There will be content and things here. For now, just some simple text</p>

        <div className="row">

          {
            kittens.map((item) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 py-2"
                key={item.title}
              >
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">Go Somewhere</a>
                  </div>
                </div>
              </div>
            ))
          }

        </div>



      </div>

      <div className="card-footer">
        <small>Footer placeholder</small>
      </div>
    </div>
  );
}

export default App;
