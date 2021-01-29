$('.videoImage').on('click', function(){
    videoURL = $(this).attr('title');
    console.log("vidoURL "+ videoURL);
    $(this).html('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtubeVideo"></iframe>')
});



// $('.acc').hover(function(){
//     console.log('hovered');
// },function(){
//     console.log('not hovered');
// })