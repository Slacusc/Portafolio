const Process = () => {
    
    const template = //html
    `
    <div id="root" >
        <div class="contact">
            <div class="contact1"></div>
            <div class="contact2">
                <h1 class="name4">Contáctame</h1>
            </div>
            <div class="contact3"></div>
            <div class="contact4">
                <div class="ver-line3"></div>
            </div>
            <div class="contact5">
                <a href="https://www.linkedin.com/in/soledad-cort%C3%A9s-473a27228/" class="links" style="text-decoration-line:none" Target="_blank"><i class="fa-brands fa-linkedin"></i>
                Linkedin</a>
                <br>
                <a href="https://github.com/Slacusc" class="links" style="text-decoration-line:none" Target="_blank"><i class="fa-brands fa-github"></i>
                GitHub</a>


            
            </div>
            <div class="contact6"></div>
        </div>
    </div>    


    `
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

}

export default Process;