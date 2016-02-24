$('#video-1').click(function() {
	$('#video-1').attr('src','images/video-img-1-selected.png');
	$('#video-2').attr('src','images/video-img-2-normal.png');
	$('#video-3').attr('src','images/video-img-3-normal.png');
	$('#video-playing').attr('src','https://www.youtube.com/embed/MOP2Ltb6eA0?rel=0&amp;showinfo=0');
});

$('#video-2').click(function() {
	$('#video-1').attr('src','images/video-img-1-normal.png');
	$('#video-2').attr('src','images/video-img-2-selected.png');
	$('#video-3').attr('src','images/video-img-3-normal.png');
	$('#video-playing').attr('src','https://www.youtube.com/embed/yldsnJjxPho?rel=0&amp;showinfo=0');
});

$('#video-3').click(function() {
	$('#video-1').attr('src','images/video-img-1-normal.png');
	$('#video-2').attr('src','images/video-img-2-normal.png');
	$('#video-3').attr('src','images/video-img-3-selected.png');
	$('#video-playing').attr('src','https://www.youtube.com/embed/TCA6NFWmSJU?rel=0&amp;showinfo=0');
});