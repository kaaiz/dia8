import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decitions on how to build the heml
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let nombre;
  if (variables.name == null) {
    nombre = "Nombre";
  } else {
    nombre = variables.name;
  }

  let apellido;
  if (variables.lastname == null) {
    apellido = "Apellido";
  } else {
    apellido = variables.lastname;
  }

  let position = "position-right";
  if (variables.socialMediaPosition != null) {
    position = variables.socialMediaPosition;
  }

  let rol = "Mi trabajo";
  if (variables.role != null) {
    rol = variables.role;
  }

  let ciudad = "Ciudad";
  if (variables.city != null) {
    ciudad = variables.city;
  }

  let pais = "Pais";
  if (variables.country != null) {
    pais = variables.country;
  }

  let twit = "";
  if (variables.twitter != null) {
    twit = variables.twitter;
  }

  let gith = "";
  if (variables.github != null) {
    gith = variables.github;
  }

  let linke = "";
  if (variables.linkedin != null) {
    linke = variables.linkedin;
  }

  let insta = "";
  if (variables.instagram != null) {
    insta = variables.instagram;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${nombre + " " + apellido}</h1>
          <h2>${rol}</h2>
          <h3>${ciudad}, ${pais}</h3>
          <ul class="${position}">
            <li><a href="https://twitter.com/${twit}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${gith}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linke}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${insta}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Ignore this lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
