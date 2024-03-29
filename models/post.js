/* 
    The post model structures user posts and comments.
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostSchema = new Schema({
    'postContent' : { type: String, required: true },
    'postAuthor' : { type: Schema.Types.ObjectId, ref: 'User'},
    'postLikes': [{ type : Schema.Types.ObjectId, ref:'User', required: true }],

    'postComment' : [{
        type: new mongoose.Schema({
            'comment' : { type : String, required: true },
            'commentAuthorName' : { type : String , required: true },
            'commentAuthorID' : { type : Schema.Types.ObjectId, ref:'User', required: true },
            'commentLikes' : [{ type : Schema.Types.ObjectId, ref:'User', required: true }],
        }, {
            timestamps : true
        })
    }]

}, {
    timestamps : true
})

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
