import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import InformationCharacter from "../pages/InformationCharacter";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Navigate to={'/'} replace />} />
                <Route path='/' element={<Home />} />
                <Route path='/Character/:id' element={<InformationCharacter/>}/>
            </Routes>

        </BrowserRouter>
    );
}
export default Router