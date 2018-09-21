const url = `https://public-api.wordpress.com/wp/v2/sites/bestblog.wordpress.com/posts`;

const blogsList = document.getElementById('blogs');
const post_template = document.getElementById('post-template');

async function populatePosts() {
  const response = await fetch(url);
  if (response.status !== 200) console.log('Error: Could not load posts!');
  const posts = await response.json();

  for (let post of posts) {
    console.log(post);
    const postElement = document.importNode(post_template.content, true);

    const id = post.title.rendered.replace(/ +/g, "-").replace(/&nbsp;/g, '-').toLowerCase().replace(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    const postTitle = postElement.querySelector('h2');
    postTitle.innerHTML = post.title.rendered;

    postTitle.id = id;

    const tweet_button = postElement.getElementById('tweet-button')
    const tweet_link = "http://platform.twitter.com/widgets/tweet_button.html?text=I%20just%20read%20" + post.title.rendered.replace(/&nbsp;/g, '%20').replace(/ +/g, "%20") + ". https://cloudnativejs.io/blogs.html%23" + id + "&amp;count=horizontal";
    console.log(tweet_link)
    tweet_button.src = tweet_link

    const fb_button = postElement.getElementById('fb-button')
    const fb_link = "https://www.facebook.com/plugins/share_button.php?href=https://cloudnativejs.io/blogs.html%23" + id + "&layout=button&size=small&mobile_iframe=true&appId=722472437961274&width=78&height=20";
    fb_button.src = fb_link

    const postDate = postElement.querySelector('h6');
    const date = new Date(post.date_gmt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    postDate.textContent = `${day}/${month}/${year} ${hours}:${minutes}`;

    const postContent = postElement.querySelector('div');
    postContent.innerHTML = post.content.rendered;

    blogsList.append(postElement);
  }
}

populatePosts();
