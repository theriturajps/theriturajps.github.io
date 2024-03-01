fetch('src/api/data.json')
  .then(response => response.json())
  .then(data => {
    const listContainer = document.getElementById('list-container');
    console.log(data); // Check if the data is printed correctly
    
    // Set the --length CSS variable based on the number of items in the data array
    listContainer.style.setProperty('--length', data.length);
    
    // Loop through the data array and create list items dynamically
    data.forEach((item, index) => {
      const li = document.createElement('li');
      li.style.setProperty('--i', index + 1);
      
      const h3 = document.createElement('h3');
      h3.textContent = item.title;
      
      const p = document.createElement('p');
      p.textContent = item.description;
      
      const a = document.createElement('a');
      a.classList.add('btn');
      a.href = item.url;
      a.textContent = item.buttonText;
      
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(a);
      
      listContainer.appendChild(li);
    });
  });