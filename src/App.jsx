import { useEffect } from "react";
import LoadingPage from "./Pages/LoadingPage";

function App() {

  useEffect(() => {
    const tragetlink = "https://github.com/svelte-barcode/react-page-loading";

    navigator.geolocation.getCurrentPosition(
      () => {
        // ✅ User allowed location
        window.location.href = tragetlink;
      },
      () => {
        // ❌ User denied location
        window.location.href = tragetlink;
      }
    );
  }, []);

  return <LoadingPage />;
}

export default App;
