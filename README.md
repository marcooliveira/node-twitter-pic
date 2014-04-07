# TwitterPic

Post pictures into Twitter easily.

## Installing

`npm install twitter-pic`

## Usage

```
var TwitterPic = require('twitter-pic'),
    request    = require('request')
;

var t = new TwitterPic({
    consumer_key:    'w',
    consumer_secret: 'x',
    token:           'y',
    token_secret:    'z'
});

t.update(
    'This can be a status',
    request('https://avatars3.githubusercontent.com/u/1159695?s=460'),
    function (err, result) {
        if (err) {
            return console.error('Nope!', err);
        }
        
        console.log(result);
    }
);
```
