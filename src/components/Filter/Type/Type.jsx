export default function Type() {
  return (
    <div className="option">
      <h3 className="option__title">Тип занятости</h3>
      <label className="option__item">
        <input type="checkbox" name="" />
        <span className="checkmark"></span>
        Полная занятость
        <span className="option__result">34567</span>
      </label>
      <label className="option__item">
        <input type="checkbox" name="" />
        <span className="checkmark"></span>
        Неполная занятость
        <span className="option__result">876</span>
      </label>
      <label className="option__item">
        <input type="checkbox" name="" />
        <span className="checkmark"></span>
        Удаленная работа
        <span className="option__result">1234</span>
      </label>
    </div>
  );
}
