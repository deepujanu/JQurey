$('#load-form-button').click(function(){
	console.log("form-loaded");
	$('#card-body').load('form.html');
});

/*$('#load-images-btn').click(function(){
	$.getJSON('https://gist.githubusercontent.com/tnvpavan/69215e83ef7ca58b3d8da074c66722ef/raw/260975e6593249e029872914ba0a95efe98153ee/ajax_data.json',function(data){
	var img1 = data.contacts[0].picture.large;
	$('#image1').attr('src',img1);
	var img1_name = data.contacts[0].name.first+ " " + data.contacts[0].name.last;
	$('#image1_name').text(img1_name);*/
	$('#load-images-btn').click(function(){
	$.getJSON('https://gist.githubusercontent.com/tnvpavan/69215e83ef7ca58b3d8da074c66722ef/raw/260975e6593249e029872914ba0a95efe98153ee/ajax_data.json',function(data){
	for (var i = 0; i <= 5; i++) {
	var imgSrc = data.contacts[i].picture.large;
	$('#image' + (i+1)).attr('src',imgSrc);
	var imgname = data.contacts[i].name.first+ " " + data.contacts[i].name.last;
	$('#image'+(i+1) + '_name'	).text(imgname);
}
	});
});