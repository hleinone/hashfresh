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
  redirect '/twitter/' + params[:hashtag] + '/' + params[:amount]
end

get '/:service/:hashtag/?:amount?/?' do
  begin
    unless params[:amount]
      haml params[:service].to_sym, :locals => {:hashtag => params[:hashtag], :amount => 10}
    else
      haml params[:service].to_sym, :locals => {:hashtag => params[:hashtag], :amount => params[:amount]}
    end
  rescue Errno::ENOENT
    raise Sinatra::NotFound
  end
end

not_found do
  haml :error
end
