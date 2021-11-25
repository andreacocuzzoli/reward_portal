import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['"Titillium Web"', 'sans-serif'].join(', ')
    }
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header/>
                <Body></Body>
            </ThemeProvider>
        </div>
    );
}

export default App;
