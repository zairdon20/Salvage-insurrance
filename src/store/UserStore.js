import { extendObservable } from "mobx";
// eslint-disable-next-line 
import App from "../App.js";

/** 
 * userStore
 */
class UserStore {
    constructor() {
        extendObservable(this, {
        user: {
            id: "",
            name: "",
            email: "",
            password: "",
            isLoggedIn: false,
            isAdmin: false
        }
        });
    }
}

export default new UserStore();