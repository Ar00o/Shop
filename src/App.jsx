import {HomePage} from "./page/HomePage";
import {AboutPage} from "./page/AboutPage";
import {ContactPage} from "./page/ContactPage";
import {NotFoundPage} from "./page/NotFoundPage";
import { MealsPage } from "./page/MealsPage";
import { DetailPage } from "./page/DetailPage";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
    <Header />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/meals/:name" element={<MealsPage/>} />
            <Route path="/detail/:id" element={<DetailPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    <Footer /> 
    </>
  )
}
