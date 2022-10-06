const Home = () => {
    const template = //html
    `
<div id="root" >

    <div class="container">
      <div class="grid1">
        <div class="ver-line"></div>
      </div>
      <div class="grid2">
        <section class="name">Soledad Cortés</section>
        <section class="name2">Frontend Developer - Escritora</section>
      </div>
      <div class="grid4">
        <a href="https://github.com/Slacusc" Target="_blank"><img class="icon1"  src="./src/img/icongit.png" alt="github image"></a>
        <br>
        <a href="https://www.linkedin.com/in/soledad-cort%C3%A9s-473a27228/" Target="_blank"><img class="icon1"  src="./src/img/iconlink.png" alt="linkedin image"></a>
      </div>
      <div class="grid5">
        <h3 class="text-home">Egresada de Frontend Developer de Laboratoria. Mis ansias por aprender me tienen siempre atenta a los cambios 
        que la tecnología hace en pro de la innovación.
        <br>
        Bienvenido a mi pequeño portafolio, el cual iré nutriendo poco a poco con ideas, locuras y mucha perseverancia.
        </h3>            
      </div>
      <div class="grid7">
        <div class="ver-line2"></div>
      </div>
      <div class="grid8">
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