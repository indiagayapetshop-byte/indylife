importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA50UsBCd8BdyzTiLSgh-BtYYvMkAKjf0k",
  authDomain: "indylife-59c2f.firebaseapp.com",
  projectId: "indylife-59c2f",
  storageBucket: "indylife-59c2f.firebasestorage.app",
  messagingSenderId: "834966946217",
  appId: "1:834966946217:web:34d47225d6820857fa44b8",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || payload.data?.title || 'IndyLife';
  const body = payload.notification?.body || payload.data?.body || '';
  const icon = payload.notification?.icon || '/icon-192.png';

  self.registration.showNotification(title, {
    body,
    icon,
    data: payload.data || {},
  });
});
