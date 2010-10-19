# hashfresh.rb
require 'sinatra'
require 'haml'
require 'maruku'

enable :run
set :views, File.dirname('.') + '/views'
set :public, File.dirname('.') + '/public'
set :haml, {:attr_wrapper => '"'}

get '/' do
  haml :index
end

post '/' do
  redirect '/' + params[:services] * '+' + '/' + params[:hashtag] + '/' + params[:amount]
end

get '/:services/:hashtag/?:amount?/?' do |services, hashtag, amount|
  @services = services.split(' ')
  haml :hashfresh, :locals => {:hashtag => hashtag, :amount => (amount or 10)}
end

not_found do
  haml :error
end
