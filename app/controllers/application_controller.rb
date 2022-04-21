class ApplicationController < ActionController::Base
  
    helper_method :current_user, :logged_in?, :require_logged_in, :current_profile, :profile_set?
    
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 
    
    def logged_in?
        !!current_user
    end 
    
    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end 
    
    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end 
    
    def ensure_logged_in
        render json: ['Invalid Credentials'], status: 401 unless logged_in?
    end

    def current_profile
        return nil unless current_user
        @profile = Profile.find_active_profile(current_user.id)
    
        if @profile
            return @profile
        else
            return nil
        end
    end

    def login_profile!(profile)
        profile.activate!
    end

    def logout_profile!(profile)
        profile.deactivate!
    end

    def profile_set?
        if current_profile
            return true
        end
        return false
  end

end
