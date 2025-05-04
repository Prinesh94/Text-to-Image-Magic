function generateImage() {
  const query = document.querySelector('.searchInput').value;
  const clientId = 'tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY';
  const url = `https://api.unsplash.com/photos/random?query=${query}&count=6&client_id=${clientId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const gallery = document.querySelector('.image-gallery');
      
      // Clear current images
      gallery.innerHTML = '';

      // Add 6 new images
      data.forEach(item => {
        const imgCard = document.createElement('div');
        imgCard.classList.add('img-card');

        const img = document.createElement('img');
        img.src = item.urls.regular;
        img.alt = item.alt_description || 'AI generated image';

        imgCard.appendChild(img);
        gallery.appendChild(imgCard);
      });
    })
    .catch(error => console.error('Error fetching images:', error));
}
