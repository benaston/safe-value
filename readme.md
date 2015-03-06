# safe-value

Retrieve nested property values without worrying about the presence of intermediate properties.

Returns `null` if a property is not found.

File size: **464 bytes**.<br/>
Supported platforms: **server and browser**.<br/>
Supported language versions: **ES3 and above**.

If you use this library in your software please tweet me @benastontweet.

## Installation

```npm install safe-value```

## Example

```javascript
var safeValue = require('safe-value');

var o = { foo: { bar: { bam: 1 } } }
safeValue(o, 'foo.bar.bam'); // 1
safeValue(o, 'foo.foo.bam'); // null
```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.