To fix this, always ensure you handle the asynchronous nature of Firebase operations:

```javascript
db.collection('users').doc(userId).get()
  .then(doc => {
    if (doc.exists) {
      console.log(doc.data().name); 
    } else {
      console.log('No such document!');
    }
  })
  .catch(error => {
    console.error('Error getting document:', error);
  });
```
This improved code uses `.then` to handle the successful retrieval of data, checking if the document exists using `doc.exists` to avoid errors. It also includes a `.catch` block for error handling, providing more robust code.