$(function()
{
	var $movies=$('#movies');
	var tempo=$('#temp').html();
	var details=$('#details');
	var noOfPage=0;
	var pageNumber=1;
	var itr=0;
	var numberOfMovies=0;
	$('#btn').on('click',function()
	{
		console.log($("input:text").val());
		$.ajax(
		{
			type:'GET',
			url:'http://www.omdbapi.com/?s='+$("input:text").val(),
			success: function(movies)
			{	numberOfMovies=movies.totalResults;
				
				noOfPage=parseInt(numberOfMovies/10);
				console.log(movies.Search.length+":"+numberOfMovies+":"+noOfPage);
				for (;itr<10;) 
				{
					details.append(Mustache.render(tempo,movies.Search[itr]));
					itr++;
				}
			}
		});
	});
	$('#next').on('click',function(){
		pageNumber+=1;
		details.html("");
		$.ajax({
			type:'GET',
			url:'http://www.omdbapi.com/?s='+$("input:text").val()+'&page='+pageNumber,
			success:function(movies)
			{	numberOfMovies=movies.totalResults;
				
				noOfPage=parseInt(numberOfMovies/10);
				console.log(movies.Search.length+":"+numberOfMovies+":"+noOfPage);
				for (itr=0;itr<10;) 
				{
					details.append(Mustache.render(tempo,movies.Search[itr]));
					itr++;
				}
			}

		});
	});
	$('#previous').on('click',function(){
		pageNumber-=1;
		details.html("");
		$.ajax({
			type:'GET',
			url:'http://www.omdbapi.com/?s='+$("input:text").val()+'&page='+pageNumber,
			success:function(movies)
			{	numberOfMovies=movies.totalResults;
				
				noOfPage=parseInt(numberOfMovies/10);
				console.log(movies.Search.length+":"+numberOfMovies+":"+noOfPage);
				for (itr=0;itr<10;) 
				{
					details.append(Mustache.render(tempo,movies.Search[itr]));
					itr++;
				}
			}

		});
	});
});