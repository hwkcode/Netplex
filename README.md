<p align="center">
    <img src="./app/assets/images/netplex.gif" height=400>
</p>

<p align="center">
    <h1 align="center">Netplex</h1>    
</p>

<p align="center">
    <h2 align="center">A picture-perfect single-page application clone of Netflix.</br></br>
    Start viewing <a href="https://netplex-app.herokuapp.com/#/"><strong>here!</strong></a>
    </h2>   
    
</p>

<p align="center">
    <img src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white" />
    <img src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white" />
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
    </br>
    <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
    <img src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black" />
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" />
</p>


<p>
    <h2>Overview</h2>
    Netplex is a clone of Netflix, a video streaming platform, where signed up users can create profiles, watch videos, and add videos to personalized lists. 
</p>

<p>
    <h2>Technologies Used</h2>
    <ul>
        <li><b>Backend</b>: Rails</li>
        <li><b>Frontend</b>: React-Redux</li>
        <li><b>Languages</b>: Ruby, Javascript, CSS, HTML</li>
        <li><b>Storage</b>: AWS S3</li>
        <li><b>Hosting</b>: Heroku</li>
    </ul>
</p>

<p>
    <h2>Features</h2>
    <ul>
        <li><h3>User Authentication</h3></li>
        Users can sign up, login, and logout, secured by a user authentication policy.
        <img src="./app/assets/images/userauth.gif" height=400>
        </br>
        <li><h3>Manage Profiles</h3></li>
        Users can create and manage up to 5 profiles.
        <img src="./app/assets/images/profiles.gif" height=400>
        </br>
        <li><h3>Watch Videos</h3></li>
        Users can preview and watch videos sorted by genre.
        <img src="./app/assets/images/videos.gif" height=400>
        </br>
        <li><h3>My List</h3></li>
        Users can create a list of videos specific to each profile.
        <img src="./app/assets/images/list.gif" height=400>    
    </ul>
</p>

## Featured Code Snippet

Fetching videos from "My List" for specified profile:
````
def show
    profile = Profile.find_by(id: current_profile.id)                      
    @lists = profile.lists.where(profile_id: current_profile.id).ids        
    @lists.map! { |id| Video.find_by(id: List.find_by(id: id).video_id)}    
        
    if @lists
        render :show
    else
        render json: ["No list found"]
    end
end
````

