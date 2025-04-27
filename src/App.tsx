import "./styles.css";
import { useFetch } from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch("https://randomuser.me/api/");
  return loading ? (
    <div>loading.....</div>
  ) : (
    <div className="App">{data?.results[0]?.gender}</div>
  );
}
