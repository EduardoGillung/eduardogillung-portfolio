import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from '../pages/contact';
import AboutUs from '../pages/aboutUs';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/home';
import Test from '../pages/test';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/test" element={<Test />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
    
  );
};

export default AppRouter;
