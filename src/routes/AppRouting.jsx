import React from "react";
import {Routes,Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";

import ServicesPage from "../pages/ServicesPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallFun from "../components/CallFun";
import AboutPage from "../pages/AboutPage";
import SubjectsNav from "../components/SubjectsNav";
import { OurStoryPage } from "../pages/OurStoryPage";








function AppRouting() {
   return (
    <div className="bg-white text-gray-800 font-sans flex flex-col min-h-screen">
      <Header />
      <SubjectsNav/>
       <main className="flex-grow">
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
    
      <Route path="*" element={<div className="flex justify-center items-center h-full py-20 text-2xl font-bold text-gray-600">
              404 | Page Not Found
            </div>}/>
      <Route path="/ourstorypage" element={<OurStoryPage/>}/>
      
      </Routes>
      <CallFun/>
     </main>
     <Footer/>
    </div>
   );
}
export default AppRouting;