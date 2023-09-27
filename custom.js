function hideTable(element) {
    var gantt = document.getElementById(element);
    var virtualTable = gantt.querySelector('.e-content');
    var ganttVirtualTable = gantt.querySelector('.e-chart-scroll-container');
    ganttVirtualTable.style.setProperty('visibility', 'hidden');
    virtualTable.style.setProperty('visibility','hidden');
}

function showTable(element) {
    var gantt = document.getElementById(element);
    var virtualTable = gantt.querySelector('.e-content');
    var ganttVirtualTable = gantt.querySelector('.e-chart-scroll-container');
    ganttVirtualTable.style.removeProperty('visibility');
    virtualTable.style.removeProperty('visibility');
}

function animationShow(element) {
    var gantt = document.getElementById(element);
    var ele = gantt.querySelector('.e-virtualtable');
    ele.style.display = "none";
    var ele1 = gantt.querySelector('.e-task-table');
    ele1.style.display = "none";
}

function animationHide(element) {
    var gantt = document.getElementById(element);
    var ele = gantt.querySelector('.e-virtualtable');
    ele.style.removeProperty('display');
    var ele1 = gantt.querySelector('.e-task-table');
    ele1.style.removeProperty('display');
}

function aniShow(element) {
    var gantt = document.getElementById(element).style.visibility = "visible";
}

function aniHide(element) {
    var gantt = document.getElementById(element).style.visibility = "hidden";
}