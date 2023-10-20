import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import Login from '@/pages/Login.vue'
import Layout from '@/components/Layouts/Layout.vue'
import Article from '@/pages/Article.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Index
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/about',
        component: About
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
