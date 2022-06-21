import "./screen.css";

function Screen({ value }) {
  return (
    <div className="silver-border-top">
      <div className="top-quarter-border">
        <div className="digital-screen">
          <p className="digital-number">{value}</p>
        </div>
        <p className="auto-shut-off">AUTO SHUT OFF</p>
      </div>
    </div>
  );
}

export default Screen;
