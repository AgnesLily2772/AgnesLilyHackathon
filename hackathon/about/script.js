document.getElementById('nav').innerHTML=`
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span >⮃</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" >About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

`;

// create a div with id of about
const about = document.createElement('div');
about.id = 'about';
document.body.append(about);
document.getElementById('about').innerHTML=`
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">About</button> </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong>In this website users get information about various kinds of books.Users can use search bar to search for books and can also get information about the books.We also incuded a pagination system where users can see the next and previous pages.This webiste is totally mobile responsive.We used Bootstrap 5 and custom css for the website.We used "https://anapioficeandfire.com/ api to fetch data.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About us</button></h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Lorem Ipsum.</strong>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maiores cumque veniam accusamus et illo labore adipisci quos aliquid pariatur nostrum sit velit sed excepturi, explicabo odit eum necessitatibus, sint ut non nobis ipsum! Autem cumque, cupiditate accusamus veniam ratione amet quidem, delectus repudiandae soluta dignissimos architecto et, a blanditiis.
      </div>
    </div>
  </div>
</div>
`;

