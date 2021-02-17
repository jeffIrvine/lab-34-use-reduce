/* eslint-disable max-len */
import React, { useReducer } from 'react';
import historyReducer, { initialState } from '../app/reducers/colorHistoryReducer';
  
function App() {
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const undo = () => dispatch({ type: 'UNDO' });
  const redo = () => dispatch({ type: 'REDO' });
  const record = () => dispatch({ type: 'RECORD' });
  
  return (
    <>
      <button disabled={!state.before.length} onClick={undo}>undo</button>
      <button disabled={!state.after.length} onClick={redo}>redo</button>

      <input 
        type="color" 
        data-testid="color-input" 
        value={state.current} 
        onChange={({ target }) => dispatch({ type: record, payload: target.value })} 
      />

      <div 
        data-testid="color-display" 
        style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}>
      </div>
    </>
  );
}
  
export default App;
