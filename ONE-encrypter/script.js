const inputText = document.querySelector(".text");
const message = document.querySelector(".result");
const btnCopy = document.querySelector(".copy");
btnCopy.style.display = "none";

//Encrypt

function btnEncrypt() {
  const encrypted = encrypt(inputText.value);
  message.value = encrypted;
  message.style.backgroundImage = "none";
  inputText.value = "";
  btnCopy.style.display = "block";
}

function encrypt(stringEncrypted) {
  let char = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncrypted = stringEncrypted.toLowerCase();

  for (let i = 0; i < char.length; i++) {
    if (stringEncrypted.includes(char[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(char[i][0], char[i][1]);
    }
  }
  return stringEncrypted;
}

//Decrypt

function btnDecrypt() {
  const textEncrypted = decrypt(inputText.value);
  message.value = textEncrypted;
  inputText.value = "";
}

function decrypt(stringDecrypted) {
  let char = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDecrypted = stringDecrypted.toLowerCase();

  for (let i = 0; i < char.length; i++) {
    if (stringDecrypted.includes(char[i][1])) {
      stringDecrypted = stringDecrypted.replaceAll(char[i][1], char[i][0]);
    }
  }

  return stringDecrypted;
}

//Copy

function copy() {
  message.select();
  navigator.clipboard.writeText(message.value);
  message.value = "Copied to clipboard!";
  message.style.color = "green";
  message.style.fontStyle = "italic";
  setTimeout(function () {
    location.reload(); //reloads page after copying
  }, 3000);
}
