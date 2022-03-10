let temas = () => {
  let section_theory = ""
  let i = 1;
  let temario = [
    {
      idTab: "tab",
      title: "Intro",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "tab",
      title: "Primer documento HTML",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "tab",
      title: "Introducción a HTML y documentación",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Estructura HTML",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Etiqueta html, atibuto lang",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Head",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Body",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Tabla periódica de HTML",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Títulos (heading)",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Etiquetas de texto",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Etiquetas semánticas (strong)",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Etiquetas semánticas estructurales",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Contenedor en línea y en bloque",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Incorporar estilos",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Incorporar scripts",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Imágenes, vectores y figuras",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Listas ordenadas, desordenadas y de definición",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Tablas",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Links externos e internos",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Audio y video",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Forms",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Select, radio, checkbox",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Botones",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "DataAttributes",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Id y class",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    }

    
  ]
  return temario
}


let temas2 = () => {
  let section_theory = ""
  let i = 1;
  let temario = [
    {
      idTab: "",
      title: "Estructura HTML",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Etiqueta html, atibuto lang",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Head",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Body",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    },
    {
      idTab: "",
      title: "Tabla periódica de HTML",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    }

  ]
  return temario
}


let temas3 = () => {
  let section_theory = ""
  let i = 1;
  let temario = [
    {
      idTab: "tab",
      title: "p, h1-h6, strong, em, blockquote, ul, ol, li",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    }

  ]
  return temario
}


let temas4 = () => {
  let section_theory = ""
  let i = 1;
  let temario = [
    {
      idTab: "tab",
      title: "table, tr, td, th, thead, tbody, tfooter",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",

    }
  ]
  return temario
}

let temas5 = () => {
  let section_theory = ""
  let i = 1;
  let temario = [
    {
      idTab: "tab",
      title: "Intro: Etiqueta Form, submit",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    },
    {
      idTab: "tab",
      title: "Etiquetas input, textarea, label, fieldset y legend",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    },
    {
      idTab: "tab",
      title: "Desplegable de opciones: Select y option",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    },
    {
      idTab: "tab",
      title: "Input: Text, password, email, file, date",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    },
    {
      idTab: "tab",
      title: "Checkbox y radio",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    }
  ]
  return temario
}


let temas6 = () => {
  let section_theory = ""
  let i = 1;
  let temario = [
    {
      idTab: "tab",
      title: "Estructura",
      theory_secc: section_theory,
      slide_title: "",
      slide_link: "",
      video_title: "",
      video_link: "",
      blog_title: "",
      blog_link: "",
      resources: [{
        title: "",
        link: ""
      }],
      exercise_desc: "",
      exercise_warm: "",
      chat_link: "",
      chat_title: "",
      practice_title: "",
      practice_link: "",
    }
  ]
  return temario
}

let temasWithId = (nombreTema, temaId) => {
  let myTopics = nombreTema()
  for (let index = 0; index < myTopics.length; index++) {
    myTopics[index].idTab = temaId + (index + 1)
  }
  return myTopics
}


let tema1 = "temario1"
let tema2 = "temario2"
let tema3 = "temario3"
let tema4 = "temario4"
let tema5 = "temario5"
let tema6 = "temario6"


let drawTemplate2 = async (temasWithId, divId) => {
  let temario = temasWithId
  let template = templating(temario)
  document.querySelector("#" + divId).innerHTML += template
}

drawTemplate2(temasWithId(temas, tema1), tema1)
drawTemplate2(temasWithId(temas2, tema2), tema2)
drawTemplate2(temasWithId(temas3, tema3), tema3)
drawTemplate2(temasWithId(temas4, tema4), tema4)
drawTemplate2(temasWithId(temas5, tema5), tema5)


let drawTemplate = async (temasWithId, divId) => {
  console.log('por dibujar')
  //   let temario = await temasWithId()
  let temario = temasWithId
  temario.map(tema => {
    let template = /*html*/`
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
          <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"><i
                class="ti-layout-slider mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Slides</a></h3>
          <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"> <i
                class="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Blog</a></h3>
          <div class="video">
            <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"><i
                  class="ti-video-clapper mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Video</a></h3>
            <!--iframe width="500" height="250" src="https://www.youtube.com/embed/OMVO_TTitUM"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe-->
          </div>

          <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"><i
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
            <a href="http://" target="_blank"></a>
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
    document.querySelector("#" + divId).innerHTML += template
    console.log(tema.title)
  })
}

// let tema1 = "temario1"
// let tema2 = "temario2"
// let tema3 = "temario3"
// let tema4 = "temario4"
// let tema5 = "temario5"
// drawTemplate(temasWithId(temas, tema1), tema1)
// drawTemplate(temasWithId(temas2, tema2), tema2)
// drawTemplate(temasWithId(temas3, tema3), tema3)
// drawTemplate(temasWithId(temas4, tema4), tema4)
// drawTemplate(temasWithId(temas5, tema5), tema5)





// let temas = () => {
//   let section_theory = ""
//   let i = 1;
//   let temario = [
//     {
//       idTab: "tab",
//       title: "Intro",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "tab",
//       title: "Primer documento HTML",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "tab",
//       title: "Introducción a HTML y documentación",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Estructura HTML",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Etiqueta html, atibuto lang",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Head",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Body",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Tabla periódica de HTML",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Títulos (heading)",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Etiquetas de texto",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Etiquetas semánticas (strong)",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Etiquetas semánticas estructurales",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Contenedor en línea y en bloque",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Incorporar estilos",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Incorporar scripts",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Imágenes, vectores y figuras",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Listas ordenadas, desordenadas y de definición",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Tablas",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Links externos e internos",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Audio y video",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Forms",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Select, radio, checkbox",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Botones",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "DataAttributes",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     },
//     {
//       idTab: "",
//       title: "Id y class",
//       theory_secc: section_theory,
//       slide_title: "",
//       slide_link: "",
//       video_title: "",
//       video_link: "",
//       blog_title: "",
//       blog_link: "",
//       resources: [{
//         title: "",
//         link: ""
//       }],
//       exercise_desc: "",
//       exercise_warm: "",
//       chat_link: "",
//       chat_title: "",
//       practice_title: "",
//       practice_link: "",

//     }

    
//   ]
//   return temario
// }

// let temasWithId = () => {
//   let myTopics = temas()
//   for (let index = 0; index < myTopics.length; index++) {
//     myTopics[index].idTab = "tabId" + (index + 1)
//   }
//   return myTopics
// }


// let drawTemplate = async () => {
//   console.log('por dibujar')
//   let temario = await temasWithId()
//   temario.map(tema => {
//     let template = /*html*/`
//         <!--Accordion wrapper-->
//         <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

//             <!-- Accordion card -->
//             <div class="card">
  
//               <!-- Card header -->
//               <div class="card-header" role="tab" id="headingOne1">
//                 <a data-toggle="collapse" data-parent="#accordionEx" href="#${tema.idTab}" aria-expanded="false"
//                   aria-controls="${tema.idTab}">
//                   <h5 class="mb-0">
//                     ${tema.title} <i class="fas fa-angle-down rotate-icon"></i>
//                   </h5>
//                 </a>
//               </div>
  
//               <!-- Card body -->
//               <div id="${tema.idTab}" class="collapse" role="tabpanel" aria-labelledby="headingOne1"
//                 data-parent="#accordionEx">
//                 <div class="card-body">
//                   <article class="separator">
//                     <h3 class="section-title text-grey">Teoría</h3>
//                   </article>
//                   <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"><i
//                         class="ti-layout-slider mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Slides</a></h3>
//                   <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"> <i
//                         class="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Blog</a></h3>
//                   <div class="video">
//                     <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"><i
//                           class="ti-video-clapper mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Video</a></h3>
//                     <!--iframe width="500" height="250" src="https://www.youtube.com/embed/OMVO_TTitUM"
//                       title="YouTube video player" frameborder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowfullscreen></iframe-->
//                   </div>
  
//                   <h3 class="mb-xl-4 mb-lg-3 mb-4"><a href="http://"><i
//                         class="ti-receipt mb-xl-4 mb-lg-3 mb-4 feature-icon"></i> Recursos relacionados</a></h3>
  
//                   <article class="separator">
//                     <h3 class="section-title text-black">Práctica</h3>
//                   </article>
  
//                   <div class="alert alert-primary" role="alert">
//                     <p>Imágenes:</p>
//                     <ol class="list-styled">
//                       <li>Poner una imagen, buscar una foto para cargarla desde internet.</li>
//                       <li>A la imagen agregarle un link para hacer click y que nos lleve a un sitio web</li>
//                       <li>Hacer versión responsive, que el tamaño se adapte según la dimensión de la pantalla</li>
//                       <li>Cargar dos imágenes una abajo de la otra. Las imágenes deben ser de 200px de ancho</li>
//                     </ol>
//                   </div>
  
//                   <div class="alert alert-danger" role="alert">
//                     <p>Tener cuidado de que haya conexion a internet</p>
//                   </div>
//                   <p>
//                     <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapsePrctise"
//                       aria-expanded="false" aria-controls="collapsePrctise">
//                       Practicar
//                     </button>
//                     <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseSolution"
//                       aria-expanded="false" aria-controls="collapseExample">
//                       Ver la solución
//                     </button>
//                     <a href="http://" target="_blank"></a>
//                     <a href="https://programador2021.slack.com/archives/C01S2V8LZ8U" target="_blank">
//                       <button class="btn btn-primary" type="button">
//                         <img src="images/logo-slack.png" alt="" width="23">
//                         Chat
//                       </button>
//                     </a>
//                   </p>
  
//                   <div class="collapse" id="collapsePrctise">
//                     <h2>Practicá</h2>
//                     <div class="card card-body">
//                       <!--iframe frameborder="0" width="100%" height="500px"
//                         src="https://replit.com/@SergioGimnez/Example?lite=1&outputonly=1"></iframe-->
//                     </div>
//                   </div>
//                   <div class="collapse" id="collapseSolution">
//                     <h2>Esta es una posible solución</h2>
//                     <div class="card card-body">
//                       <!--iframe frameborder="0" width="100%" height="500px"
//                         src="https://replit.com/@SergioGimnez/PossibleSpectacularDisk?lite=1&outputonly=1"></iframe-->
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <!-- Accordion card -->
//         `


//     document.querySelector("#temario").innerHTML += template
//     console.log(tema.title)
//   })


// }
// drawTemplate()