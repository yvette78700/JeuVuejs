import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store(
    {
        state:{
            listScore:[],
            listBug:[],
            listScoreIA:[],
            listResultat:[],
            pseudo:''
        },
        mutations:{
            setScore(state, data) {
                state.listScore = data;
              },
              setBug(state,data){
                  state.listBug=data;

              },
              setIA(state,data){
                  state.listScoreIA=data;
              },
              setResultat(state,data)
              {
                  state.listResultat=data;
              },
              setPseudo(state,data)
              {
                  state.pseudo=data;
              }


        },
        getters:{
            getScore: state => {
                    return state.listScore;
            },
            getBug:state=>{
                return state.listBug;
            },
            getIA:state=>{
                return state.listScoreIA;
            },
            getResultat:state=>{
                return state.listResultat;
            },
            getPseudo:state=>{
                return state.pseudo;
            }

        },
        actions:{}

    
    })