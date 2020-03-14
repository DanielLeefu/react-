export default {

  allmark() {
    return {
      type: "ALLMARK"
    }
  },

  //异步操作
  MarkById(id) {
    return (dispatch) => {
      dispatch({
        type: "START"
      })
      setTimeout(() => {
        dispatch({
          type: "ALLMARKBYID",
          id
        })
        dispatch({
          type: "FINALLY"
        })
      }, 1000)
    }
  }
  // MarkById(id) {
  //   return {
  //     type: "ALLMARKBYID",
  //     id
  //   }




}