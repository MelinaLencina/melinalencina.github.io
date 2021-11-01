var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(e) {
  e.preventDefault();
  sendData();
});

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendData() {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = "";
  var urlEncodedDataPairs = [];

  urlEncodedDataPairs.push(
    encodeURIComponent("nombre") +
      "=" +
      encodeURIComponent(form.querySelector("[nombre='nombre']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("send_to") +
      "=" +
      encodeURIComponent(form.querySelector("[nombre='send_to']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("email") +
      "=" +
      encodeURIComponent(form.querySelector("[nombre='email']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("tel") +
      "=" +
      encodeURIComponent(form.querySelector("[nombre='tel']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("empresa") +
      "=" +
      encodeURIComponent(form.querySelector("[name='empresa']").value)
  );

  // select
  var dropdown = form.querySelector("[name='area']");
  urlEncodedDataPairs.push(
    encodeURIComponent("area") +
      "=" +
      encodeURIComponent(dropdown.options[dropdown.selectedIndex].text)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("asunto") +
      "=" +
      encodeURIComponent(form.querySelector("[name='asunto']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("mensaje") +
      "=" +
      encodeURIComponent(form.querySelector("[name='mensaje']").value)
  );
  urlEncodedDataPairs.push(
    encodeURIComponent("in") +
      "=" +
      encodeURIComponent(form.querySelector("[name='in']").value)
  );

  urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // Enviado
  XHR.addEventListener("load", function(event) {
    if (XHR.readyState === XHR.DONE) {
      if (XHR.status === 200) {
        alert("Yay! Recibido.");
      } else {
        alert("Oh oh! " + XHR.responseText + ".");
      }
    }
  });

  // Error
  XHR.addEventListener("error", function(event) {
    // Timeout o desconectado.
    alert("Oops! Algo salió mal.");
  });

  XHR.open(form.getAttribute("method"), form.getAttribute("action"));

  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  XHR.send(urlEncodedData);
}
