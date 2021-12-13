let tema = {}
let templating = ( temas ) => {
  let template = ""
  temas.map(tema => {
    template +=
    /*html*/`
<!--Accordion wrapper-->
<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

<!-- Accordion card -->
<div class="card">

  <!-- Card header -->
  <div class="card-header" role="tab" id="headingOne1">
    <a data-toggle="collapse" data-parent="#accordionEx" href="#${tema.idTab}" aria-expanded="false"
      aria-controls="${tema.idTab}">
      <p class="mb-0"> <i class="ti-control-play color-icon">  </i> ${tema.title}
      </p>
    </a>
  </div>

  <!-- Card body -->
  <div id="${tema.idTab}" class="collapse" role="tabpanel" aria-labelledby="headingOne1"
    data-parent="#accordionEx">
    <div class="card-body">
      <article class="separator">
        <h3 class="section-title text-grey">Teoría</h3>
      </article>
      <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""><i
            class="ti-layout-slider mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Slides</a></h3>
      <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""> <i
            class="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Blog</a></h3>
      <div class="video">
        <!--h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""><i
              class="ti-video-clapper mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Video</a></h3-->
        <iframe width="500" height="250" src="https://www.youtube.com/embed/OMVO_TTitUM"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>

      <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""><i
            class="ti-receipt mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Recursos relacionados</a></h3>

      <article class="separator">
        <h3 class="section-title text-black">Práctica</h3>
      </article>

      <div class="alert alert-primary" role="alert">
        <p>Imágenes:</p>
        <ol class="list-styled">
          <li>Poner una imagen, buscar una foto para cargarla desde internet.</li>
          <li>A la imagen agregarle un link para hacer click y que nos lleve a un sitio web</li>
          <li>Hacer versión responsive, que el tamaño se adapte según la dimensión de la pantalla</li>
          <li>Cargar dos imágenes una abajo de la otra. Las imágenes deben ser de 200px de ancho</li>
        </ol>
      </div>

      <div class="alert alert-danger" role="alert">
        <p>Tener cuidado de que haya conexion a internet</p>
      </div>
      <p>
      <a href="https://replit.com/@SergioGimnez/Example" target="_blank">
        <button class="btn btn-primary" type="button">
          Practicar
        </button>
        </a>
        <a href="https://replit.com/@SergioGimnez/PossibleSpectacularDisk" target="_blank">
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseSolution"
          aria-expanded="false" aria-controls="collapseExample">
          Ver la solución
        </button>
        </a>
        <a href="" target="_blank"></a>
        <a href="https://programador2021.slack.com/archives/C01S2V8LZ8U" target="_blank">
          <button class="btn btn-primary" type="button">
            <img src="images/logo-slack.png" alt="" width="23">
            Chat
          </button>
        </a>
      </p>

      <div class="collapse" id="collapsePrctise">
        <h2>Practicá</h2>
        <div class="card card-body">
          <!--iframe frameborder="0" width="100%" height="500px"
            src="https://replit.com/@SergioGimnez/Example?lite=1&outputonly=1"></iframe>
        </div-->
      </div>
      <div class="collapse" id="collapseSolution">
        <h2>Esta es una posible solución</h2>
        <div class="card card-body">
          <!--iframe frameborder="0" width="100%" height="500px"
            src="https://replit.com/@SergioGimnez/PossibleSpectacularDisk?lite=1&outputonly=1"></iframe>
        </div-->
      </div>
    </div>
  </div>
</div>
<!-- Accordion card -->
    `
  })
return template
}
let templateHtml = /*html*/`
<!--Accordion wrapper-->
<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

    <!-- Accordion card -->
    <div class="card">

      <!-- Card header -->
      <div class="card-header" role="tab" id="headingOne1">
        <a data-toggle="collapse" data-parent="#accordionEx" href="#${tema.idTab}" aria-expanded="false"
          aria-controls="${tema.idTab}">
          <p class="mb-0"> <i class="ti-control-play color-icon">  </i> ${tema.title}
          </p>
        </a>
      </div>

      <!-- Card body -->
      <div id="${tema.idTab}" class="collapse" role="tabpanel" aria-labelledby="headingOne1"
        data-parent="#accordionEx">
        <div class="card-body">
          <article class="separator">
            <h3 class="section-title text-grey">Teoría</h3>
          </article>
          <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""><i
                class="ti-layout-slider mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Slides</a></h3>
          <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""> <i
                class="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Blog</a></h3>
          <div class="video">
            <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""><i
                  class="ti-video-clapper mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Video</a></h3>
            <!--iframe width="500" height="250" src="https://www.youtube.com/embed/OMVO_TTitUM"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe-->
          </div>

          <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href=""><i
                class="ti-receipt mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Recursos relacionados</a></h3>

          <article class="separator">
            <h3 class="section-title text-black">Práctica</h3>
          </article>

          <div class="alert alert-primary" role="alert">
            <p>Imágenes:</p>
            <ol class="list-styled">
              <li>Poner una imagen, buscar una foto para cargarla desde internet.</li>
              <li>A la imagen agregarle un link para hacer click y que nos lleve a un sitio web</li>
              <li>Hacer versión responsive, que el tamaño se adapte según la dimensión de la pantalla</li>
              <li>Cargar dos imágenes una abajo de la otra. Las imágenes deben ser de 200px de ancho</li>
            </ol>
          </div>

          <div class="alert alert-danger" role="alert">
            <p>Tener cuidado de que haya conexion a internet</p>
          </div>
          <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapsePrctise"
              aria-expanded="false" aria-controls="collapsePrctise">
              Practicar
            </button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseSolution"
              aria-expanded="false" aria-controls="collapseExample">
              Ver la solución
            </button>
            <a href="" target="_blank"></a>
            <a href="https://programador2021.slack.com/archives/C01S2V8LZ8U" target="_blank">
              <button class="btn btn-primary" type="button">
                <img src="images/logo-slack.png" alt="" width="23">
                Chat
              </button>
            </a>
          </p>

          <div class="collapse" id="collapsePrctise">
            <h2>Practicá</h2>
            <div class="card card-body">
              <!--iframe frameborder="0" width="100%" height="500px"
                src="https://replit.com/@SergioGimnez/Example?lite=1&outputonly=1"></iframe-->
            </div>
          </div>
          <div class="collapse" id="collapseSolution">
            <h2>Esta es una posible solución</h2>
            <div class="card card-body">
              <!--iframe frameborder="0" width="100%" height="500px"
                src="https://replit.com/@SergioGimnez/PossibleSpectacularDisk?lite=1&outputonly=1"></iframe-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Accordion card -->
`