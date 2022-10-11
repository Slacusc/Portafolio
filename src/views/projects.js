const Projects = () => {
    
    const template = //html
    `
    <div id="root">
    <div class="container-projects">
      <div class="proy1"></div>
      <div class="proy2"></div>
      <div class="proy3">
        <a href="https://github.com/Slacusc" Target="_blank"><img class="icon3"  src="./src/assets/icongit.png" alt="github image"></a>
        <a href="https://www.linkedin.com/in/soledad-cort%C3%A9s-473a27228/" Target="_blank"><img class="icon3"  src="./src/assets/iconlink.png" alt="linkedin image"></a>
      </div>
      <div class="proy4"></div>
      <div class="proy5"></div>
      <div class="proy6">
        <h1 class="title-project">Proyectos </h1>
        <h3 class="text-project">¡Has llegado a mi página de proyectos personales!, BIENVENIDO.
        <br> La mayoría de ellos fueron desarrollados
        en mi paso por Laboratoria. En estos desafíos ocupé herramientas como Javascript, HTML, CSS y React, pasando por Firestore, Firebase y también
        algunas herramientas (muy importantes) para desarrollar los proyectos como Figma, Canva y diagramas de secuencia para poder visualizar
        pseudocodigo con mayor facilidad y poder tomar las decisiones correctas y en un tiempo que se ciñera a cada sprint.
        <br>
        Puedes pasar tu mouse sobre las tarjetas y conocer un poco más de lo que ha sido este corto periodo de desarrollo Frontend,
        pero en donde he logrado muchos objetivos, siempre en pro de ir puliéndome cada vez más.</h3>
      </div>
      <div class="proy7"></div>
      <div class="proy8">
        <div class="card">
          <div class="face front">
            <img src="./src/assets/st.png" alt="">
            <h3>Survivor Stage Game</h3>
          </div>
          <div class="face back">
            <h3>Survivor Stage</h3>
            <h4>Herramientas: Javascript, HTML, CSS</h4>

            <p>Survivors Stage, es un minijuego de ciencia ficción, donde tienes que resolver códigos misteriosos para poder escapar de una terrible nave controlada por una inteligencia artificial.</p>
          <div class="link">
            <a href="https://github.com/Slacusc/Survivors-Stage-Game">Ver Repositorio</a>
            <a href="https://slacusc.github.io/Survivors-Stage-Game/">Deploy</a>
          </div>
      </div>
  </div>
  <div class="card">
      <div class="face front">
          <img src="./src/assets/ff.png" alt="">
          <h3>Fancosfic</h3>
      </div>
      <div class="face back">
          <h3>Fancosfic</h3>
          <h4>Herramientas: Javascript, Firebase, HTML, CSS</h4>

          <p>Fancosfic es una red social para "geeks" que quieren compartir y hacer comunidad. Van a tener un espacio seguro para organizar muchos eventos, compartir fotos, etc.</p>
          <div class="link">
              <a href="https://github.com/Slacusc/Fancosfic">Ver repositorio</a>
          </div>
      </div>
  </div>

  <div class="card">
      <div class="face front">
          <img src="./src/assets/pg.png" alt="">
          <h3>PokeGoogle</h3>
      </div>
      <div class="face back">
          <h3>PokeGoogle</h3>
          <h4>Herramientas: Javascript, HTML, CSS</h4>

          <p>PokeGoogle es un navegador de Pokemon. Puedes encontrar las debilidades de los pokemones de Kanto y Jotho para elegir sabiamente cuando vayas a luchar contra otro maestro pokemón.</p>
          <div class="link">
              <a href="https://github.com/Slacusc/PokeGoogle">Ver repositorio</a>
              <a href="https://slacusc.github.io/PokeGoogle/">Deploy</a>
          </div>
      </div>
  </div>
  <div class="card">
      <div class="face front">
          <img src="./src/assets/bhp.png" alt="">
          <h3>BHP Payroll</h3>
      </div>
      <div class="face back">
          <h3>BHP Payroll</h3>
          <h4>Herramientas: React, HTML, Tailwind</h4>
          <p>Es una interfaz hecha para cargar todos los nominados de los empleados de esta empresa mundial. Con mi equipo, creamos esta página im una semana. La aplicación permite una carga rápida de los datos .CSV y de los datos de discrepancia.</p>
          <div class="link">
              <a href="https://github.com/Slacusc/BHP-Talent">Ver Repositorio</a>
              <a href="https://classy-kitsune-0460aa.netlify.app/">Deploy</a>
          </div>
      </div>
  </div>
  <div class="card">
  <div class="face front">
      <img src="./src/assets/veg.png" alt="">
      <h3>Veggie Happy</h3>
  </div>
  <div class="face back">
      <h3>Veggie Happy</h3>
      <h4>Herramientas: React, HTML, CSS</h4>
      <p>VeggieHappy es una app para optimizar la comunicación entre los meseros y la cocina. Logrando optimizar tiempos de preparación de platos y también la toma de órdenes de manera más agil.</p>
      <div class="link">
          <a href="https://github.com/Slacusc/Veggie-Happy">Ver repositorio</a>
          
      </div>
  </div>
</div>
      </div>

      </div>  
    </div>
    
    
    `
     
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

} 


export default Projects;