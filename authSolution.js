```javascript
// authSolution.js
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let debounceTimer;

onAuthStateChanged(auth, (user) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User signed in:', uid);
    } else {
      // User is signed out
      console.log('User signed out');
    }
  }, 300); // Debounce for 300ms
}).catch(error => {
  console.error('Error in onAuthStateChanged:', error);
});
```