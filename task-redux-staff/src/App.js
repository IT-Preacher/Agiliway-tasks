import './App.scss';
import ModalClass from './components/modalWindow';
import ModalRedux from './components/modalWindowRedux';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <div className="redux-modal-conteiner">
        <ModalRedux />
      </div>
      <div className="class-modal-conteiner">
        <ModalClass />
      </div>
    </div>
  );
}

export default App;
