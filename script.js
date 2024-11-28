document.getElementById('revealButton').addEventListener('click', function() {
  // Reveal the hidden message
  const message = document.getElementById('message');
  message.classList.toggle('hidden');  // Toggle the visibility of the message
});
