function animationShow(element) {
    var gantt = document.getElementById(element);
    gantt.querySelector('.e-chart-scroll-container').classList.add('e-gantt-show');
    gantt.querySelector('.e-gantt-skeleton').style.visibility = "visible";
    gantt.querySelector('.e-gridcontent').classList.add('e-gantt-show');
}
function animationHide(element) {
      var gantt = document.getElementById(element);
    gantt.querySelector('.e-gantt-skeleton').style.visibility = "hidden";
    gantt.querySelector('.e-gridcontent').classList.remove('e-gantt-show');
    gantt.querySelector('.e-chart-scroll-container').classList.remove('e-gantt-show');
}