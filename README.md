# 🔔 dsco_notify | Sistema de Notificaciones para FiveM

Este es un sistema de notificaciones moderno y elegante para FiveM, diseñado para proporcionar una interfaz visual limpia y profesional en tu servidor.

## Instalación

1. Clona o descarga este repositorio.

2. Copia el contenido de la carpeta `resources` en la carpeta `resources` de tu servidor FiveM.

3. Agrega `ensure dsco_notify` en tu `server.cfg` para iniciar el script.

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

---

## 🛠️ Integración Total con QBCore (Global)

Para que **todos** los scripts de tu servidor (nóminas, avisos de policía, inventario, etc.) usen automáticamente este sistema, debes realizar estos dos ajustes:

### 1. Lado del CLIENTE (Client-Side)

Edita el archivo: `resources/[qb]/qb-core/client/functions.lua`  
Busca la función `QBCore.Functions.Notify` y reemplázala por esta:

```lua
function QBCore.Functions.Notify(text, texttype, length, icon)
    local messageText = text
    if type(text) == 'table' then
        messageText = text.text or 'Placeholder'
    end

    local validTypes = {
        ['primary'] = 'info',
        ['success'] = 'success',
        ['error']   = 'error',
        ['info']    = 'info'
    }
    
    local finalType = validTypes[texttype] or 'info'
    exports["dsco_notify"]:showNotify(finalType, messageText)
end
```

### 2. Lado del SERVER (Server-Side)

Edita el archivo: `resources/[qb]/qb-core/server/functions.lua`  
Busca la función `QBCore.Functions.Notify` y reemplázala por esta:

```lua
function QBCore.Functions.Notify(source, text, type, length)
    local messageText = text
    if type(text) == 'table' then
        messageText = text.text or 'Placeholder'
    end

    local validTypes = {
        ['primary'] = 'info',
        ['success'] = 'success',
        ['error']   = 'error',
        ['info']    = 'info'
    }
    
    local finalType = validTypes[type] or 'info'
    TriggerClientEvent('dsco_notify:showNotify', source, finalType, messageText)
end
```

### 3. Comandos de Prueba

```lua
RegisterCommand('testsuccess', function() showNotify("success", "¡El script está funcionando!") end)
RegisterCommand('testerror', function() showNotify("error", "¡El script está funcionando!") end)
RegisterCommand('testinfo', function() showNotify("info", "¡El script está funcionando!") end)
```

¡Listo! Ahora deberías tener un sistema de notificaciones funcionando en tu servidor FiveM.
