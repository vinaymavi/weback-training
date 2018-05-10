const component1 = msg => {
  const element = document.createElement("div");
  element.innerHTML = `<h1>${msg}</h1>`;
  return element;
};

export default component1;
