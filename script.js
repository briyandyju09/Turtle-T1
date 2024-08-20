const userInput = document.querySelector('.user-input');
const responseDiv = document.querySelector('.response');

userInput.addEventListener('click', async () => {
  const userText = userInput.value;
  const response = await processInput(userText);
  responseDiv.textContent = response;
});
function processInput(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Uhhhh Whaat? I'm not completely done yet bro..`);
    }, 1000);
  });
}
