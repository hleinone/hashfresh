# #HashFresh

## What?
An auto-refreshing [Twitter](http://twitter.com) and/or [Identi.ca](http://identi.ca) [hashtag](http://en.wikipedia.org/wiki/Hashtag#Hash_tags) client. You can find it [live](http://hashfresh.heroku.com) at [Heroku](http://heroku.com).

## How?
Make sure you're using Ruby 1.9.x. I suggest using [http://rvm.beginrescueend.com/](RVM) for managing different [http://www.ruby-lang.org/en/](Ruby) versions. On the command-line: 

    git clone git://github.com/hleinone/hashfresh.git hashfresh
    cd hashfresh
    gem install heroku

### Running locally
On the command-line: 

    gem install sinatra haml maruku
    ruby hashfresh.rb

### Deploying
On the command-line: 

    heroku create <YOUR_APP_NAME>
    git push heroku master

## Lost?
Trying to find the [version](http://code.google.com/p/hashfresh/) for [Google App Engine](http://appengine.google.com)?
