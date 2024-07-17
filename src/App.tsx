import { useEffect } from "react";
import { invoke } from "@tauri-apps/api";

import useClipboard from "./hooks/useClipboard";
import ClipboardWrapper from "./components/clipboard-wrapper/clipboard-wrapper";

function App() {
  const clipboardContent = useClipboard();

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  useEffect(() => {
    const handleBlur = () => {
      invoke("close_window");
    };

    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const handleContextMenu = (event: Event) => {
    event.preventDefault();
  };

  return <ClipboardWrapper clipboardContent={clipboardContent} />;
}

export default App;
