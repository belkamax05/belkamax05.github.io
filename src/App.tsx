import logo from './logo.svg';
import { Link, Button } from "./components";
import './App.scss';
import { ThemeProvider } from 'styled-components';


// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};


export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link
          href="https://github.com/belkamax05"
          rel="noopener noreferrer"
        >
          Github profile
        </Link>
      </header>
      {/* <Title>
        Hello World!
      </Title> */}
      <div>
        <Button>Normal</Button>
        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
    </div>
  );
}