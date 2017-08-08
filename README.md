# Genderify
Try to get __gender__ for a given __first name__ searching in about 20'000 names

[![Build Status](https://circleci.com/gh/albertobravi/genderify.svg?style=shield&circle-token=6d6232d36c2524c1aaa7f2235208624243534889)](https://circleci.com/gh/albertobravi/genderify)

### Promise ready
This module return a Promise, if fulfilled you'll get one of these values: 

`m`, `f` or `null`

### Install

```
npm install --save genderify
```

### Usage

```javascript
const genderify = require('genderify')

genderify(name)
        .then((gender) => {
            console.log(gender)
        })
        .catch((err) => {
            console.log(err)
        })
```
