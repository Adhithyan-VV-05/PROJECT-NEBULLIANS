$(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
  
    var setView = function(view) { universe.removeClass().addClass(view); };
  
    $("#toggle-data").click(function(e) {
      body.toggleClass("data-open data-close");
      e.preventDefault();
    });
  
    $("#toggle-controls").click(function(e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });
  
    $("#data a").click(function(e) {
      var ref = $(this).attr("class");
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });
  
    init();
  
  });

  $(window).load(function(){
    

    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
      generateCelestialBodies(); 
    };

    // ... existing code ...

    init();


    function generateCelestialBodies() {
        const celestialBodies = [
            { name: 'Moon', distance: 0.00257, size: 0.2724 },
            { name: 'ISS', distance: 0.0000002, size: 0.0001 },
            { name: 'Hubble', distance: 0.000001, size: 0.00005 },
            { name: 'Asteroid Bennu', distance: 0.0013, size: 0.0003 }
        ];

        const solarSystem = $('#solar-system');
        
        celestialBodies.forEach(body => {
            const bodyElement = $('<div>', {
                class: `celestial-body ${body.name.toLowerCase()}`,
                'data-name': body.name
            }).appendTo(solarSystem);

            bodyElement.css({
                '--distance': `${body.distance * 50}em`,
                '--size': `${body.size * 10}em`
            });

            $('<div>', { class: 'placeholder' }).appendTo(bodyElement);
            $('<div>', { class: 'overlay' }).appendTo(bodyElement);
        });
    }
});