class Api::ListsController < ApplicationController
    # before_action :require_logged_in, only: [:index, :create, :destroy]

    def index
        @lists = current_user.lists
        
        if @lists
            render :index
        else
            render json: ["No lists found"], status: 422
       end
    end

    def create 
        @list = List.new(list_params)
        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def show 
        @list = List.find(params[:id])
        
        if @list 
            render :show
        else
            render json: ["No list found"], status: 422
        end
    end

    def destroy
        @list = List.find_by(profile_id: list_params[:profile_id], user_id: list_params[:user_id])
        
        if List.destroy(@list.id)
            render :show, status: 200
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    private
    
    def list_params
        params.require(:list).permit(:video_id, :profile_id)
    end
    
end