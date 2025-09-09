import "./Input.css";

function Input({ label, value, onChange }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;