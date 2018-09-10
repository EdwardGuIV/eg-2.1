// DrawRectangle.js
function main() {
    //retrieve canvas element

    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed');
        return;
    }

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0, 0 ,250, 1.0)';
    ctx.fillRect(120, 10, 150, 150);
}
