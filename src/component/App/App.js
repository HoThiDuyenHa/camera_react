import logo from './logo.svg';
import './App.css';
import Two  from '../../Two';
import Component1 from '../../Component1'
import Four from '../../Four'
import Header from'../Header/header'
import Content from '../Content/content'
import Footer from '../Footer/footer';
function App() {
  return (
          <div id="container">
          <Header></Header>
            {/* this is content area */}
          <Content></Content>
            {/* footer content */}
          <Footer></Footer>
          </div>
        );
      }

export default App;
