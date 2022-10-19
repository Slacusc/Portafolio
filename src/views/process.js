const Process = () => {
    
    const template = //html
    `
    <div id="root" >
        <div class="process">
            <div class="proc1"></div>
            <div class="proc2">
            <a href="https://github.com/Slacusc" Target="_blank"><img class="icon3"  src="./assets/icongit.png" alt="github image"></a>
            <a href="https://www.linkedin.com/in/soledad-cort%C3%A9s-473a27228/" Target="_blank"><img class="icon3"  src="./assets/iconlink.png" alt="linkedin image"></a>
            </div>
            <div class="proc3"></div>
            <div class="proc4">
                <h1 class="title-project">Proceso Creativo</h1>
                <h3 class="text-project">Hablemos de Veggie Happy<br><br> 
        Muchas veces en nuestros proyectos nos tocó enfrentarnos a un ambiente de trabajo donde todo se trabajaba de una idea que
        tenía que surgir de nuestra imaginación. Veggie Happy fue uno de los proyectos en donde, para darle mayor contexto creamos  
        <br>
        Para iniciar el diseño, primero quise situarnos en un problema del usuario. En el caso de VeggieHappy plantée la idea de que se necesitaba una
        mejor relación entre los meseros y la cocina con el fin de optimizar tiempos de servicio.
        Todo esto con una temática en donde creé un
        Puedes pasar tu mouse sobre las tarjetas y conocer un poco más de lo que ha sido este corto periodo de desarrollo Frontend,
        pero en donde he logrado muchos objetivos, siempre en pro de ir puliéndome cada vez más.</h3>
            </div>
            <div class="proc5"></div>
        </div>
    </div>    


    `
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

}

export default Process;
