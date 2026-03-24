# 🔔 dsco_notify — Notification System for FiveM

> **Bilingual / Bilingüe** — English & Español

[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/BTMEdqAr5H)
[![FiveM](https://img.shields.io/badge/FiveM-Compatible-F40552?style=for-the-badge&logo=fivem&logoColor=white)](https://fivem.net/)
[![Framework](https://img.shields.io/badge/Compatible-Any%20Framework-brightgreen?style=for-the-badge)](https://fivem.net/)

---

## 🌐 English

### Overview

A modern and elegant notification system for FiveM. Provides a clean, professional visual interface to replace the default notifications on your server.

> ✅ **Framework Compatibility:** This resource works with **any framework** (QBCore, ESX, Standalone, etc.) out of the box. The global integration tutorial below uses **QBCore** as a reference — if you use a different framework, find the equivalent notification function and apply the same replacement logic.

---

### 🚀 Installation

1. Clone or download this repository.
2. Copy the `dsco_notify` folder into your server's `resources/` directory.
3. Add the following line to your `server.cfg`:
   ```
   ensure dsco_notify
   ```
4. Restart your server.

---

### 🎮 Basic Usage

Call `showNotify` from any script using exports or events:

**Client-side:**
```lua
exports["dsco_notify"]:showNotify("error", "This is a test")
```

**Server-side:**
```lua
TriggerClientEvent("dsco_notify:showNotify", source, "info", "This is a test")
```

**Notification types:**

| Type | Description |
|---|---|
| `"info"` | Neutral informational message |
| `"success"` | Positive confirmation |
| `"error"` | Error or warning |

---

### 🛠️ Global Integration *(QBCore tutorial — adapt for other frameworks)*

> 📌 The steps below are written for **QBCore**. If you use ESX or another framework, locate the equivalent `Notify` function in your framework's files and apply the same replacement logic.

This makes **every script** on your server (jobs, police alerts, inventory, etc.) automatically use `dsco_notify` — no individual script changes needed.

---

#### Step 1 — Client-Side Patch

Edit: `resources/[qb]/qb-core/client/functions.lua`

Find `QBCore.Functions.Notify` and replace it with:

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

---

#### Step 2 — Server-Side Patch

Edit: `resources/[qb]/qb-core/server/functions.lua`

Find `QBCore.Functions.Notify` and replace it with:

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

> ⚠️ **Restart your server** after editing these files for changes to take effect.

---

#### Step 3 — Test Commands

Add these commands to verify everything is working:

```lua
RegisterCommand('testsuccess', function() showNotify("success", "Script is working!") end)
RegisterCommand('testerror',   function() showNotify("error",   "Script is working!") end)
RegisterCommand('testinfo',    function() showNotify("info",    "Script is working!") end)
```

---
---

## 🌐 Español

### Descripción General

Un sistema de notificaciones moderno y elegante para FiveM. Proporciona una interfaz visual limpia y profesional para reemplazar las notificaciones predeterminadas de tu servidor.

> ✅ **Compatibilidad:** Este recurso funciona con **cualquier framework** (QBCore, ESX, Standalone, etc.) sin configuración adicional. El tutorial de integración global a continuación usa **QBCore** como referencia — si usas otro framework, busca la función de notificación equivalente y aplica la misma lógica de reemplazo.

---

### 🚀 Instalación

1. Clona o descarga este repositorio.
2. Copia la carpeta `dsco_notify` dentro del directorio `resources/` de tu servidor.
3. Añade la siguiente línea a tu `server.cfg`:
   ```
   ensure dsco_notify
   ```
4. Reinicia tu servidor.

---

### 🎮 Uso Básico

Llama a `showNotify` desde cualquier script usando exports o eventos:

**Cliente:**
```lua
exports["dsco_notify"]:showNotify("error", "Esto es un test")
```

**Servidor:**
```lua
TriggerClientEvent("dsco_notify:showNotify", source, "info", "Esto es un test")
```

**Tipos de notificación:**

| Tipo | Descripción |
|---|---|
| `"info"` | Mensaje informativo neutral |
| `"success"` | Confirmación positiva |
| `"error"` | Error o advertencia |

---

### 🛠️ Integración Global *(tutorial para QBCore — adaptar para otros frameworks)*

> 📌 Los siguientes pasos están escritos para **QBCore**. Si usas ESX u otro framework, localiza la función `Notify` equivalente en los archivos de tu framework y aplica la misma lógica de reemplazo.

Esto hace que **todos los scripts** de tu servidor (trabajos, avisos de policía, inventario, etc.) usen automáticamente `dsco_notify` — sin necesidad de modificar cada script individualmente.

---

#### Paso 1 — Patch en el Cliente

Edita: `resources/[qb]/qb-core/client/functions.lua`

Busca `QBCore.Functions.Notify` y reemplázala por:

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

---

#### Paso 2 — Patch en el Servidor

Edita: `resources/[qb]/qb-core/server/functions.lua`

Busca `QBCore.Functions.Notify` y reemplázala por:

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

> ⚠️ **Reinicia tu servidor** después de editar estos archivos para que los cambios surtan efecto.

---

#### Paso 3 — Comandos de Prueba

Añade estos comandos para verificar que todo funciona correctamente:

```lua
RegisterCommand('testsuccess', function() showNotify("success", "¡El script está funcionando!") end)
RegisterCommand('testerror',   function() showNotify("error",   "¡El script está funcionando!") end)
RegisterCommand('testinfo',    function() showNotify("info",    "¡El script está funcionando!") end)
```

---

## 💬 Support / Soporte

Have questions or need help? Join our Discord community!  
¿Tienes dudas o necesitas ayuda? ¡Únete a nuestra comunidad de Discord!

[![Discord](https://img.shields.io/badge/Discord-Join%20Now-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/BTMEdqAr5H)

---

*Made with ❤️ for the FiveM community.*
