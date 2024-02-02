import './App.css';
import { useStateProvider } from './utils/StateProvider';
import Home from './components/Home';
import Login from './components/Login';
import { useEffect } from 'react';
import { ReducerCases } from './utils/Constants';
 

function App() {

  const [state,dispatch] = useStateProvider();

  useEffect(()=>{
    dispatch({type : ReducerCases.SET_PREV_STATE , prev_state : state});
  },[]);

  return (
    <div className="App">
      {state.IS_AUTHORISED ? <Home/> : <Login/>}
    </div>
  );
}

export default App;
