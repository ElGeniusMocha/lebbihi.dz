$(window).load(function(){
var thumbnail_list = [
    'https://i.ytimg.com/vi/[video-id]/maxresdefault.jpg',
    'https://i.ytimg.com/vi/[video-id]/0.jpg',
    'https://i.ytimg.com/vi/[video-id]/1.jpg',
    'https://i.ytimg.com/vi/[video-id]/2.jpg',
    'https://i.ytimg.com/vi/[video-id]/3.jpg',
    'https://i.ytimg.com/vi/[video-id]/default.jpg',
    'https://i.ytimg.com/vi/[video-id]/hqdefault.jpg',
    'https://i.ytimg.com/vi/[video-id]/mqdefault.jpg',
    'https://i.ytimg.com/vi/[video-id]/sddefault.jpg'
];
    
var update = function() {
    
    if ( update_html ) {
    
        var html = '';
        var video_id = $('#videoID').val();
        
        $.each(thumbnail_list, function(){
            var image_url = this.replace('[video-id]', video_id);
            html = html + '<div class="image-wrapper"><img src="' + image_url + '" /></div>';
            html = html + '<div class="caption"><p><strong>نمطه:</strong> ' + this + '</p>';
            html = html + '<p><strong>هذه الصورة:</strong> ' + image_url + '</div>';
        });
        
        $('#thumbnail_container').html( html );
    }
    update_html = false;
    
}
    
var update_html = true;
    
$('#videoID').on('change', function(){
    update_html = true;
});
    
setInterval( update, 1000 );

update();
    

});

function getThumbs(){var e=document.getElementById("container");e.style.display="block";var e=document.getElementById("get-button");e.style.display="none";};




function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
  loadCSS("https://cdn.rawgit.com/abdelalilebbihi/techabdou/fe375e69/abdou-neo.css");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/icon?family=Material+Icons");
