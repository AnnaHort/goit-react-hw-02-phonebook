export const Filter = ({filterValue,onChangeFilter}) => {
    return (
    <input
    type="text"
    name="filter"
    value={filterValue}
    onChange={evt => onChangeFilter(evt.target.value)}
    placeholder="Search by name"
  />
  )}