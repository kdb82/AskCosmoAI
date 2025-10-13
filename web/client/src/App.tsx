import { useEffect, useState } from "react";
import { getApiHome } from "./api-client";
import { client } from "./api-client/client.gen";

function App() {
  const [apiMessage, setApiMessage] = useState<string>("");
  useEffect(() => {
    client.setConfig({ baseUrl: "http://localhost:5001" });
    getApiHome().then((res) => {
      setApiMessage(res.data as string)
    });
  }, []);

  return <div>{apiMessage}</div>;
}

export default App;
