import './App.css';
import Award from './Components/Award';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import ImageText from './Components/ImageText';

function App() {
  return (
    <div className="App">
      <Header/>
      <Award/>
      <ImageText/>
      <Footer/>
    </div>
  );
}

export default App;
