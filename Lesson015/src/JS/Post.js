export default class Post {
    constructor(titlePost, tetxPost) {
        this.title = titlePost;
        this.text = tetxPost;
        this.date = new Date();
    }

    toString () {
        return JSON.stringify( {
            title: this.title,
            text: this.text,
            date: this.date.toJSON()
        })
    }
}