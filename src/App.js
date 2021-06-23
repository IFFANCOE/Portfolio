import './App.css';
import Topbar from "./components/Topbar";
import Home from "./components/Menubar/Home";
import About from "./components/Menubar/About";
import Blog from "./components/Menubar/Blog";
import Project from "./components/Menubar/Project";
import Skill from "./components/Menubar/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Topbar />
      <Switch>   {/* component มาจัดการ path ที่ไม่ได้สร้างไว้้ */}

        <Route exact path="/"><Home /></Route>
        <Route exact path="/home"><Home /></Route>  {/* exact เพื่อไม่ให้หน้า Home ไปขึ้นหน้าอื่น */}
        <Route path="/about"><About /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/project"><Project /></Route>
        <Route path="/skill"><Skill /></Route>
      </Switch>

    </>
  );
}

export default App;
