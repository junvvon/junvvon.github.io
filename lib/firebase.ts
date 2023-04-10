import { getApps, initializeApp } from 'firebase/app';

import firebaseConfig from 'config/firebaseConfig';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
