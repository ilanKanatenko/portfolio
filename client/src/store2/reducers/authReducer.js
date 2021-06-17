const initState = {
  user: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case "AUTH":
      return null;

    default:
      return null;
  }
};
