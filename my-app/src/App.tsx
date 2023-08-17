import { AppBar } from "@mui/material";
import "./App.css";
import SearchBar from "./widgets/searchBar/searchBar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <AppBar /> */}
                <SearchBar />
            </header>
        </div>
    );
}

export default App;
