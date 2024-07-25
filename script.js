const userInput = document.querySelector('.user-input');
const responseDiv = document.querySelector('.response');

userInput.addEventListener('click', async () => {
  const userText = userInput.value;
  // Replace the following with a fetch API call to your backend to process the user input
  // and get a response from the Gemini API
  const response = await processInput(userText);
  responseDiv.textContent = response;
});
// This is a placeholder function to simulate the API call. Replace it with your actual logic
function processInput(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Uhhhh Whaat? I'm not completely done yet bro..`);
    }, 1000);
  });
}
