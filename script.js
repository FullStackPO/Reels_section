const reels = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: true,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./videos/1.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "designbysan",
        likeCount: 9820,
        isLiked: false,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./videos/2.mp4",
        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "frontend.ninja",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: false,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./videos/3.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: true,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./videos/4.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: false,
        commentCount: 102,
        shareCount: 55,
        isFollowed: false,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./videos/5.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
        username: "fitnessbymegha",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "./videos/6.mp4",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        username: "streetfoodlover",
        likeCount: 68000,
        isLiked: false,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "./videos/7.mp4",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
        username: "musicbytara",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: false,
        caption: "Late night vibes // piano version 🎹✨",
        video: "./videos/8.mp4",

        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        username: "techreviews101",
        likeCount: 23180,
        isLiked: false,
        commentCount: 481,
        shareCount: 120,
        isFollowed: true,
        caption: "The most underrated smartphone of 2024 📱",
        video: "./videos/9.mp4",

        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
        username: "learnanimations",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: false,
        caption: "GSAP can literally change your career. Start today.",
        video: "./videos/10.mp4",
        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

let all_reels = document.querySelector('.all-reels');

function add_data(){
let clutter = '';
reels.forEach(function(elem,idx){
    clutter += `
    <div class="reel">
                    <video loop playsinline autoplay muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="info">
                            <img src="${elem.userprofile}" alt="">
                            <h2>${elem.username}</h2>
                            <button id="${idx}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <div class="caption">
                            <h3>${elem.caption}</h3>
                        </div>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                           <h4 class="like-logo">${elem.isLiked?'<i id="fill" class="ri-poker-hearts-fill"></i>':'<i class="ri-poker-hearts-line"></i>'}</h4>
                            <p>${elem.likeCount}</p>
                        </div>
                        <div class="comment">
                           <h4 class="comment-logo"><i class="ri-chat-3-line"></i></h4>
                            <p>${elem.commentCount}</p>
                        </div>
                        <div class="share">
                            <h4 class="share_logo"><i class="ri-share-forward-line"></i></h4>
                            <p>${elem.shareCount}</p>
                        </div>
                        <div class="menu">
                            <i class="ri-more-2-line"></i>
                        </div>
                    </div>
                </div>
    `
})
all_reels.innerHTML = clutter;
}

add_data();

all_reels.addEventListener('click', function(dets){
    if(dets.target.className == "like"){
        if(!reels[dets.target.id].isLiked){
        reels[dets.target.id].likeCount++
        reels[dets.target.id].isLiked = true
        }
        else{
        reels[dets.target.id].likeCount--
        reels[dets.target.id].isLiked = false  
        }
    }
    add_data();

    if(dets.target.className == "follow"){
        if(!reels[dets.target.id].isFollowed){
            reels[dets.target.id].isFollowed = true;
        }
        else{
            reels[dets.target.id].isFollowed = false;
        }
    }
    add_data();
})