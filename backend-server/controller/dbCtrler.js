const conn = require("../db")


const dbController = {
    uploadVideo: (req, res) => {
        
        //does video with that title already exist?
        const findVideo = "SELECT video_title, video_owner FROM videos WHERE video_title = ? AND video_owner = ?";
        const vidTitle = req.body.videoName;
        const vidUser = req.body.username;
        conn.query(findVideo, [vidTitle, vidUser], (err, result) => {
            if (err) return res.json(err);
            if (result.length > 0) return res.status(400).json("Video by that name already exists from this user.");
            

        //upload video
            const insertVideo = "INSERT INTO videos(`video_title`, `video_Path`, `video_owner`) VALUES (?)";
            const videoValues = [req.body.videoName, req.body.videoFile, req.body.username];
            conn.query(insertVideo, [videoValues], (err, result) => {
                if (err) return res.status(200).json(err);

                return res.json("Video uploaded");
            });
        });
    },

    getVideos: (req, res) => {
        //pull all videos from database
        const lookForVideos = "SELECT * FROM videos";
        conn.query(lookForVideos, (err, result) => {
            if (err) return res.json(err);
            return res.json(result);
        });
    },

    getOneVideo: (req, res) => {
        //pull video file name from database
        const findVideo = "SELECT video_title, video_owner FROM videos WHERE video_title = ? AND video_owner = ?";
        const vidTitle = req.body.videoName;
        const vidUser = req.body.username;
        conn.query(findVideo, [vidTitle, vidUser], (err, result) => {
            if (err) return res.json(err);
            if (result.length < 1) return res.json("Video no longer exists.");
            return result.video_Path;
        });
    }
}

module.exports = dbController;