import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto ul-side">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Option 1</a></li>
                  <li><a class="dropdown-item" href="#">Option 2</a></li>
                  <li><a class="dropdown-item" href="#">Option 3</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Logout</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>


      {/* //searchb */}
      <div class="sidespace">
        <nav class="navbar w-100">
          <div class="container-fluid ">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </nav>
      </div>

      {/* //second navbar */}
      <div class="nav-new nav-side2">
          <a class="nav-link dropdown-toggle nav-new" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Option 1</a></li>
            <li><a class="dropdown-item" href="#">Option 2</a></li>
            <li><a class="dropdown-item" href="#">Option 3</a></li>
          </ul>
          <a class="nav-link active nav-new" aria-current="page" href="#">Filter 1</a>
          <a class="nav-link active nav-new" aria-current="page" href="#">Filter 2</a>
          <a class="nav-link active nav-new" aria-current="page" href="#">Filter 3</a>

        

      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4 border1">First column</div>
          <div class="col-md-4 border1">Second column</div>
          <div class="col-md-4 border1">Third column</div>

        </div>
      </div>
    </div>
  );
}

export default App;
