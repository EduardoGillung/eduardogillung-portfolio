import { Routes, Route, BrowserRouter } from 'react-router';
import Contact from '../pages/contact';
import AboutUs from '../pages/aboutUs';
import MainLayout from '../layouts/mainLayout';
import Home from '../pages/Home';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
    
  );
};

export default AppRouter;
