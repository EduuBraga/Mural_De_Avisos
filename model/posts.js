const idGenerator = () => Math.random().toString(36).slice(2);

const modelPosts = {
  posts: [
    {
      id: 1,
      title: 'Título do post',
      description: 'Descrição do post'
    }
  ],
  getAll: () => modelPosts.posts
  ,
  newPost: (title, description) => {
    modelPosts.posts.push({ id: idGenerator(), title, description });
  },
  deletePost: (id) => {
    
  }
}

module.exports = modelPosts