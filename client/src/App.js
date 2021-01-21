import './App.css';
import Chat from "./chat";
import Chat2 from "./chat2";

function App() {
  return (
    <div style={{height:'100vh'}} className='bg-dark'>
      <h1 style={{textAlign:'center', color:'white'}} >Chat App</h1>
    <div className="container d-flex">
      <Chat />
      <Chat2 />
    </div>

    </div>
  );
}

export default App;
