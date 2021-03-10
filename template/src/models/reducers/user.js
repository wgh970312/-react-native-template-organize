export default {
  namespace: 'user',
  state: {
    login: false
  },
  reducers: {
    setLogin(state, { payload }) {
      state.login = payload
    },
  },
  effects: {
    * login({ payload }, { call, put }) {
      yield call(login, 1234)
      yield put({ type: 'setLogin', payload: true })
    },
    * logout(_, { put }) {
      yield put({ type: 'setLogin', payload: false })
    }
  }
}

function login(pay) {
  console.log(pay);
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })  
}