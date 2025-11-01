// 🌸 Beyond Canvas Chatbot 🌸
// This version can open/close + answer basic questions

document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.createElement("div");
  chatbot.classList.add("chatbot");
  chatbot.innerHTML = `
    <div class="chat-header">
      <span>🎨 Beyond Canvas Assistant</span>
      <button class="close-chat">×</button>
    </div>
    <div class="chat-body"></div>
    <div class="chat-input">
      <input type="text" placeholder="Type your message..." />
      <button>Send</button>
    </div>
  `;
  document.body.appendChild(chatbot);

  const openButton = document.createElement("div");
  openButton.classList.add("chat-open");
  openButton.innerHTML = "💬";
  document.body.appendChild(openButton);

  const chatBody = chatbot.querySelector(".chat-body");
  const chatInput = chatbot.querySelector("input");
  const sendButton = chatbot.querySelector("button");
  const closeChat = chatbot.querySelector(".close-chat");

  const responses = {
    hi: "Hello! 👋 I'm your Beyond Canvas art assistant. How can I help?",
    hello: "Hi there! 🌷 Ask me about classes, fees, or contact info!",
    "class timings": "Our art classes run Mon–Sat, 4 PM to 6 PM 🕓",
    fees: "Our monthly fee is ₹1500, including materials 🎨",
    location: "We’re located near your area — map available on the Contact page 📍",
    contact: "You can reach us at +91 70617 90205 or via Instagram 💌",
    materials: "No worries! We provide art supplies during classes 🖌️",
    default: "Hmm, I’m not sure about that — maybe check our Contact page? 😊"
  };

  function addMessage(message, fromUser = false) {
    const msg = document.createElement("div");
    msg.classList.add("msg", fromUser ? "user" : "bot");
    msg.textContent = message;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getResponse(input) {
    input = input.toLowerCase();
    for (let key in responses) {
      if (input.includes(key)) return responses[key];
    }
    return responses.default;
  }

  sendButton.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, true);
    const reply = getResponse(text);
    setTimeout(() => addMessage(reply), 500);
    chatInput.value = "";
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
  });

  openButton.addEventListener("click", () => {
    chatbot.style.display = "flex";
    openButton.style.display = "none";
  });

  closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
    openButton.style.display = "flex";
  });
});
