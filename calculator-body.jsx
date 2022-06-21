import "./calculator-body.css";

function CalculatorBody({ children }) {
  return (
    <div className="calculator-body" id="background-calculator">
      {children}
    </div>
  );
}

export default CalculatorBody;
