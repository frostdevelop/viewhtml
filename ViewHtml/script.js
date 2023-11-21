async function geturl() {
  try {
  let url = document.getElementById('url').value;
  let response = await fetch(url);
  let html = await response.text();
  console.log(response['status']);
  var text = document.createTextNode(html);
  }
  catch(e) {
    var text = document.createTextNode(e);
  }
  let field = document.createElement('fieldset');
  field.id = 'textfield';
  field.appendChild(text);
  document.getElementById('showtext').appendChild(field);
}
function del(element) {
  if (element) {
  element.parentElement.removeChild(element);
  }
}
document.getElementById('urlform').addEventListener('submit', async (event) => {
  event.preventDefault();
  del(document.getElementById('textfield'));
  geturl();
})