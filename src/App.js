import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Module: 45-8 (advanced) Load dynamic data, API call useEffect integrate state

// 45-9 Module Summary React Core Concepts recap
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  )
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))

  }, [])
  return (
    <div>
      <h1>Comments: {comments.length}</h1>
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div>
      <h4>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(34);
  const increaseCount = () => {
    setCount(count + 1);
  }
  const decreaseCount = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

// 45-8 (advanced) Load dynamic data, API call useEffect integrate state
// function App() {
//   return (
//     <div className="App">
//       <ExternalUsers></ExternalUsers>
//     </div>
//   )
// }

// function ExternalUsers() {
//   const [users, setUsers] = useState([]);
//   // userEffect(()=>{}, [])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])
//   return (
//     <div>
//       <h2>External Users</h2>
//       <p>{users.length}</p>
//       {
//         users.map(user => <User name={user.name} email={user.email}></User>)
//       }
//     </div>
//   )
// }

// function User(props) {
//   return (
//     <div style={{ border: '2px solid red', margin: '20px', borderRadius: '20px' }}>
//       <h3>Name: {props.name}</h3>
//       <p>Email: {props.email}</p>
//     </div>
//   )
// }

// Module: 45-7  State, component state hook and set state method
// function App() {
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(54);

//   const increaseCount = () => {
//     setCount(count + 1);
//   }

//   const decreaseCount = () => {
//     setCount(count - 1);
//   }
//   // const increaseCount = () => {
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// Module: 45-6 using map represent the all array data
// function App() {
//   const products = [
//     { name: "laptop", price: 50000 },
//     { name: "phone", price: 33999 },
//     { name: "watch", price: 4555 },
//     { name: "tablet", price: 5000 },

//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }
//     </div>
//   );
// }
// function Product(props) {
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <h3>Price: {props.price}</h3>
//     </div>
//   )
// }

export default App;
