/* eslint-disable @typescript-eslint/no-explicit-any */
const logger = (state:any) => (next:any) => (action:any) => {
    console.log('Current stae =>', state.getState());
    console.log('Action =>', action);
    next(action);
    console.log('Next state =>', state.getState());
}

export default logger;