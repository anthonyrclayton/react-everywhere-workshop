// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


String.prototype.fmt = function() {
  return this.replace("/", "")
};

const images = {
  city: require("../assets/city.jpg"),
  react: require("../assets/react.png"),
  chrome: require("../assets/chrome.png"),
  android: require("../assets/android.png"),
  ios: require("../assets/ios.png"),
  onGithub: require("../assets/ios.png"),
  codemash: require("../assets/codemash.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#014081",
  secondary: "white"
});

const imageWidth = 90

class Exercise extends React.Component {
  render() {
    return(
      <div>
        <Heading>Exercise</Heading>

        <Image src={images.codemash.fmt()}/>

        <Text>{this.props.title}</Text>

        <CodePane
          textSize={this.props.textSize || "28px"}
          margin="30px"
          source={this.props.source}
        />
      </div>
      )
    }
}
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">

            <Heading size={1} fit caps lineHeight={1} textColor="white"> React Everywhere </Heading>

            <Image height={imageWidth} width={imageWidth} src={images.chrome.fmt()}/>
            <Image height={imageWidth} width={imageWidth} src={images.android.fmt()}/>
            <Image height={imageWidth} width={imageWidth} src={images.ios.fmt()}/>

            <Heading size={1} fit caps>
              Writing React for Web, android and iOS
            </Heading>

            <Link href="https://twitter.com/ignu">
              <Text bold caps textColor="tertiary">Len Smith - @ignu</Text>
            </Link>
          </Slide>

          <Slide bgImage={images.react.fmt()} bgDarken={0.75} transition={["zoom", "fade"]}>
             <Heading fit caps>Why?</Heading>

              <List>
                <Appear><ListItem>#5 of all projects Github</ListItem></Appear>
                <Appear><ListItem>Simplicty</ListItem></Appear>
                <Appear><ListItem>It's just JavaScript</ListItem></Appear>
                <Appear><ListItem>Learn Once, Write Everywhere</ListItem></Appear>
              </List>
          </Slide>

          <Slide bgImage={images.react.fmt()} bgDarken={0.75} transition={["zoom", "fade"]}>
            <Heading fit caps>Where?</Heading>
            <List>
              <Appear><ListItem>Web</ListItem></Appear>
              <Appear><ListItem>iOS</ListItem></Appear>
              <Appear><ListItem>Android</ListItem></Appear>
              <Appear><ListItem>Static Sites</ListItem></Appear>
              <Appear><ListItem>OSX</ListItem></Appear>
              <Appear><ListItem>VR</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.react.fmt()} bgDarken={0.75} transition={["zoom", "fade"]}>
            <Heading fit caps>What?</Heading>
            <List>
              <Appear><ListItem>Declarative</ListItem></Appear>
              <Appear><ListItem>Component Based</ListItem></Appear>
              <Appear><ListItem>Learn Once, Write anywhere</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Component Based</Heading>

            <CodePane
              textSize="32"
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="19px auto"
            />

          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading caps>JSX</Heading>

            <CodePane
              textSize="30"
              lang="jsx"
              source={require("raw!../assets/nested.example")}
              margin="19px auto"
            />

            <Link href="https://babeljs.io/repl/" style={ {color: 'white'} }>How does this work...</Link>
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit>Even this deck...</Heading>

            <CodePane
              textSize="28px"
              lang="jsx"
              source={require("raw!../assets/slide.example")}
              margin="19px auto"
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Back to this...</Heading>

            <CodePane
              textSize="32"
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="19px auto"
            />
          </Slide>


          <Slide bgImage={images.react.fmt()} bgDarken={0.75} transition={["zoom", "fade"]}>
             <Heading fit caps>Batteries not included</Heading>
             <List>
               <ListItem>Babel (JSX/ES6)</ListItem>
               <ListItem>Webpack</ListItem>
               <ListItem>Linting</ListItem>
               <ListItem>Testing</ListItem>
               <ListItem>Hot Reloading</ListItem>
               <ListItem>Dev Tools</ListItem>
             </List>
          </Slide>

          <Slide>
            <Exercise
              title="Make a session component that takes props"
              source="<Session title='React Everywhere' description='...'/>"
            />
          </Slide>

         <Slide>
            <CodePane
              textSize="29"
              lang="javascript"
              source={`class Session extends React.Component //

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}
 `}
              margin="19px auto"
            />
         </Slide>

          <Slide>
            <Exercise
              title="PropTypes"
              source="Session.propTypes = {}"
            />
          </Slide>

          <Slide>
            <Exercise
              title="Lets add real data."
              source="<Speaker name={firstName + lastName} />"
            />
          </Slide>

          <Slide>
            <Exercise
              title="Lets make a Speaker component."
              source="<Speaker name={firstName + lastName} />"
            />
          </Slide>

          <Slide>
            <Exercise
              title="Toggle Favorite Session"
              source="<Session onFav={this.toggleFavorite.bind(this)} />"
            />
          </Slide>

      <Slide>
      <Heading>Fetch</Heading>
        <CodePane
          source={`fetch(url).then((r) => r.json().then(callback))
          .catch(console.error);`}/>
      </Slide>

          <Slide>
            <Exercise
              title="Buid and deploy our app"
              source={ `> npm run build
> npm install surge -g && surge public`}
            />
          </Slide>

          <Slide>
            <Exercise
              title="make this a task in package.json"
              source="deploy: npm run build && surge public"
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Testing...</Heading>
          </Slide>

          <Slide>
            <Exercise
              title="Write Smoke Tests for Session/Speaker"
              source={`it('renders without crashing', () => {`

       }
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Stateless Functional Component</Heading>
            <CodePane
              margin="30px"
              source={`(props) => <j`}
            />
          </Slide>

          <Slide>
            <Exercise
              title="Refactor Speaker to functional component"
              source={`it('renders without crashing', () => {`}
            />
          </Slide>

          <Slide>
            <Exercise
              title="Set up a failing unit tests for requiring propTypes"
              source={`it("requires a firstName prop") {
  shallow(<Session />)
  expect(spy.calledOnce()).to.equal(true)
}
`}
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Fetch</Heading>
          </Slide>

          <Slide>
            <Exercise
              title="Fetch Session data from CodeMash api"
              source="<Speaker name={firstName + lastName} />"
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Children</Heading>
          </Slide>

          <Slide>
            <Exercise
              title="Create Loading Component"
      source={ `<Loading loading={this.state.loading}>
  <SessionList sessions={this.state.sessions}/>
</Loading>
` } />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Events</Heading>
          </Slide>

          <Slide>
            <Exercise
              title="Select an Event"
              source="<Session onSelect={this.select.bind(this)} />"
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>git co master</Heading>
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Redux</Heading>
          </Slide>

          <Slide bgColor="primary" notes="">
      <CodePane
        lang="js"
        source={`{sessions: [], loading: true}
// an event gets dispatch

store.dispatch({ type: 'SESSIONS_LOADED', data: [{Title: 'React Everywhere'/*...*/]});

// reducer returns an entire new state

return {sessions: [{Title:'React Everywhere'/*...*/], loading: false}
`}/>
          </Slide>

          <Slide>
            <Exercise
              title="Put user data in "
              source="<Speaker name={firstName + lastName} />"
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Router</Heading>
            <List>
              <ListItem>/speakers/123</ListItem>
              <ListItem>/sessions/1234</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary" notes="">
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Ramda</Heading>
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Flexbox</Heading>
* [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy - A game for learning CSS flexbox](http://flexboxfroggy.com/)
* [What The FlexBox?! - A free 20 video course to learn CSS Flexbox](http://flexbox.io/)
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Learning Flexbox</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
