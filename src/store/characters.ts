import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { CharactersApiI } from "../models/models";
import axios from "axios";

@Module({ namespaced: true })
class Characters extends VuexModule {
  characters: CharactersApiI[] = [];
  loading = true;
  error = false;
  headers = [
    "Photo",
    "Character ID",
    "Name",
    "Gender",
    "Species",
    "Last Episode",
    "Add To Favorites",
  ];
  searchPhrase = "";
  currentPage = 1;
  itemsPerPage = 5;
  resultCount = 0;

  get getCharacters(): CharactersApiI[] {
    return this.characters;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  get getError(): boolean {
    return this.error;
  }

  get getSearchPhrase(): string {
    return this.searchPhrase;
  }

  get getHeaders(): string[] {
    return this.headers;
  }

  @Mutation
  loadCharacters(characters: CharactersApiI[]): void {
    this.characters = characters;
  }

  @Mutation
  loadingOff(): void {
    this.loading = false;
  }

  @Mutation
  errorDetected(): void {
    this.error = true;
  }

  @Mutation
  updateMessage(e: { target: { value: string } }) {
    this.searchPhrase = e.target.value;
  }

  @Mutation
  resultSearching(newValue: string): CharactersApiI[] {
    this.searchPhrase = newValue;
    return this.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .match(this.searchPhrase.toLowerCase());
    });
  }

  @Action
  setResultSearching(newValue: string): void {
    this.context.commit("resultSearching", newValue);
  }

  @Action
  async fetchCharacters(): Promise<void> {
    try {
      const result = await axios({
        method: "POST",
        url: "https://rickandmortyapi.com/graphql",
        data: {
          query: `
                {
                  characters {
                  results {
                    name
                    id
                    gender
                    species
                    image
                    episode {
                      episode
                    }
                    }
                  }
                }
                `,
        },
      });
      this.context.commit(
        "loadCharacters",
        result.data.data.characters.results
      );
    } catch (e) {
      this.context.commit("loadingOff");
      this.context.commit("errorDetected");
      console.log(e);
    } finally {
      this.context.commit("loadingOff");
    }
  }
}

export default Characters;
