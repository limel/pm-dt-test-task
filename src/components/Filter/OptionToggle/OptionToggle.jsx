import sprite from 'img/sprite.svg';

export default function OptionToggle({ icon, text, onClick }) {
  return (
    <label className="option-toggle">
      <svg className="option-toggle__icon">
        <use href={sprite + icon}></use>
      </svg>
      {text}
      <input type="checkbox" />
      <span className="option-toggle__checkmark" aria-hidden="true" onClick={onClick}></span>
    </label>
  );
}
