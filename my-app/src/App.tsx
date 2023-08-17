// import { AppBar } from "@mui/material";
import "./App.css";
import SearchBar from "./widgets/searchBar/searchBar";
import AppBarCustom from "./widgets/appBar/appBar"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppBarCustom />
                {/* <SearchBar /> */}
            </header>
        </div>
    );
}

export default App;
