const Projects = () => {
    
    const template = //html
    `
    <div id="root">
    <div class="container-projects">
    <div class="proy1"></div>
    <div class="proy2"></div>
    <div class="proy3">
    <img class="icon3"  src="./src/img/icongit.png" alt="github image">
    <img class="icon2"  src="./src/img/iconlink.png" alt="linkedin image">
    </div>
    <div class="proy4"></div>
    <div class="proy5"></div>
    <div class="proy6">
      <h1 class="title-project">Proyectos </h1>
    </div>
    <div class="proy7"></div>
    <div class="proy8"></div>
  </div>
        
    </div>
    
    
    `
     
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

} 


export default Projects;