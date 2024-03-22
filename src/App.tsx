import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState<{ title: string } | null>(null);

  useEffect(() => {
    let mounted = true;
    let source = axios.CancelToken.source();

    const loadData = async () => {
      if (mounted) {
        try {
          let result = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1",
            { cancelToken: source.token }
          );
          setData(result.data);
        } catch (error) {
          if (!axios.isCancel(error)) {
            console.error(error);
          }
        }
      }
    };

    loadData();

    return () => {
      source.cancel();
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">From API {data?.title}</header>
    </div>
  );
}

export default App;
