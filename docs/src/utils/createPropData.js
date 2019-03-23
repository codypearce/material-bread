let id = 0;
export function createPropData(name, description, type, defaultValue) {
  id += 1;
  return { id, name, description, type, defaultValue };
}

export function createTableData(data) {
  const tableData = data.map(item => createPropData(item));
  return tableData;
}
