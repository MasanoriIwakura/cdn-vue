const MyNavbar = {
  template: `
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Home</router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="route">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="route" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/one" class="navbar-item">One</router-link>
          <router-link to="/two" class="navbar-item">Two</router-link>
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>
  `
}

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});