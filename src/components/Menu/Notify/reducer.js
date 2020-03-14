const initialState = {
  loading: false,
  list: [
    {
      "id": 1,
      title: 'Ant Design Title 1',
      read: false
    },
    {
      "id": 2,
      title: 'Ant Design Title 2',
      read: false
    },
    {
      "id": 3,
      title: 'Ant Design Title 3',
      read: false
    },
    {
      "id": 4,
      title: 'Ant Design Title 4',
      read: false
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ALLMARK":
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.forEach(item => {
        item.read = true;
      });
      return newState
    case "ALLMARKBYID":
      let newStates = JSON.parse(JSON.stringify(state))
      newStates.list.forEach((item) => {
        if (item.id === action.id) {
          item.read = true;
          console.log(item.read)
        }
      })
      return newStates
    case "START":
      return { ...state, loading: true }
    case "FINALLY":
      return { ...state, loading: false }
    default:
      return state
  }
}
