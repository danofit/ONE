  const video = document.getElementById('dynamic-video');
  const button = document.getElementById('toggle-loop');

  button.addEventListener('click', () => {
    video.loop = !video.loop; // Toggle loop
    button.textContent = video.loop ? "Disable Loop" : "Enable Loop";
  });

