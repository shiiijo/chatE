import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "communica-536af.firebaseapp.com",
  projectId: "communica-536af",
  storageBucket: "communica-536af.appspot.com",
  messagingSenderId: "320246058247",
  appId: "1:320246058247:web:7b386d2f1879e79ac549a2",
  measurementId: "G-LPJM9VWQHP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
auth.languageCode = "it";
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();

provider.setCustomParameters({
  login_hint: "user@example.com",
});
