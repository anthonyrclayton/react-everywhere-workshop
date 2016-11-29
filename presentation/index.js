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
  codemash: require("../assets/codemash.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#014081",
  secondary: "white"
});
console.log("theme", theme);

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
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Even this deck...</Heading>

            <CodePane
              textSize="30px"
              lang="jsx"
              source={require("raw!../assets/slide.example")}
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
            <Exercise
              title="Nest a Speaker component inside of Session"
              source="<Speaker name={firstName + lastName} />"
            />
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
              source={`it('renders without crashing', () => {`}
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
              title="Create Loading Comopnent"
      source={ `
        <Loading loading={this.state.loading}>
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

          <Slide>
            <Exercise
              title="Put user data in "
              source="<Speaker name={firstName + lastName} />"
            />
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Router</Heading>
          </Slide>

          <Slide bgColor="primary" notes="">
            <Heading fit caps>Ramda</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
