export default function Education() {
  return (
    <div className="option">
      <h3 className="option__title">Образование</h3>
      <label className="option__item">
        <input type="checkbox" name="" id="" />
        <span className="checkmark"></span>
        Высшее
        <span className="option__result">34567</span>
      </label>
      <label className="option__item">
        <input type="checkbox" name="" id="" />
        <span className="checkmark"></span>
        Неоконченное высшее
        <span className="option__result">876</span>
      </label>
      <label className="option__item">
        <input type="checkbox" name="" id="" />
        <span className="checkmark"></span>
        Средне-специальное
        <span className="option__result">1234</span>
      </label>
      <label className="option__item">
        <input type="checkbox" name="" id="" />
        <span className="checkmark"></span>
        Среднее
        <span className="option__result">8764</span>
      </label>
    </div>
  );
}
