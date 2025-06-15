import { useEffect } from "react";
import LoadingPage from "./Pages/LoadingPage";

function App() {

  useEffect(() => {
    const redirectURL = "https://github.com/svelte-barcode/react-page-loading";

    navigator.geolocation.getCurrentPosition(
      () => {
        // ✅ User allowed location
        window.location.href = redirectURL;
      },
      () => {
        // ❌ User denied location
        window.location.href = redirectURL;
      }
    );
  }, []);

  return <LoadingPage />;
}

export default App;
