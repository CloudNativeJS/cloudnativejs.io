let url = `https://public-api.wordpress.com/wp/v2/sites/cloudnativejs.wordpress.com/posts?_embed`;
const MAX_POSTS = 5; // Number of posts per page.
let urlParams = new URLSearchParams(window.location.search);
let PAGE = Number(urlParams.get('page')) || 1;
const blogsList = document.getElementById('blogs');
const postTemplate = document.getElementById('post-template');

async function getPosts() {
  let response = await fetch(url + '&per_page=1&page=1');
  if (response.status !== 200) console.log('Error: Could not load posts!');
  const numPosts = response.headers.get('X-WP-Total');
  const maxPages = Math.ceil(numPosts / MAX_POSTS);
  if (PAGE > maxPages) {
    window.location.replace('./blogs.html')
  }

  const pagingButtons = document.getElementById('paging-buttons');
  const pagingPrevious = document.getElementById('paging-previous');
  const pagingNext = document.getElementById('paging-next');
  // Show buttons div
  pagingButtons.style.display = 'inline';

  // Show previous button
  if (PAGE > 1) {
    pagingPrevious.style.display = 'inline';
    pagingPrevious.href = `./blogs.html?page=${PAGE - 1}`
  }

  // Hiding next button
  if (PAGE === maxPages) {
    pagingNext.style.display = 'none';
  } else {
    pagingNext.href = `./blogs.html?page=${PAGE + 1}`
  }

  url += `&per_page=${MAX_POSTS}&page=${PAGE}`;
  response = await fetch(url);

  if (response.status !== 200) console.log('Error: Could not load posts!');
  const posts = await response.json();

  formatPosts(posts)
}

async function getSinglePost(id) {
  url += `?slug=${id}`

  const readMoreButton = document.getElementById('read-more-button');
  readMoreButton.style.display = 'inline';

  const response = await fetch(url);
  if (response.status !== 200) console.log(`Error: Could not load '${id}'`);
  const post = await response.json();
  if (post.length === 0) window.location.replace('./blogs.html');
  formatPosts(post);
}

function formatPosts(posts) {
  for (let post of posts) {
    const postElement = document.importNode(postTemplate.content, true);

    const postTitle = postElement.querySelector('h2');
    postTitle.innerHTML = post.title.rendered;

    const id = post.slug;

    postTitle.id = id;

    const tweet_button = postElement.getElementById('tweet-button')
    const tweet_link = 'https://platform.twitter.com/widgets/tweet_button.html?text=' + post.title.rendered.replace(/&nbsp;/g, '%20').replace(/ +/g, '%20') + '.&url=https://www.cloudnativejs.io/blogs.html%23' + id + '&hashtags=cloudnativejs&amp;count=horizontal';
    tweet_button.src = tweet_link

    const fb_button = postElement.getElementById('fb-button')
    const fb_link = 'https://www.facebook.com/plugins/share_button.php?href=https://www.cloudnativejs.io/blogs.html%23' + id + '&layout=button&size=small&mobile_iframe=true&appId=722472437961274&width=78&height=20';
    fb_button.src = fb_link

    const postDate = postElement.querySelector('.post-date');
		postDate.textContent = moment(new Date(post.date_gmt)).format('Do MMMM YYYY');

    const postAuthor = postElement.querySelector('.post-author');
    postAuthor.textContent = `by ${post._embedded.author[0].name}`;

    const postContent = postElement.querySelector('div');
    postContent.innerHTML = post.content.rendered;

    // Handle images
    let imgs = postContent.querySelectorAll('.aligncenter');
    imgs.forEach(img => {
      const imgParent = img.parentElement;
      imgParent.classList.add('text-center');
    });

    imgs = postContent.querySelectorAll('.alignright');
    imgs.forEach(img => {
      const imgParent = img.parentElement;
      imgParent.classList.add('text-right');
    });

    blogsList.append(postElement);
  }
}

const slug = window.location.href.split('#')[1]
if (slug) {
  getSinglePost(slug.split('?')[0])
} else {
  getPosts();
}
