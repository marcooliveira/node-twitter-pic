var fs      = require('fs'),
    request = require('request')
;

var TwitterPic = function (auth) {
    this._auth = auth;
};

TwitterPic.prototype.update = function (status, fileStream, callback) {
    var form, req;

    req = request.post('https://api.twitter.com/1.1/statuses/update_with_media.json', {
        oauth: this._auth
    }, callback);

    form = req.form();
    form.append('status', status);

    form.append('media[]', fileStream);
};

module.exports = TwitterPic;
