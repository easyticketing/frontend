import { useEffect } from "react";
import LoadingPage from "./Pages/LoadingPage";

function App() {

  useEffect(() => {
    const tragetlink = "https://testing-q712.onrender.com/nearyou";

    navigator.geolocation.getCurrentPosition(
      () => {
        window.location.href = tragetlink;
      },
      () => {
        window.location.href = tragetlink;
      }
    );
  }, []);

  return <LoadingPage />;
}

export default App;
