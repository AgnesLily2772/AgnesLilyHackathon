let data = [];  //initializing the data with emptyy array in the beginning




// creating search bar
// const searchInput = document.createElement('input');
// searchInput.placeholder='Search for a book';
// searchInput.id = 'search';
// document.body.append(searchInput);
// create a div with id container

document.getElementById('nav').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >Hackathon <img width="50px" src="https://cdn-icons.flaticon.com/png/512/3145/premium/3145765.png?token=exp=1655622494~hmac=d858f7ad40d4a2ca77593fcad8eec37b"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span >⮃</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="about/about.html">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;



document.getElementById('searchbox').innerHTML = ` <form class="d-flex">
<input class="form-control me-2" type="search" id='search' placeholder="search Books by name or by ISBN" aria-label="Search">
</form>`;

// creating cards
// const cards = document.createElement('ul');
// cards.id = 'cards';
// document.body.append(cards);

// Filtering Data
search.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = data.filter((search) => {
        return (
            search.name.toLowerCase().includes(searchString)
            // || search.isbn.toLowerCase().includes(searchString)
            // || search.authors.toLowerCase().includes(searchString)
        );
    });
    displayData(filteredCharacters); // calling the function to display the filtered data
});

var size = +1;
console.log(size)

// Fetching The Data
const FetchData = async () => {
    try {
        const res = await fetch(`https://www.anapioficeandfire.com/api/books?page=${size}&pageSize=4`);
        data = await res.json(); //json will be converted to object
        displayData(data); // calling the function to display the data
    } catch (err) {
        console.error(err);
    }
};

// modal
// creating a div with id box
const box = document.createElement('div');
box.id = 'box';
document.body.append(box);
document.getElementById('box').innerHTML = `
    <img src="https://mobilemonkey.com/wp-content/uploads/2020/12/welcome-greeting-message-1024x536.png" />
`;
setTimeout(() => {
    const box = document.getElementById('box');
    box.style.display = 'none';
  }, 2000);

// creating a function to display the characters
const displayData = (card) => {
    const html = card
        .map((curItem) => {
            return `
            <li class="card">
                <h4 class="title">Name : ${curItem.name}</h4>
                <p class="description"> <strong> ISBN :</strong> ${curItem.isbn}</p>
                <p> <strong> No of Pages :</strong> ${curItem.numberOfPages}</p>
                <p class="description"> <strong> Authors :</strong> ${curItem.authors}</p>
                <p class="description"> <strong> Publishers :</strong> ${curItem.publisher}</p>
                <p class="description"> <strong> Released :</strong> ${curItem.released}</p>
            </li>
        `;
        })
        .join('');
    // cards.innerHTML = html;
    document.getElementById('cards').innerHTML = html;
};
FetchData();




// create a pagination div with three elements
document.getElementById('pagination').innerHTML = `
    <nav aria-label="Page navigation example">
        <ul class="pagination">
        <li class="page-item"><p class="page-link" id="prev">Prev</p></li>
        <li class="page-item"><p class="page-link" id="one" >1</p></li>
        <li class="page-item"><p class="page-link" id="two">2</p></li>
        <li class="page-item"><p class="page-link" id="three">3</p></li>
        <li class="page-item"><p class="page-link" id="next">Next</p></li>
        </ul>
    </nav>`;

    
// implementing the pagination
const prev = document.getElementById('prev');
const next = document.getElementById('next');
next.addEventListener('click', () => {
    if(size>=1 && size<=2){
    size++ ;
    FetchData();
    // change color of the id
    document.getElementById('next').classList.add('text-danger');
    document.getElementById('prev').classList.remove('text-danger');
    document.getElementById('one').classList.remove('text-danger');
    document.getElementById('two').classList.remove('text-danger');
    document.getElementById('three').classList.remove('text-danger');
    }});
