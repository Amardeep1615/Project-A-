import React from "react";
import {Routes,Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";

import ServicesPage from "../pages/ServicesPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutPage from "../pages/AboutPage";
import SubjectsNav from "../components/SubjectsNav";
import { OurStoryPage } from "../pages/OurStoryPage";
import ScheduleDemo from "../pages/ScheduleDemo";
import FigmaPage from "../pages/FigmaPage";
import LearnMore from "../pages/LearnMorePage";
import GetStarted from "../pages/GetStartedPage";
import ContactPage from "../pages/ContactPage";
import Careers from "../pages/CareersPage";
import Blog from "../pages/BlogPage";
import Press from "../pages/PressPage";
import ResumeMaker from "../pages/ResumePage";








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
      <Route path="/contact" element={<ContactPage/>}/> 

      <Route path="/GetStarted" element={<GetStarted/>}/>
    
      <Route path="*" element={<div className="flex justify-center items-center h-full py-20 text-2xl font-bold text-gray-600">
              404 | Page Not Found
            </div>}/>
      <Route path="/LearnMore" element={<LearnMore/>}/>
      <Route path="/FigmaPage" element={<FigmaPage/>}/>
      <Route path="/ourstorypage" element={<OurStoryPage/>}/>
      <Route path="/ScheduleDemo" element={<ScheduleDemo/>} />
      <Route path="/career" element={<Careers/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/press" element={<Press/>}/>


      
      </Routes>
      
     </main>
     <Footer/>
    </div>
   );
}
export default AppRouting;