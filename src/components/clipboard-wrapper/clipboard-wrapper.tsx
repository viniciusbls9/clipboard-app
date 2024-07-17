import CliboardCard from "../clipboard-card/clipboard-card";
import EmptyState from "../empty-state/empty-state";

const ClipboardWrapper = ({
  clipboardContent,
}: {
  clipboardContent: string[];
}) => {
  return (
    <>
      {clipboardContent.length === 0 && <EmptyState />}
      {clipboardContent.map((text, index) => (
        <CliboardCard key={index} text={text} />
      ))}
    </>
  );
};

export default ClipboardWrapper;
