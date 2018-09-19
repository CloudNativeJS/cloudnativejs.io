const url = `https://public-api.wordpress.com/wp/v2/sites/bestblog.wordpress.com/posts`;

const blogsList = document.getElementById('blogs');
const post_template = document.getElementById('post-template');

async function populatePosts() {
  const response = await fetch(url);
  if (response.status !== 200) console.log('Error: Could not load posts!');
  const posts = await response.json();
  
  for (let post of posts) {
    const postElement = document.importNode(post_template.content, true);

    const postTitle = postElement.querySelector('h2');
    postTitle.innerHTML = post.title.rendered;

    const postContent = postElement.querySelector('div');
    postContent.innerHTML = post.content.rendered;

    blogsList.append(postElement);
  }
}

populatePosts();
