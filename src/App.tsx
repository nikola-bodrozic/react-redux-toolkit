import React, { useEffect, useState } from "react";
import axios from "axios";
import { Panel } from "./components/Panel";
import "./App.css";
import { SwitchLang } from "./components/SwitchLang";
import { Users } from "./components/Users";
import { UsersList } from "./components/UsersList";

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
      From API {data?.title}
      <hr />
      <Panel />
      <hr />
      <SwitchLang />
      <hr />
      <Users />
      <hr/>
      <UsersList />
    </div>
  );
}

export default App;
