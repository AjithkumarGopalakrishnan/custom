 var ganttChartContainer = null;
var orginalElement = null;
var taskbarEditState = false;

function bindGanttChartEvent() {
    ganttChartContainer = window.sfBlazor.Gantt.instance.taskbarEditModule.chartPane;
    sf.base.EventHandler.add(ganttChartContainer, sf.base.Browser.touchStartEvent, ganttMouseDownHandler, this);
    sf.base.EventHandler.add(ganttChartContainer, sf.base.Browser.touchEndEvent, ganttMouseUpHandler, this);
}

function destroyGanttChartEvent() {
    sf.base.EventHandler.remove(ganttChartContainer, sf.base.Browser.touchStartEvent, ganttMouseDownHandler);
    sf.base.EventHandler.remove(ganttChartContainer, sf.base.Browser.touchEndEvent, ganttMouseUpHandler);
}
function ganttMouseDownHandler(e) {
    if (e.target.closest(".e-taskbar-main-container") != null) {
        sf.base.EventHandler.add(ganttChartContainer, sf.base.Browser.touchMoveEvent, ganttMouseMoveHandler, this);
    }
}
function ganttMouseMoveHandler(e) {
    var cloneElement = document.querySelectorAll(".e-gantt-clone-taskbar");
    if (cloneElement != null && cloneElement != "undefined" && cloneElement.length > 0 && !taskbarEditState) {
        orginalElement = cloneElement[0].closest(".e-chart-row-cell").querySelectorAll(".e-taskbar-main-container");
        orginalElement[0].style.visibility = "hidden";
        taskbarEditState = true;
    }
}
function ganttMouseUpHandler(e) {
    taskbarEditState = false;
    if (orginalElement != null && orginalElement != "undefined" && orginalElement.length > 0) {
        orginalElement[0].style.visibility = "visible";
    }
    sf.base.EventHandler.remove(ganttChartContainer, sf.base.Browser.touchMoveEvent, ganttMouseMoveHandler);
}
