import { useState, useEffect, useCallback } from "react";
import { readText } from "@tauri-apps/api/clipboard";

function useClipboard() {
  const [clipboardContent, setClipboardContent] = useState<string[]>([]);

  const checkClipboard = useCallback(async () => {
    const text = await readText();
    const isNewText =
      clipboardContent.length === 0 ||
      clipboardContent[clipboardContent.length - 1] !== text;

    if (text && isNewText) {
      setClipboardContent((prevContent) => [...prevContent, text]);
    }
  }, [clipboardContent]);

  useEffect(() => {
    const interval = setInterval(checkClipboard, 1000);

    return () => clearInterval(interval);
  }, [checkClipboard]);

  return clipboardContent;
}

export default useClipboard;
