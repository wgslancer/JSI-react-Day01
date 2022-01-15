import './App.css';
import BodyComponent from './components/BodyComponent/BodyComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

function App() {
  return (
    <div className='App'>
      <NavBarComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
