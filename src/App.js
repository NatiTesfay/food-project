import './App.css';
import React from 'react';
import Navbar from './components/features/navbar.component';
import RoutersScreen from './routes/RouterScreen';
import Footer from './components/features/footer.component/Footer.component';
// import loginPage from './components/pages/loginPage/loginPage'
function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <RoutersScreen/>
      <loginPage/>
      <Footer/>
      
    </div>
  );
}

export default App;
