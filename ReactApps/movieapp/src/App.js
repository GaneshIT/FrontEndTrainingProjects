import './App.css';
import AddMovie from './components/addmovie';
import Menubar from './menu';
function App(props) {
  return (
    <div>
     
      <Menubar></Menubar>
      <h1>{props.title}</h1>
      <AddMovie></AddMovie>
    </div>
  );
}

export default App;
