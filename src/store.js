import axios from "axios"
import { reactive } from "vue"

export const store = reactive(
  {
    cards: [],
    loading: true,
    deckUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=49&offset=0",
    fetchCards(deck) {
      axios.get(deck)
        .then(response => {
          this.cards = response.data;
          this.cardList = response.data.data
          console.log(response.data);
        })
        .catch(error => {
          console.error(error.message);
        })
    }
  }
)