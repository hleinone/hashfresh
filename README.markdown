# #HashFresh

## What?
An auto-refreshing [Twitter](http://twitter.com) and/or [Identi.ca](http://identi.ca) [hashtag](http://en.wikipedia.org/wiki/Hashtag#Hash_tags) client. You can find it [live](http://hashfresh.heroku.com) at [Heroku](http://heroku.com).

## How?
Make sure you're using Ruby 1.9.x. I suggest using [http://rvm.beginrescueend.com/](RVM) for managing different [http://www.ruby-lang.org/en/](Ruby) versions.
<code>
    git clone git://github.com/hleinone/hashfresh.git hashfresh
    cd hashfresh
    gem install heroku
</code>

### Running locally:
<code>
    gem install sinatra haml maruku
    ruby hashfresh.rb
</code>

### Deploying:
<code>
    heroku create <YOUR_APP_NAME>
    git push heroku master
</code>

## Lost?
Looking for the [Google App Engine](http://appengine.google.com) [version](http://code.google.com/p/hashfresh/)?
