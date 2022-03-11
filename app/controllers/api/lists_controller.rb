class Api::ListsController < ApplicationController
    
    def create
        @list = List.new(video_id: params[:video_id])
        @list.profile_id = current_profile.id
      
        if @list.save!
            @video = @list.video
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end
  
    def index
        profile = Profile.find_by(id: current_profile.id)
        @videos = profile.videos
        
        if @videos
            render :index
        else
            render json: ["Couldn't find list"]
        end
    end
  
    def destroy
        list = List.find_by(video_id: params[:id], profile_id: current_profile.id)
        
        if list
            list.destroy
        else
            render json: ['Video is not in list']
        end
    end

end