(function($) {
  $.identica = function(tag, amount, maxId, callback) {
    $.getJSON('http://identi.ca/api/statusnet/tags/timeline/' + tag + '.json', function(json) {
      data = $.map(json.slice(0, amount), function(element, index) {
        if ($('#list').children('#identica_' + element.id).length < 1) {
          return element;
        }
        return null;
      });
      $.each(data.reverse(), function(index, element) {
        callback({
          id: element.id, 
          timestamp: new Date(Date.parse(element.created_at)), 
          status: parseUsers(parseHashtags(parseLinks(element.text))), 
          source: "identica",
          author: {
            username: element.user.screen_name, 
            url: 'http://identi.ca/' + element.user.screen_name, 
            thumbnail: element.user.profile_image_url
          }
        });
        maxId = element.id;
      });
    });
    setTimeout('$.identica("' + tag + '", ' + amount + ', ' + maxId + ', addStatus)', 10000);
  }

  function parseUsers(text) {
    return text.replace(/(.|^|\s)@(\w+)/g, '$1@<a class="user" href="http://identi.ca/$2">$2</a>');
  }

  function parseHashtags(text) {
    return text.replace(/(.|^|\s)([#!])(\w+)/g, '$1$2<a class="hashtag" href="/identica/$3">$3</a>');
  }

  function parseLinks(text) {
    return text.replace(/(.|^|\s)((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)/g, '$1<a class="link" href="$2">$2</a>');
  }
})(jQuery);
