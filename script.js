const svg = document.getElementById('svg');
let startX, startY, elementX, elementY, element;

svg.addEventListener('mousedown', e => {
    const className = e.target.getAttributeNS(null, 'class');
    if (className.indexOf('draggable') >= 0) {
        startX = e.offsetX;
        startY = e.offsetY;
        element = e.target;
        elementX = +element.getAttributeNS(null, 'x');
        elementY = +element.getAttributeNS(null, 'y');
        svg.addEventListener('mousemove', onMouseMove);
    }
 });
 onMouseMove = e => {
    let x = e.offsetX;
    let y = e.offsetY;
    element.setAttributeNS(null, 'x', elementX + x - startX);
    element.setAttributeNS(null, 'y', elementY + y - startY);
 };
 svg.addEventListener('mouseup', e => {
    svg.removeEventListener('mousemove', onMouseMove);
 });
   