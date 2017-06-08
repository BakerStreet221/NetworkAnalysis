window.onload = function(event) {
    // On load, set the image size
    var graph = document.getElementById('graph');
    var new_size = ($(window).width() - 15) + 'px';
    
    graph.style.minWidth = new_size;
    graph.style.maxWidth = new_size;
    graph.style.minHeight = new_size;
    graph.style.maxHeight = new_size;
};

window.onresize = function(event) {
    // On window resize, change the image size
    var graph = document.getElementById('graph');
    var new_size = $(window).width() + 'px';

    graph.style.minWidth = new_size;
    graph.style.maxWidth = new_size;
    graph.style.minHeight = new_size;
    graph.style.maxHeight = new_size;
};
