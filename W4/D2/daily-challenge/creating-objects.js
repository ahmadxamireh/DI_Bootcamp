// Daily challenge: Creating Objects
//
// What You will learn:
// Create Objects
//
// Instructions
// In this exercise, you will use object-oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
// - title (a string)
// - uploader (a string, the person who uploaded it)
// - time (a number, the duration of the video - in seconds)

class Video {
    /**
     * @param {string} title - The title of the video
     * @param {string} uploader - The person who uploaded the video
     * @param {number} time - Duration of the video in seconds
     */
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    // 2. Create a method called watch() which displays a string as follows:
    // - “uploader parameter watched all time parameter of title parameter!”

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
    }
}

// 3. Instantiate a new Video instance and call the watch() method.

const video = new Video('Wildlife Documentary', 'Michael Owens', 60 * 60 * 4);
video.watch();

// 4. Instantiate a second Video instance with different values.

const video2 = new Video('Volcano Eruption', 'Joe Smith', 180);
video2.watch();

// 5. Bonus: Use an array to store data for five Video instances (i.e., title, uploader, time)
// - Think of the best data structure to save this information within the array.

const videos = [
    {title: 'Mr. Champions League', uploader: 'Cristiano Ronaldo', time: 60 * 60 * 3},
    {title: 'The Wolf of Wall Street', uploader: 'Stephen Curry', time: 60 * 60 * 4},
    {title: 'Jumanji', uploader: 'Kenji Takahashi', time: 60 * 60 * 2},
    {title: 'The Martian', uploader: 'Nikola Tesla', time: 60 * 60},
    {title: 'The Lion King', uploader: 'Tony Stark', time: 60 * 60 * 2}
]

// 6. Bonus: Loop through the array to instantiate those instances.

// a modular function for scalability
function createAndWatch(videoData) {
    const video = new Video(videoData.title, videoData.uploader, videoData.time);
    video.watch();
}

videos.forEach(video => createAndWatch(video));