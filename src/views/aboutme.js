const About = () => {
    
    const template = //html
    `
 <div id="root">
    <div class="container-about">
        <div class="about1"></div>
        <div class="about2">
        <img class="icon3"  src="./src/img/icongit.png" alt="github image">
        <img class="icon2"  src="./src/img/iconlink.png" alt="linkedin image">
        </div>
        <div class="about3"></div>
        <div class="about4">
        <h1 class="name3">Sobre mí</h1>
        <h3 class="bio">Hola! Mi nombre es Soledad y realmente disfruto crear, diseñar e inventar soluciones atractivas visualmente. Además soy escritora de Ciencia Ficción y lidero una agrupación 
        de mujeres escritoras llamada "La Ventana del Sur" en donde visibilizamos a escritoras que escriben en los tres géneros: Ciencia Ficción, Fantasía y Terror</h3>
        <br>
        <h3 class="bio">Mi interés por la programación se remonta desde que tenía 14 años, en ese tiempo aprendí a diseñar páginas web ocupando Dreamweaver y aplicar algo de código en HTML y CSS!</h3>
        <br>
        <h3 class="bio">A pesar de que no pude seguir con una carrera en programación, siempre guardé el anhelo de volver a ello. La vida da muchas vueltas y ese sueño no se concretó en ese tiempo.
        Hoy a mis 36 años por fin puedo decir orgullosamente que soy Desarrolladora Frontend. Recientemente he estado trabajando en portales web relacionados con la literatura para buscar una interacción usuario mucho 
        más atractiva y llamativa.</h3>
        <br>
        <h3 class="bio"> Algunas de las herramientas que he ocupado son:</h3>
        <li class="bio">Javascript</li>
        <li class="bio">CSS</li>
        <li class="bio">HTML</li>
        <li class="bio">React</li>

        </div>
        <div class="about5"></div>
        <div class="about6">
        <img class="bio-photo" src="./src/img/biofoto.png" alt="biophoto">
          </div>
    </div>

        
        
        </div>
    </div>
    
    `
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

    }

    export default About