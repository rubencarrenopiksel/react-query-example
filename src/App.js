import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { List } from './List';
import { Counter } from './Counter';

const client = new QueryClient();

function App() {
  const [limit, setLimit] = useState(100);
  const onSubmit = (e) => {
    e.preventDefault();
    setLimit(e.target.limit.value);
  }
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Counter limit={limit} />
        </header>
        <form onSubmit={onSubmit}>
          <input name="limit" type='number' />
          <button type='submit'>Set new limit</button>
        </form>
        <List limit={limit} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
