import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import {COMPONENTS_LIST} from '../constant'


Vue.use(Router)

const routes = COMPONENTS_LIST.map(item => {
    return {
        path: '/' + item.name,
        name: item.id,
        component: item.component
    }
})

export default new Router({
    routes:[
        {
            path:'/',
            name: 'Index',
            component: Index,
            children: routes
        }
    ]
})