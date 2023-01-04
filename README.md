# TicketsFrontend

El presente proytecto es una aplicacion web, que gestiona tickets dentro de una organizacion. El mismo se encuentra desarrollado con JS vainila y utiliza los microservicios [AuthService](https://github.com/diloretoignacio/AuthService) y [TicketService](https://github.com/diloretoignacio/TicketService) para gestionar el backend y el acceso a la información

El sistema posee un control de usuarios, que, teniendo o no permisos (gestionados por un usuario administrador) pueden realizar diferentes acciones dentro del mismo.

Los tipos de usuarios admitidos por el sistema son:

* Administrador: Posee el control total del sistema, y es quien puede gestionar los roles/permisos de los demas usuarios
* Agente: Puede resolver los tickets asociados a su area dentro de la organizacion.
* Usuario basico: Puede generar un ticket para que le brinden solucion a su problematica

Las acciones que se pueden realizar sobre un ticket son:

* Derivar a otra categoria
* Cambiar el estado (Pendiente, En curso, Finalizado)
* Cambiar la prioridad (Alta, Baja, Media)
* Agregar Comentario

Cada agente posee un su menu de inicio un Dashboard, en el cual se le indica los tickets pendientes a resolver y su respectiva prioridad

## Ejecutar el proyecto

Para poder ejecutar el pryecto se debe instalar **vite**
```
npm install
```
Y luego ejecutar
```
npm run dev
```
El sistema crea un servidor local en el cual se puede probar el sistema
