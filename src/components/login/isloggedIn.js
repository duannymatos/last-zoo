import CREDS from "../login/credentials"
import jwt from "jsonwebtoken"

let isLoggedIn = () => {
    if (localStorage.getItem(CREDS.TOKENKEY)) {
        return true
    } else {
        console.log("no local storage")
        return false
    }
}

let role = () => {

    if (localStorage.getItem(CREDS.TOKENKEY)) {
        const token = localStorage.getItem(CREDS.TOKENKEY);
        const decoded = jwt.decode(token);
        const obj = decoded.role;

        if (obj === "admin") {
            return true
        } else {
            return false
        }
    }

}

export { isLoggedIn, role }