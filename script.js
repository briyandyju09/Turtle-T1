const userInput = document.querySelector('.user-input');
const responseDiv = document.querySelector('.response');

let genAI; // Declare genAI outside of click event for global access

document.getElementById('submit-code').addEventListener('click', function() {
  const acs_code = document.getElementById('access-code').value;
  console.log(acs_code);

  // Assuming API key is valid, initialize genAI object
  if (isValidApiKey(acs_code)) { // Add a function to validate API key (optional)
    const API_KEY = acs_code;
    genAI = new GoogleGenerativeAI(API_KEY);
  } else {
    console.error("Invalid API Key");
    return; // Exit if key is invalid
  }
});

userInput.addEventListener('keypress', async function(event) {
  if (event.key === 'Enter' && genAI) { // Check for Enter key press and valid genAI object
    const prompt = userInput.value;
    userInput.value = ""; // Clear input field after processing

    try {
      const response = await genAI.model.generateText(prompt, {
        model: "gemini-1.5-flash", // Specify model
      });
      responseDiv.textContent = response.text || ""; // Set response text or empty string
    } catch (error) {
      console.error("Error:", error);
      responseDiv.textContent = "An error occurred. Please try again.";
    }
  }
});

// Optional function to validate API key (replace with your validation logic)
function isValidApiKey(key) {
  // Implement your key validation logic here (e.g., length, format)
  return key.length === 32; // Simple example, replace with actual validation
}
