# Sistema de Notificaciones para FiveM

Este es un sistema de notificaciones para FiveM que proporciona notificaciones elegantes para tu servidor.

## Instalación

1. Clona o descarga este repositorio.

2. Copia el contenido de la carpeta `resources` en la carpeta `resources` de tu servidor FiveM.

3. Agrega `start dsco_notify` en tu `server.cfg` para iniciar el script.

## Uso

Para utilizar el sistema de notificaciones desde cualquier parte de tu script, puedes llamar a la función `createNotification` con los parámetros adecuados. Aquí tienes un ejemplo:

Client:
```lua
exports["dsco_notify"]:showNotify("error", "Esto es un test")
```
Server:
```lua
TriggerClientEvent("dsco_notify:showNotify", source, "info", "Esto es un test")
```
Parámetros de `createNotification`:

- `type`: Puede ser 'info', 'success' o 'error'.
- `message`: El mensaje que deseas mostrar en la notificación.

¡Listo! Ahora deberías tener un sistema de notificaciones funcionando en tu servidor FiveM.
