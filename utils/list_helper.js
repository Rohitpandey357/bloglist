const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) return 0;
    
    let likes = 0;
    for(let i = 0; i <blogs.length; i++) {
        likes += blogs[i].likes;
    }
    return likes;
}

const favouriteBlog = (blogs) => {
    if(blogs.length === 0) return null;

    let favourite = blogs[0];
    for(let i = 1; i <blogs.length; i++) {
        if(blogs[i].likes > favourite.likes) favourite = blogs[i];
    }
    return favourite;
}

module.exports = {
    dummy, 
    totalLikes,
    favouriteBlog,
}