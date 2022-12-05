import { navigateTo } from "../../../router/router";
import { addComment } from "../../../services";
import { Message } from "../../Message/Message";

export const useAddComment = async (view, ticket, redirectHome) => {

	const divElement = document.createElement('div');
	divElement.classList.add('newComment');		
	divElement.innerHTML = view;
	
    const btnAddComment = divElement.querySelector("#btnAddComment");
    btnAddComment.addEventListener("click", async () => {
      const taComment = divElement.querySelector("#taComment");   

      if(taComment.value == "")
      {
        Message("El campo de comentario NO puede estar vacio", "warn");
      }
      else
      {
        var a = await addComment(ticket.idTicket, taComment.value);

        redirectHome 
          ? navigateTo("/")
          : navigateTo("/tickets/" + ticket.idTicket);

      }
    });

	return divElement;
};
