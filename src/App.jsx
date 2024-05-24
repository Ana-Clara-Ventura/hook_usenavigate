import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeList from "./components/RecipeList/RecipeList";
 
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<RecipeList />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default App;