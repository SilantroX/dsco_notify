function showNotify(msgtype, message)
    if msgtype ~= "info" and msgtype ~= "success" and msgtype ~= "error" then
        print("Invalid message type")
        return
    end
    SendNUIMessage({
        type     = msgtype,
        message  = message,
        position = Config.Configuracion.position,
    })
end

exports("showNotify", function(msgtype, message)
    showNotify(msgtype, message)
end)

RegisterNetEvent("dsco_notify:showNotify")
AddEventHandler("dsco_notify:showNotify", function(msgtype, message)
    showNotify(msgtype, message)
end)

-- Comandos de prueba
RegisterCommand('testsuccess', function() showNotify("success", "¡El script está funcionando!") end)
RegisterCommand('testerror', function() showNotify("error", "¡El script está funcionando!") end)
RegisterCommand('testinfo', function() showNotify("info", "¡El script está funcionando!") end)
