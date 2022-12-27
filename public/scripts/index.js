const form = document.querySelector('form');
const containerPosts = document.querySelector('#posts');

document.addEventListener('DOMContentLoaded', () => {
  getPosts();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const description = event.target.desc.value;
  const title = event.target.title.value;

  const options = {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({ title, description })
  };

  fetch('http://127.0.0.1:3000/post/new', options)
    .then(res => {
      getPosts();
      event.target.reset();
    });
});

const getPosts = async () => {
  const JSONOfPosts = await fetch('http://127.0.0.1:3000/post/all')
    .then(res => res.json());

  const posts = JSON.parse(JSONOfPosts);
  let HTMLContainerPosts = '';

  posts.forEach(post => {
    HTMLContainerPosts += `
      <div id="${post.id}" class="card-post">
        <div class="content-card-post-top">
          <h3>${post.title}</h3>
        </div>
        <div class="content-card-post-bottom">
          <p>${post.description}</p>
        </div>
      </div>
    `;
  });

  containerPosts.innerHTML = HTMLContainerPosts;
};