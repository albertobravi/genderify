# genderify
Try to get Gender for a given first name, searching in about 20'000 people's names

### Getting Started

```
npm install --save genderify
```

This module return a Promise, once resolved you'll have one of the three values:
- m
- f
- null

### Example

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
