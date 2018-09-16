/**
 * @param {*} store
 * @param {import('redux').Action} action
 */
function reducer(store, action) {
  switch (action.type) {
    case 'LOGGED':
      return Object.assign({}, store, {
        logged: true,
        nick: action.nick,
      });
    default:
      return store;
  }
}

module.exports = reducer;
