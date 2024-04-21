import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCRsojpCHyUAB6YGu92i3bg0AM4jEezBZs",
  authDomain: "air-bnb-app-9de82.firebaseapp.com",
  projectId: "air-bnb-app-9de82",
  storageBucket: "air-bnb-app-9de82.appspot.com",
  messagingSenderId: "652508858091",
  appId: "1:652508858091:web:e04a45df2e889a7a3060ae"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);