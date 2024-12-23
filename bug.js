The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded. This is asynchronous, and it can be difficult to debug.

```javascript
db.collection('users').doc(userId).get().then(doc => {
  console.log(doc.data().name); // Error if data is not yet loaded
});
```