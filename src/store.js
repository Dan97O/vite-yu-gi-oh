import axios from "axios"
import { reactive } from "vue"

export const store = reactive(
  {
    searchSelect: '',
    cards: [],
    loading: true,
    archetypes: null,
    deckUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=49&offset=0",
    deckUrlArchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    fetchCards(url) {
      const maxNumArchetype = "?num=49&offset=0";
      let compoundUrl = url + maxNumArchetype;

      /*   if (this.searchSelect != '') {
          url += `&archetype=${this.searchSelect}`
        } */

      axios.get(compoundUrl)
        .then(response => {
          this.cards = response.data;
          this.cardList = response.data.data
          //console.log(response.data);
        })
        .catch(error => {
          console.error(error.message);
        })

    },
    fetchArchetypes(url) {
      axios
        .get(url)
        .then((response) => {
          this.archetypes = response.data;
        })
        .catch(error => {
          console.error(error.message);
        })

    }
  }
)