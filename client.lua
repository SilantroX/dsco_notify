function showNotify(msgtype, message)
    local emoji = nil
    if msgtype == "info" then
        emoji = "fas fa-info-circle"
    elseif msgtype == "success" then
        emoji = "fas fa-check-circle"
    elseif msgtype == "error" then
        emoji = "fas fa-exclamation-triangle"
    else
        print("Invalid message type")
        return
    end
    SendNUIMessage({
        type = msgtype,
        message = message,
        emoji = emoji
    })
end

exports("showNotify", function(msgtype, message)
    showNotify(msgtype, message)
end)

RegisterNetEvent("dsco_notify:showNotify")
AddEventHandler("dsco_notify:showNotify", function(msgtype, message)
    showNotify(msgtype, message)
end)