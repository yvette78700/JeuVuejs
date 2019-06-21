import Vue from 'vue';
import Router from 'vue-router';
import Accueil from '@/components/Accueil';
import ActionJeu from '@/components/ActionJeu';
import HistoriquePartie from '@/components/HistoriquePartie';
import HistoriqueParties from '@/components/HistoriqueParties';
import NoticeJeu from '@/components/NoticeJeu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/partie',
      name: 'ActionJeu',
      component: ActionJeu
    },
    {
      path: '/histPartie',
      name: 'HistoriquePartie',
      component: HistoriquePartie
    },
    {
      path: '/histAllpart',
      name: 'HistoriqueParties',
      component: HistoriqueParties
    },
    {
      path: '/notice',
      name: 'NoticeJeu',
      component: NoticeJeu
    }
    

  ]
});
