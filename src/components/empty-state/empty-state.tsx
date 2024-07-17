import IconFaceSad from "../Icons/FaceSadIcon";
import "./empty-state.css";

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <span>Você não tem items para copiar</span>
      <IconFaceSad color="#fff" width={60} height={60} />
    </div>
  );
};

export default EmptyState;
