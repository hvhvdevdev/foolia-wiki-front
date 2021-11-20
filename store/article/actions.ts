import axios from "axios";
import {Commit} from 'vuex'

export default {
  async updateArticles({commit}: { commit: Commit }) {
    axios.get('http://localhost:8080/api/articles', {
      auth: {
        username: 'hai',
        password: '123'
      }
    }).then(response => commit('setArticles', response.data._embedded.articles))
  }
}
