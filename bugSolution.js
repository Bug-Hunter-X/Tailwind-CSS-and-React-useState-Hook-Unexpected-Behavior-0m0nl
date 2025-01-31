```javascript
//bugSolution.js
import {useState} from 'react';

function App(){
  const [count,setCount] = useState(0);
  return(
    <div className='bg-gray-200 p-10 rounded-lg shadow-md w-64'>
      <h2 className='text-2xl font-bold mb-4'>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(prevCount => prevCount + 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
    </div>
  );
}

export default App;
```