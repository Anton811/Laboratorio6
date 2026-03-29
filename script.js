document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nav").innerHTML = `
    <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-light" href="/index.html" id ="page0">Index</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/pagina1.html" id ="page1">Pagina 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/pagina2.html" id ="page2">Pagina 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/pagina3.html" id ="page3">Pagina 3</a>
          </li>
        </ul>
    </div>
    `;

  for (let i = 0; i < 4; i++) {
    let selector = document.querySelector(`.pag${i}`);

    if (selector) {
      document
        .querySelector(`#page${i}`)
        .classList.add("bg-light", "rounded-2", "text-dark", "border");
    }
  }
});
