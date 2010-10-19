(function($) {
  $.twitter = function(tag, amount, maxId, callback) {
    $.getJSON('http://search.twitter.com/search.json?rpp=' + amount + '&since_id=' + maxId + '&locale=en&callback=?&q=%23' + tag, function(json) {
      data = $.map(json.results.slice(0, amount), function(element, index) {
        if ($('#list').children('#twitter_' + element.id).length < 1) {
          return element;
        }
        return null;
      });
      $.each(data.reverse(), function(index, element) {
        callback({
          id: element.id, 
          timestamp: new Date(Date.parse(element.created_at)), 
          status: parseUsers(parseHashtags(parseLinks(element.text))), 
          source: "twitter",
          author: {
            username: element.from_user, 
            url: 'http://twitter.com/' + element.from_user, 
            thumbnail: element.profile_image_url
          }
        });
        maxId = element.id;
      });
    });

    setTimeout('$.twitter("' + tag + '", ' + amount + ', ' + maxId + ', addStatus)', 10000);
  }

  function parseUsers(text) {
    return text.replace(/(.|^|\s)@(\w+)/g, '$1@<a class="user" href="http://twitter.com/$2">$2</a>');
  }

  function parseHashtags(text) {
    return text.replace(/(.|^|\s)#(\w+)/g, '$1#<a class="hashtag" href="/twitter/$2">$2</a>');
  }

  function parseLinks(text) {
    return text.replace(/(.|^|\s)((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)/g, '$1<a class="link" href="$2">$2</a>');
  }
})(jQuery);
