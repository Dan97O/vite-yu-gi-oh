import { reactive } from "vue"
import axios from "axios"

export const state = reactive(
  {
    deckUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    fetchCards(deck) {
      axios.get(deck)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error.message);
        })
    }
  }
)