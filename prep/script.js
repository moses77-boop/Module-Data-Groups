const characterLimit = 200;
const textArea = document.querySelector("#comment-input");

textArea.addEventListener("keyup", function updateCharacterLimit() {
  const characterLeft = characterLimit - textArea.value.length;
  const charLimitInfo = document.querySelector("#character-limit-info");
  charLimitInfo.innerText = `You have ${characterLeft} characters left`;
});
