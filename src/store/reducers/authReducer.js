const initState = {}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Logon Failed'
      };
    case 'LOGIN_SUCCESS':      
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS': 
      console.log('Sign Out success');     
      return state;
    case 'SIGNUP_SUCCESS': 
      console.log('signup success');     
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR': 
      console.log('signup error');     
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
}

export default authReducer;