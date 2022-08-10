import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import List from './pages/articles/list';

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/list" element={<List/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
