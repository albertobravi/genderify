# genderify
Try to get Gender for a given first name, searching in about 20'000 people's names

### Getting Started

```
npm install --save genderify
```

### Example

```javascript
const genderify = require('genderify')

genderify(name)
        .then(gender => {
            console.log(gender)
        })
```
