import { useState } from "react";
import handleCopy from "../../utils/handleCopyText";
import "./clipboard-card.css";
import IconCheck2All from "../Icons/CheckIcon";

interface CliboardCardProps {
  text: string;
}

const CliboardCard = ({ text }: CliboardCardProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className="cliboard-card-container"
      data-testid="clipboard-card"
      onClick={() => handleCopy(text, setCopied)}
    >
      {copied && (
        <div className="icon-container">
          <IconCheck2All color="#fff" width={20} height={20} />
        </div>
      )}

      <span>{text}</span>
    </div>
  );
};

export default CliboardCard;
