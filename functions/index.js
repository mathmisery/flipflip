const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.flipfliphi = functions.https.onRequest((request, response) => {
    response.send("Hello this is the Flip! Flip! game!");
});

exports.flipflipadd = functions.https.onRequest((request, response) => {
    var val1 = request.query.val1;
    var val2 = request.query.val2;
    var result = parseInt(val1) + parseInt(val2);
    response.send(val1 + " + " + val2 + " = " + result.toString());
});