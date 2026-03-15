const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageArea = document.getElementById('message-area');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText, 'sent');
            messageInput.value = '';
            // Simulate a received message after a short delay
            setTimeout(() => {
                addMessage('You said: "' + messageText + '"', 'received');
            }, 1000);
        }
    });

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = text;
        
        // Add reactions container and buttons
        const reactionsContainer = document.createElement('div');
        reactionsContainer.classList.add('reactions-container');

        const reactions = ['👍', '❤️', '😂'];
        reactions.forEach(emoji => {
            const button = document.createElement('button');
            button.classList.add('reaction-btn');
            button.textContent = emoji;
            button.addEventListener('click', () => handleReaction(button, messageDiv, emoji));
            reactionsContainer.appendChild(button);
        });

        messageDiv.appendChild(reactionsContainer);
        messageArea.appendChild(messageDiv);
        // Scroll to the latest message
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    function handleReaction(button, messageDiv, emoji) {
        // Simple toggle for the sake of this basic example
        if (button.classList.contains('reacted')) {
            button.classList.remove('reacted');
            // Logic to decrease count in a real app
        } else {
            button.classList.add('reacted');
            // Logic to increase count in a real app
        }
        // In a real application, you would update a backend and sync the counts
    }
});
