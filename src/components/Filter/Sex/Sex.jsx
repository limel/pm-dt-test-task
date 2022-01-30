export default function Sex() {
  return (
    <div className="option">
      <h3 className="option__title">Пол</h3>
      <div className="option_sex">
        <label>
          <input type="radio" name="sex" value="any" />
          <span>Любой</span>
        </label>
        <label>
          <input type="radio" name="sex" valu="female" />
          <span>Женщины</span>
        </label>
        <label>
          <input type="radio" name="sex" value="male" />
          <span>Мужчины</span>
        </label>
      </div>
    </div>
  );
}
