// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import Form from './components/Form';

function App() {
  const dispath = useDispatch();
  const state = useSelector(state => state.users)

  const deletePost = (post) => {
    const filtered = state.filter(state => state.id !== post)
    console.log(filtered);
    dispath({ type: 'ADD_POST', payload: filtered });
  }
  return (
    <div className="App">
      <Form></Form>
      {
        state.length > 0
          ?
          state.map((user, key) => <div key={ user.id }>{ key + 1 }. { user.name } <button
            onClick={ () => deletePost(user.id) }
          >delete</button></div>)
          :
          'ok'
      }
    </div>
  );
}

export default App;
