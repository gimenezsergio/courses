let menu = () => {
    let template = /*html*/`
        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
        <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navigation">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item @@about">
              <a class="nav-link" href="full-stack-i.html"> Full Stack I</a>
            </li>
            <li class="nav-item @@courses">
              <a class="nav-link" href="full-stack-ii.html">Full Stack II</a>
            </li>

            <li class="nav-item @@blog">
              <a class="nav-link" href="diseno-web-interfaces.html">Diseño web</a>
            </li>
          </ul>
        </div>
      `
      document.querySelector(".container nav"). innerHTML = template
      console.log('Update menu')
}
menu()
