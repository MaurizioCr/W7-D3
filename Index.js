
    fetch('https://striveschool-api.herokuapp.com/books')
      .then(response => {
        if (response.ok) {
            return response.json();
        }
        else{
            throw new Error('General Error');
        }
      })
      .then(books => {
        displayBooks(books);
        console.log(books)
      })
      .catch(error => {
        console.log(error)
      });
  
  
  function displayBooks(books) {
    const booksRow = document.getElementById('booksRow');
    
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('col-12', 'col-md-6', 'col-lg-4', 'xl-3');
      bookCard.innerHTML = `
        
        <div class="card mb-5">
          <img src="${book.img}" class="card-img-top" alt="Copertina libro">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Prezzo: $${book.price}</p>
            <button class="btn btn-danger" id="remove" onclick="removeCard(this)">Scarta</button>
          </div>
        </div>
      `;
      booksRow.appendChild(bookCard);
    });
  }
  
  function removeCard(button) {
    const card = button.closest('.col-12');
    card.style.display = 'none';
  }
  
  
  