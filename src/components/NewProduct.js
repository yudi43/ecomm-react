// import React, { useState } from 'react';

// function NewProduct(props) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newProduct = {
//       title: title,
//       description: description,
//       image: image,
//       price: price
//     };

//     fetch('https://dummyjson.com/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newProduct)
//     })
//       .then(response => response.json())
//       .then(data => {
//         props.onAdd(data);
//         setTitle('');
//         setDescription('');
//         setImage('');
//         setPrice('');
//       });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
//       </label>
//       <label>
//         Description:
//         <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
//       </label>
//       <label>
//         Image URL:
//         <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
//       </label>
//       <label>
//         Price:
//         <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
//       </label>
//       <button type="submit">Create Product</button>
//     </form>
//   );
// }

// export default NewProduct;
