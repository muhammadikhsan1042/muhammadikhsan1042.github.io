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

    if($( window ).width() < 1000) {
        alert('Please Open With Desktop');
    }

    $('footer ul li').click(({ currentTarget }) => {
        if (currentTarget.attributes['view-target'].value == 'page-blog') {
            console.log('1');
            window.location.replace("http://www.blog.muhammadikhsan.my.id");
        }
        goPage(currentTarget.attributes['view-target'].value);
    });
});