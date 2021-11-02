import './App.scss';
import { useState } from 'react';
import ModalClass from './components/modalWindow';
import ModalRedux from './components/modalWindowRedux';
import Button from './components/button';

function App() {
  //const [stateClassModal, setStateClassModal] = useState(false);

  return (
    <div className="App">
      <div className="redux-modal-conteiner">
        {/* <Button>open redux modal</Button> */}
        <ModalRedux />
      </div>
      <div className="class-modal-conteiner">
        {/* <Button click={(event) => setStateClassModal(true)}>open class modal</Button> */}
        <ModalClass />
      </div>
    </div>
  );
}

export default App;
