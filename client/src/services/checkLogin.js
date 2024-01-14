import { useDispatch, useSelector } from "react-redux";
import { setIsLogin } from "../redux/loginStateSlice";
import apiCall from "./apiCall";

export default async function checkLogin () {
    const dispatch = useDispatch();
    /**
     * 1. Get jwt token from localstorage
     * 2. if not, not login, jump out
     * 3. if yes, decode jwt from localStorage and get email && passwd
     * 4. call checkLogin api to check the user is valid
     * 5. setIsLogin based on result
     */
    const response = apiCall({ url: '/api/auth/checkLogin', method: 'GET', data: {} });
}