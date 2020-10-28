export const $ = function (foo) {return document.getElementById(foo);}


/*
 * animate svg, params:
 * svgelm: id of svg in html
 * widx: width of animated svg
 * wp: viewport (html elm) holding the svgelm
 */
export const anim = function (svgelm, widx, dx, wp) {
    let vb = window.getComputedStyle($(wp));
    let xmax = parseInt(vb.getPropertyValue('width'));
    let ymax = parseInt(vb.getPropertyValue('height'));

    let timer = setInterval(function () {
        let svg = window.getComputedStyle($(svgelm));
        let left = parseInt(svg.getPropertyValue('left'));
        let top = parseInt(svg.getPropertyValue('top'));

        if (left < 0 || left + widx > xmax || left < 0 || top + widx > ymax)
            dx *= -1;
        $(svgelm).style.left  = left + dx + 'px';
        $(svgelm).style.top  = top + dx + 'px';

    }, 10);
    console.log(svgelm)
}
