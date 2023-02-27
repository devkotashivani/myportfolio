import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Header from './component/Header';
import Home from './component/Home';
import Skill from './component/Skill';
import Project from './component/Project';
import Qualification from './component/Qualification';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './scss/Header.scss';
import './scss/Home.scss';
import './scss/Skills.scss';
import './scss/Project.scss';
import './scss/Qualification.scss';
import './scss/Contact.scss';
import './scss/Footer.scss';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skill />
      <Qualification />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
