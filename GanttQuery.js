 function animationShow(element) {
            var gantt = document.getElementById(element);
            gantt.classList.add('e-gantt-show');
        }
        function animationHide(element) {
            var gantt = document.getElementById(element);
            gantt.classList.remove('e-gantt-show');
        }