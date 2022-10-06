const Contact = () => {
    
    const template = //html
    `
    <div id="root" >
        <div class="contact">
            <div class="contact1"></div>
            <div class="contact2">
                <h1 class="name4">Contáctame</h1>
            </div>
            <div class="contact3"></div>
            <div class="contac4">
                <div class="ver-line3">
            </div>
            <div class="contact5"></div>
            <div class="contact6"></div>
        </div>
    </div>    


    `
    const container = document.createElement('div')
    container.innerHTML = template
     
    return container

}

export default Contact