
items.results.forEach( function(item){
  var title = item.title;
  var price = item.price;
  var currencycode = item.currency_code;
  var userid = item.user_id;

  img_url = item.Images[0].url_170x135;
  var listDiv = $('<div></div>');
  $(listDiv).append($('<img/>').prop('src', img_url));
  $(listDiv).append($('<span></span>').text(title).prop('id', 'titleSpan'));
  $(listDiv).append($('<span></span>').text(userid).prop());
  $(listDiv).append($('<span></span>').text(price));
  $(listDiv).append($('<span></span>').text(currencycode));
  $(listDiv).addClass('icons');
  $('.maincontent').append(listDiv);
});
