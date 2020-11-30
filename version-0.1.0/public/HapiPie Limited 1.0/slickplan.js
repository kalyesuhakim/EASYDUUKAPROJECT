jQuery(document).ready(function($) {
    $('.slickplan-note').each(function() {
        var $note = $(this);
        var $li = $note.closest('li');
        var note = $li.attr('title');
        $li.removeAttr('title');
        $note.qtip({
            content: {text: note},
            position: {
                my: 'top center',
                at: 'bottom center'
            },
            show: {event: 'click'},
            hide: {event: false},
            style: {classes: 'slickplan-qtip'}
        });
    });
    $('.slickplan').on('click', function() {
        $('.slickplan-note').each(function() {
            $(this).qtip('api').hide();
        });
    });
});