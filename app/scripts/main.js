
items.results.forEach( function(item){
  var title = item.title;
  var price = item.price;
  var currencycode = item.currency_code;
  var userid = item.shop_name;

  img_url = item.Images[0].url_170x135;
  var listDiv = $('<div></div>');
  $(listDiv).addClass('icons');
  $(listDiv).append($('<img/>').prop('src', img_url));
  $(listDiv).append($('<span></span>').text(title).prop('id', 'titleSpan'));
  $(listDiv).append($('<span></span>').text(userid).prop('id', 'shopnameSpan'));
  $(listDiv).append($('<span></span>').text(price).prop('id', 'priceSpan'));
  $(listDiv).append($('<span></span>').text(currencycode).prop('id', 'currencycodeSpan'));

  $('.maincontent').append(listDiv);
});
