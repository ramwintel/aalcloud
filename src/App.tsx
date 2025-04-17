import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Careers from './pages/Careers';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App; 