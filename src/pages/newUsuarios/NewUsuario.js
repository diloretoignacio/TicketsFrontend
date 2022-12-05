import { useNewUsuario } from './hooks/useNewUsuario';
import './styles/newUsuario.css';

export const NewUsuario = async() => {
    let view = `
        <h1> Nuevo Usuario </h1>  
        <section class="newUsuario">   
            <input type="input" id="usernameUsuario" placeholder = "Nombre de usuario">
            <input type="input" id="nameUsuario" placeholder = "Nombre">
            <input type="input" id="apellidoUsuario" placeholder = "Apellido">
            <input type="input" id="telefonoUsuario" placeholder = "Teléfono">
            <input type="input" id="dniUsuario" placeholder = "DNI">
            <input type="input" id="emailUsuario" placeholder = "E-Mail">
            <select id="sl-rol" class="sl-rol">
                <option value= "1">Administrador</option>
                <option value= "2">Usuario</option>
                <option value= "3">Agente</option>
            </select> 
            <select id="sl-area" class="sl-area">
                <option value= "1">Administración</option>
                <option value= "2">Compra/Venta</option>
                <option value= "3">Soporte</option>
            </select> 
            <button id="btnAddUsuario">Crear</button>
        </section>    
    `;  
    
    return useNewUsuario(view);    
}