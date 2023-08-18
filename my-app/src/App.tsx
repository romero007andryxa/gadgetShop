// import { AppBar } from "@mui/material";
import "./App.css";
import SearchBar from "./widgets/searchBar/searchBar";
import AppBarCustom from "./widgets/appBar/appBar";
import HeroBanner from "./sections/heroBanner/HeroBanner";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AppBarCustom />
            </header>
            <main>
                <HeroBanner />
            </main>
        </div>
    );
}

export default App;
