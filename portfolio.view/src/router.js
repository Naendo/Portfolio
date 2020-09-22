import Home from './components/home'
import About from './components/about'
import VueRouter from 'vue-router'


const routes = [
    {path: '/', name: Home},
    {path: '/about', component: About}
]

export default new VueRouter({
    routes: routes
});




