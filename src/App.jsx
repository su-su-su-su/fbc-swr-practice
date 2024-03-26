import "./App.css";
import useSWR from "swr";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <>{data && <p>Status : {data.description}</p>}</>;
}

export default App;
