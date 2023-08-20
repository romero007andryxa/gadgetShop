// import { AppBar } from "@mui/material";
import "./App.css";
import SearchBar from "./widgets/searchBar/searchBar";
import MuiNavBar from "./widgets/appBar/appBar";
import HeroBanner from "./sections/heroBanner/HeroBanner";
import ImpressionCard from "./widgets/impressionCard/impressionCard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MainSection from "./sections/mainSection/MainSection";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MuiNavBar />
            </header>
            <main>
                <HeroBanner />
                <MainSection />
            </main>
        </div>
    );
}

export default App;
