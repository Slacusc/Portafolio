const Projects = () => {
    
    const template = //html
    `
    <div id="root">
    <div class="container-projects">
    <div class="proy1"></div>
    <div class="proy2"></div>
    <div class="proy3">
    <img class="icon4"  src="./src/img/icongit.png" alt="github image">
    <img class="icon5"  src="./src/img/iconlink.png" alt="linkedin image">
    </div>
    <div class="proy4"></div>
    <div class="proy5"></div>
    <div class="proy6">
      <h1 class="title-project">Proyectos </h1>
      <h3 class="text-project">Tengo más de 10 años de experiencia en diseño de la interfaz de usuario y la experiencia de usuario de decenas de sitios web y aplicaciones principales de hoy en día. 
      Me apasiona el diseño atrevido pero intuitivo y trabajar para empresas con responsabilidad social.
      Tengo más de 10 años de experiencia en diseño de la interfaz de usuario y la experiencia de usuario de decenas de sitios web y aplicaciones principales de hoy en día. 
      Me apasiona el diseño atrevido pero intuitivo y trabajar para empresas con responsabilidad social.</h3>
    </div>
    <div class="proy7"></div>
    <div class="proy8">
     <div class="slider">
      <div class="slider-container">
        <div  class="slide">
          <div class="front">
            <img src="./src/img/st.png" alt="coding game">
          </div>
          <div class="back">
          <img src="./src/img/card1.png" alt="card1">
          </div>
        </div>
        <div  class="slide">
        <a href="https://github.com/Slacusc/Fancosfic" target="_blank">

          <img src="./src/img/ff.png" alt="coding game">
        </div>
        <div  class="slide">
        <a href="https://slacusc.github.io/PokeGo/" target="_blank">

          <img src="./src/img/pg.png" alt="PokeGoogle">
        </div>
        <div  class="slide">
        <a href="https://slacusc.github.io/Survivors-Stage-Cipher/" target="_blank">

          <img src="./src/img/st.png" alt="coding game">
        </div>
        <div  class="slide">
        <a href="https://github.com/Slacusc/Fancosfic" target="_blank">

          <img src="./src/img/ff.png" alt="fancosfic">
        </div>
        <div  class="slide">
        <a href="https://slacusc.github.io/PokeGo/" target="_blank">

          <img src="./src/img/pg.png" alt="PokeGoogle">
        </div>
        <div  class="slide">
        <a href="https://slacusc.github.io/Survivors-Stage-Cipher/" target="_blank">

        <img src="./src/img/st.png" alt="coding game">
      </div>
      <div  class="slide">
      <a href="https://github.com/Slacusc/Fancosfic" target="_blank">

        <img src="./src/img/ff.png" alt="fancosfic">
      </div>
      <div  class="slide">
         <a href="https://slacusc.github.io/PokeGo/" target="_blank">
        <img src="./src/img/pg.png" alt="PokeGoogle">
      </div>
      <div  class="slide">
      <a href="https://slacusc.github.io/Survivors-Stage-Cipher/" target="_blank">

        <img src="./src/img/st.png" alt="coding game">
      </div>
      <div  class="slide">
      <a href="https://github.com/Slacusc/Fancosfic" target="_blank">

        <img src="./src/img/ff.png" alt="fancosfic">
      </div>
      <div  class="slide">
      <a href="https://slacusc.github.io/PokeGo/" target="_blank">

        <img src="./src/img/pg.png" alt="PokeGoogle">
      </div>
      <div  class="slide">
      <a href="https://github.com/Slacusc/Fancosfic" target="_blank">

      <img src="./src/img/ff.png" alt="fancosfic">
    </div>
    <div  class="slide">
    <a href="https://slacusc.github.io/PokeGo/" target="_blank">

      <img src="./src/img/pg.png" alt="PokeGoogle">
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