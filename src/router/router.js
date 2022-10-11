import Home from "../views/home.js"
import About from "../views/aboutme.js"
import Projects from "../views/projects.js"
import Contact from "../views/contactme.js"
import Process from "../views/process.js"
//creation of router

const routes = [
  {
    path: '/',
    name: 'Home',
    template: Home(),
},

  {
    path: '/about',
    name: 'About Me',
    template: About(),
  },

  {
    path: '/projects',
    name: 'Proyectos',
    template: Projects()
  },

  {
    path: '/process',
    name: 'Proceso',
    template: Process()
  },

  {
    path: '/contact',
    name: 'contact',
    template: Contact()
  }
]


//Function for render

const renderTemplate = () => {
  const view = routes.filter(route => route.path === window.location.pathname)[0]
  const container = document.getElementById("app")
  container.innerHTML = ''
  container.appendChild(view.template) //para agregar el template


}

// Next and back function

const next = (path) => {
  const view = routes.filter(route => route.path === path)[0]
  history.pushState({}, view.name, view.path)
  renderTemplate()



}

// const navigate = (path) => { navGuard (next, path, '/login') }//


const initRouter = () => {
  // navGuard(next,'/', 'login' )
  renderTemplate()
  window.onpopstate = () => {
    renderTemplate()

  }
}

export { next, initRouter }