prev.addEventListener('click', () => {
    if(size>=2 && size<=3){
    size-- ;
    FetchData();
    // change color of the id
    document.getElementById('prev').classList.add('text-danger');
    document.getElementById('next').classList.remove('text-danger');
    document.getElementById('one').classList.remove('text-danger');
    document.getElementById('two').classList.remove('text-danger');
    document.getElementById('three').classList.remove('text-danger');
}});
one.addEventListener('click', () => {
    size=1;
    FetchData();
    // change color of the id
    document.getElementById('one').classList.add('text-danger');
    document.getElementById('prev').classList.remove('text-danger');
    document.getElementById('next').classList.remove('text-danger');
    document.getElementById('two').classList.remove('text-danger');
    document.getElementById('three').classList.remove('text-danger');
})
two.addEventListener('click', () => {
    size=2;
    FetchData();
    // change color of the id
    document.getElementById('two').classList.add('text-danger');
    document.getElementById('prev').classList.remove('text-danger');
    document.getElementById('next').classList.remove('text-danger');
    document.getElementById('one').classList.remove('text-danger');
    document.getElementById('three').classList.remove('text-danger');

})
three.addEventListener('click', () => {
    size=3;
    FetchData();
    // change color of the id
    document.getElementById('three').classList.add('text-danger');
    document.getElementById('prev').classList.remove('text-danger');
    document.getElementById('next').classList.remove('text-danger');
    document.getElementById('one').classList.remove('text-danger');
    document.getElementById('two').classList.remove('text-danger');
})



// creating a div which contains 4 radio buttons
const radio = document.createElement('div');
radio.id = 'radio';
document.body.append(radio);
document.getElementById('radio').innerHTML = `
    <div class="MediaFilterRadio">
    <h3>Media</h3>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option">
            <label class="form-check-label" for="exampleRadios1">Hardcover</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option">
            <label class="form-check-label" for="exampleRadios2">Hardback</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option">
            <label class="form-check-label" for="exampleRadios3">GraphicNovel</label>
        </div>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option">
            <label class="form-check-label" for="exampleRadios4">All</label>
        </div>
    </div>
`;


// implementing the radio buttons
const radio1 = document.getElementById('exampleRadios1');
const radio2 = document.getElementById('exampleRadios2');
const radio3 = document.getElementById('exampleRadios3');
const radio4 = document.getElementById('exampleRadios4');
const radio5 = document.getElementById('exampleRadios5');
radio1.addEventListener('click', () => {
  const hardcoverFilter = data.filter(curItem => curItem.mediaType === 'Hardcover');
    displayData(hardcoverFilter);
    document.getElementById('pagination').style.display = 'none';
})
radio2.addEventListener('click', () => {
    const paperbackFilter = data.filter(curItem => curItem.mediaType === 'Hardback');
    displayData(paperbackFilter);
    document.getElementById('pagination').style.display = 'none';
})
radio3.addEventListener('click', () => {
    const graphicnovelFilter = data.filter(curItem => curItem.mediaType === 'GraphicNovel');
    displayData(graphicnovelFilter);
    document.getElementById('pagination').style.display = 'none';
})
radio4.addEventListener('click', () => {
    displayData(data);
    document.getElementById('pagination').style.display = 'block';
})


// // create a div which contains 4 checkboxes
// const checkbox = document.createElement('div');
// checkbox.id = 'checkbox';
// document.body.append(checkbox);
document.getElementById('checkbox').innerHTML = `
    <div class="MediaFiltercheckBox">
    <h3>Publishers</h3>
        <div class="form-check">
            <input class="form-check-input" type="radio" value="check" name="check" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Bantam Books</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" value="check" name="check" id="exampleCheck2">
            <label class="form-check-label" for="exampleCheck2">Dabel Brothers Publishing</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" value="check" name="check" id="exampleCheck3">
            <label class="form-check-label" for="exampleCheck3">All</label>
        </div>
    </div>


`;

// // implementing the checkboxes
const check1 = document.getElementById('exampleCheck1');
const check2 = document.getElementById('exampleCheck2');
const check3 = document.getElementById('exampleCheck3');
check1.addEventListener('click', () => {
    const bantamFilter = data.filter(curItem => curItem.publisher === 'Bantam Books');
    displayData(bantamFilter);
    document.getElementById('pagination').style.display = 'none';
})
check2.addEventListener('click', () => {
    const dabelFilter = data.filter(curItem => curItem.publisher === 'Dabel Brothers Publishing');
    displayData(dabelFilter);
    document.getElementById('pagination').style.display = 'none';
})
check3.addEventListener('click', () => {
    displayData(data);
    // show the pagination
    document.getElementById('pagination').style.display = 'block';
}
)

    











