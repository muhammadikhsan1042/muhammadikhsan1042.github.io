const goPage = (path = '', target="_parent") => {

    path && window.open('/#/'+path, target); 

    var page    = window.location.hash.replace('#/', '') || 'page-home',
        classes = '.'+page,
        now = $('#page-wrap')[0].offsetLeft,
        scroll = $(classes)[0].offsetLeft,
        width = $(classes)[0].clientWidth,
        time = Math.abs((scroll+now)/width)*500;

    $('footer ul li').removeClass('actived');
    $("li[view-target="+ page +"]").addClass('actived');

    $('#page-wrap').animate({
        left: -scroll
    }, time);
}

$('document').ready(() => {

    goPage();

    $('footer ul li').click(({ currentTarget }) => {
        goPage(currentTarget.attributes['view-target'].value);
    });
});