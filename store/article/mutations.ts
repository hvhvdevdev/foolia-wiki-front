import Article from "~/interfaces/article";

export default {
  setArticles(state: any, payload: Article[]) {
    state.articles = payload
  }
}
