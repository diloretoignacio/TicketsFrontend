import { getStorage } from "../../helpers/storage";
import { useUserProfile } from "./hooks/useUserProfile";
import "./styles/userProfile.css";

export const UserProfile = () => {

    const user = getStorage("tickets_user");

    let view = `    
            <div class="info"> 
                <span> ${user.firstName} ${user.lastName} </span>
                <strong>${user.rol.title}</strong>
            </div>
            <button id="btnAvatar"><img src="https://joeschmoe.io/api/v1/random" alt="userPick" title="userPick"/>	</button>
        `;
//Si joeschmoe no se encuentra funcionando se puede utilizar https://pic.onlinewebfonts.com/svg/img_569204.png
    return useUserProfile(view);
};
