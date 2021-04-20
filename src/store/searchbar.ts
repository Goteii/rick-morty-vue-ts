import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module({ namespaced: true })
class Searchbar extends VuexModule {
  searchPhrase = "rick";

  get getSearchPhrase(): string {
    return this.searchPhrase || "";
  }

  @Mutation
  updateMessage(e: { target: { value: string } }) {
    this.searchPhrase = e.target.value;
  }
}

export default Searchbar;
