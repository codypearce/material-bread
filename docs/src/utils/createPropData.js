let id = 0;
export default function createPropData(name, description, type, defaultValue) {
  id += 1;
  return { id, name, description, type, defaultValue };
}
