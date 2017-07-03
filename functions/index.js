const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.flipfliphi = functions.https.onRequest((request, response) => {
    response.send("Hello this is the Flip! Flip! game!");
});

