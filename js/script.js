News.addArticleAction(function($actionsElement, article) {
    var $li = $('<li>')
        .addClass('article-plugin-twitter');
    var $button = $('<button>')
        .attr('title', t('news-plugin-twitter', 'Share on Twitter'));
    var text = article.title + '\n' + article.intro.substring(0,150) + '...\nThanks to ' + article.author;
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(article.url);

    $button.click(function (event) {
        window.open(url);
        window.opener = null; // prevent twitter being from able to access the DOM
        event.stopPropagation();  // prevent expanding in compact mode
    });

    $li.append($button);
    $actionsElement.append($li);
});
