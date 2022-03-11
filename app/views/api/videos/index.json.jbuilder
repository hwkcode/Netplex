@videos.each do |video|
    json.videos do
        json.set! video.id do
            json.partial! 'api/videos/video', video: video
        end
    end
    
    video.genres.each do |genre|                        
        json.genres do                                  
            json.set! genre.id do
                json.extract! genre, :id, :name
            end
        end
    end
end