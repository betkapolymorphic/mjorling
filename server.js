/**
 * Created by albert on 8/26/16.
 */
var express = require('express');
var app = express();

app.get('/al*ert', function (req, res) {
    res.send('Hello my dear `' + req.url.replace('\/','') + '`');
});
app.get('*',function (req,res) {
   res.send('U are not my friend');
});
app.listen(3000, function () {
    console.log('Mjorling runned');
});
