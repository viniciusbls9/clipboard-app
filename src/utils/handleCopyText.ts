import { Dispatch, SetStateAction } from "react";

const handleCopy = (
  textCopied: string,
  setCopied: Dispatch<SetStateAction<boolean>>
) => {
  navigator.clipboard.writeText(textCopied).then(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  });
};

export default handleCopy;
