/**
 * 메인 함수 
 */



/* 페이스북 클릭 */
$('.facebook').click((e) => {
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 
        'facebooksharedialog', 
        'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
});
/* 트위터 클릭 */
$('.twitter').click((e) => {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 
        'twittersharedialog', 
        'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});