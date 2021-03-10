export default {
  namespace: 'app',
  state: {
    app: 'Organize'
  },
  reducers: {
    app(state, { payload }) {
      state.app = payload
    }
  }
}