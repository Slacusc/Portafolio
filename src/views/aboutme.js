const About = () => {
    
    const template = //html
    `
 <div id="root">
    <div class="container-about">
        <div class="about1"></div>
        <div class="about2"></div>
        <div class="about3"></div>
        <div class="about4">
        <h1>Sobre mí</h1>
        <h2>Tengo más de 10 años de experiencia en diseño de la interfaz de usuario y la experiencia de usuario de decenas de sitios web y aplicaciones principales de hoy en día. 
        Me apasiona el diseño atrevido pero intuitivo y trabajar para empresas con responsabilidad social.
        Tengo más de 10 años de experiencia en diseño de la interfaz de usuario y la experiencia de usuario de decenas de sitios web y aplicaciones principales de hoy en día. 
        Me apasiona el diseño atrevido pero intuitivo y trabajar para empresas con responsabilidad social.
        
        Tengo más de 10 años de experiencia en diseño de la interfaz de usuario y la experiencia de usuario de decenas de sitios web y aplicaciones principales de hoy en día. 
        Me apasiona el diseño atrevido pero intuitivo y trabajar para empresas con responsabilidad social.</h2></div>
        <div class="about5"></div>
        <div class="about6"></div>
    </div>

        
        
        </div>
    </div>
    
    `
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

    }

    export default About