class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find_by(id: params[:id])
    
        if @video
            render :show
        else
            render json: ['Cannot play video'] , status: 422
        end
    end
end