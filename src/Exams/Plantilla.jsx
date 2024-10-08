const Plantilla = (topLeft, bottomLeft, topRight, bottomRight) => {
  return (
    <div className="flex-container">
      <div className="flex-column left-column">
        <div className="flex-item top-left">
          {topLeft()}
        </div>
        <div className="flex-item bottom-left">
          {bottomLeft()}
        </div>
      </div>
      <div className="flex-column right-column">
        <div className="flex-item top-right">{topRight}</div>
        <div className="flex-item bottom-right">{bottomRight}</div>
      </div>
    </div>
  );
};
export default Plantilla;
