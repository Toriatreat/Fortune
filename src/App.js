import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
// import Company from './component/Company/Company';
import Residence from './component/Residence/Residence';
import Value from './component/Value/Value';
import Contact from './component/Contact/Contact'
import GetStarted from './component/GetStarted/GetStarted';
import Footer from './component/Footer/Footer';
// import Footer from './component/Footer/Footer'


function App() {
  return (
    <div className="App">
      <div>
         <div className='white-gradient' /> 
    <Header />
    <Hero />
    <div>
      <Residence />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
    
    </div>
    </div>
  );
}

export default App;

