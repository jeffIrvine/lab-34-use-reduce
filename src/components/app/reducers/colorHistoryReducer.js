export const initialState = {
  before: [],
  current: '#202020',
  after: []
};

export default function historyReducer(state, action) {
  const { current, before, after } = state;

  switch(action.type) {
    case 'UNDO':
      return {
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1)
      };
    case 'REDO':
      return {
        before: [...before, current],
        current: after[0],
        after: after.slice(1),
      };
    case 'RECORD':
      return {
        ...state,
        before: [...before, current],
        current: action.payload
      };
    default: 
      return state;
  }
}
