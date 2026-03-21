/* =====================================================
   dsco_notify  ·  script.js
   ===================================================== */

var ICONS = {
    info: 'fas fa-info-circle',
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-triangle'
};

// Posición por defecto — se sobreescribe con el primer mensaje
var container = document.getElementById('notification-container');
container.className = 'top-right'; // default

function setPosition(pos) {
    var valid = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'];
    if (pos && valid.indexOf(pos) !== -1) {
        container.className = pos;
    }
}

function createNotification(type, message) {
    var el = document.createElement('div');
    el.className = 'notification ' + type;
    el.innerHTML =
        '<div class="notification__bar"></div>' +
        '<div class="notification__icon"><i class="' + (ICONS[type] || ICONS.info) + '"></i></div>' +
        '<div class="notification__sep"></div>' +
        '<div class="notification__msg">' + message + '</div>' +
        '<div class="notification__progress"><div class="notification__progress-fill"></div></div>';

    container.appendChild(el);

    setTimeout(function () {
        el.classList.add('show');
        el.querySelector('.notification__progress-fill').classList.add('drain');
    }, 20);

    setTimeout(function () {
        el.classList.remove('show');
        setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 320);
    }, 3300);
}

window.addEventListener('message', function (event) {
    var data = event.data;
    if (!data || !data.type || !data.message) return;

    // Si viene posición la aplicamos
    if (data.position) setPosition(data.position);

    createNotification(data.type, data.message);
});