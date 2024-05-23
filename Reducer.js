import { getState, dispatch } from "./Store";
import { add, subtract, reset } from "./Actions";

console.log("Initial state:", getState()); // Scenario 1

dispatch(add());
dispatch(add());
console.log("After adding twice:", getState()); // Scenario 2

dispatch(subtract());
console.log("After subtracting once:", getState()); // Scenario 3

dispatch(reset());
console.log("After resetting:", getState()); // Scenario 4