import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Contact from '@/components/Contact'
import Register from '@/components/Register'
import Game from '@/components/Game'
import Manager from '@/components/Manager'
import Parent from '@/components/Parent'
import Teacher from '@/components/Teacher'
import Addclass from '@/components/Addclass'
import Addteacher from '@/components/Addteacher'
import Viewteacher from '@/components/Viewteacher'
import Viewchild from '@/components/Viewchild'
import Viewchilds from '@/components/Viewchild'
import Addchild from '@/components/Addchild'
import Viewparent from '@/components/Viewparent'
import Viewsick from '@/components/Viewsick'
import Addat from '@/components/Addat'
import Addstory from '@/components/Addstory'
import Createsick from '@/components/Createsick'
import Paymentview from '@/components/Paymentview'
import StoryView from '@/components/StoryView'
import Atview from '@/components/Atview'
import Pic from '@/components/Pic'
import TLogin from '@/components/TLogin'
import MLogin from '@/components/MLogin'
import Addts from '@/components/Addts'
import Addcsc from '@/components/Addcsc'

Vue.use(Router)

export default new Router({
  routes: [


   {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
          keepalive:true
      }

   },



   {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta:{
        keepalive:true
    }

 },

 {
  path: '/StoryView',
  name: 'StoryView',
  component: StoryView,
  meta:{
      keepalive:true
  }

},

 {
  path: '/Createsick',
  name: 'Createsick',
  component: Createsick,
  meta:{
      keepalive:true
  }

},

{
  path: '/Paymentview',
  name: 'Paymentview',
  component: Paymentview,
  meta:{
      keepalive:false
  }

},


{
  path: '/Atview',
  name: 'Atview',
  component: Atview,
  meta:{
      keepalive:true
  }

},




   {
      path: '/',
      name: 'Main',
      component: Main,
      meta:{
          keepalive:true
    }

   },

   {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta:{
        keepalive:true
  }

 },


 {
  path: '/Game',
  name: 'Game',
  component: Game,
  meta:{
      keepalive:true
}

},


{
  path: '/Manager',
  name: 'Manager',
  component: Manager,
  meta:{
      keepalive:true
}

},

{
  path: '/Parent',
  name: 'Parent',
  component: Parent,
  meta:{
      keepalive:true
}

},


{
  path: '/Teacher',
  name: 'Teacher',
  component: Teacher,
  meta:{
      keepalive:true
}

},



{
  path: '/Addchild',
  name: 'Addchild',
  component: Addchild,
  meta:{
      keepalive:true
}

},

{
  path: '/Viewparent',
  name: 'Viewparent',
  component: Viewparent,
  meta:{
      keepalive:false
}

},


{
  path: '/Viewchild',
  name: 'Viewchild',
  component: Viewchild,
  meta:{
      keepalive:true
}

},

{
  path: '/Viewchilds',
  name: 'Viewchilds',
  component: Viewchilds,
  meta:{
      keepalive:true
}

},





{
  path: '/Viewteacher',
  name: 'Viewteacher',
  component: Viewteacher,
  meta:{
      keepalive:true
}

},

{
  path: '/Addteacher',
  name: 'Addteacher',
  component: Addteacher,
  meta:{
      keepalive:true
}

},


{
  path: '/Addclass',
  name: 'Addclass',
  component: Addclass,
  meta:{
      keepalive:true
}

},

{
  path: '/Viewsick',
  name: 'Viewsick',
  component: Viewsick,
  meta:{
      keepalive:true
}

},

{
  path: '/Addat',
  name: 'Addat',
  component: Addat,
  meta:{
      keepalive:true
}

},

{
  path: '/Addstory',
  name: 'Addstory',
  component: Addstory,
  meta:{
      keepalive:true
}

},

{
  path: '/Pic',
  name: 'Pic',
  component: Pic,
  meta:{
      keepalive:true
}

},


{
  path: '/MLogin',
  name: 'MLogin',
  component: MLogin,
  meta:{
      keepalive:true
}

},



{
  path: '/TLogin',
  name: 'TLogin',
  component: TLogin,
  meta:{
      keepalive:true
}

},

{
  path: '/Addts',
  name: 'Addts',
  component: Addts,
  meta:{
      keepalive:true
}

},


{
  path: '/Addcsc',
  name: 'Addcsc',
  component: Addcsc,
  meta:{
      keepalive:false
}

},





  ]
})
