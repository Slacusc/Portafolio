import {initRouter, next} from "../router/router.js"


const Home = () => {
    const template = //html
    `
    <div id="root" >
    <div class="topnav">
      <a href="contact">Contáctame</a>
      <a href="projects">Proyectos</a>
      <a href="about">Sobre mí</a>
      <a class="active" href="/">Home</a>
    </div>
    <div class="container">
      <div class="grid1">
        <div class="ver-line"></div>
      </div>
      <div class="grid2">
        <section class="name">Soledad Cortés</section>
        <section class="name2">Frontend Developer - Escritora</section>
      </div>
      <div class="grid4">
        <img class="icon"  src="./src/img/icongit.png" alt="github image">
        <br>
        <img class="icon"  src="./src/img/iconlink.png" alt="linkedin image">
      </div>
      <div class="grid5">
        <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>            
      </div>
      <div class="grid7">
        <div class="ver-line2"></div>
      </div>
      
      <div class="grid9">
        <img class="corner-img"  src="./src/img/corner.png" alt="Corner image">
      </div>   
    </div>
    
        
  </div>
    `
    
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

}

export default Home;