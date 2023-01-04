const videosDiv = document.querySelector('.videos');

const createVideoElement = (data) => {
  const videoDiv = document.createElement('div');
  videoDiv.classList.add('video');
  
  const thumbnailDiv = document.createElement('div');
  thumbnailDiv.classList.add('thumbnail');
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = data.thumbnailUrl;
  thumbnailImg.alt = "";
  thumbnailDiv.appendChild(thumbnailImg);
  
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');
  
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  const authorImg = document.createElement('img');
  authorImg.src = data.authorImgUrl;
  authorImg.alt = "lofi";
  authorDiv.appendChild(authorImg);
  
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  const titleH3 = document.createElement('h3');
  titleH3.textContent = data.title;
  const titleA = document.createElement('a');
  titleA.textContent = data.author;
  titleA.href = data.authorUrl;
  const titleSpan = document.createElement('span');
  titleSpan.textContent = data.views + " • " + data.date;
  titleDiv.appendChild(titleH3);
  titleDiv.appendChild(titleA);
  titleDiv.appendChild(titleSpan);
  
  detailsDiv.appendChild(authorDiv);
  detailsDiv.appendChild(titleDiv);
  
  videoDiv.appendChild(thumbnailDiv);
  videoDiv.appendChild(detailsDiv);
  
  return videoDiv;
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (const videoData of data.korteles) {
      const video = createVideoElement(videoData);
      videosDiv.appendChild(video);
    }
  });

  const subscriptionsDiv = document.querySelector('.subscriptions');

const createSubscriptionElement = (data) => {
  const subscriptionDiv = document.createElement('div');
  subscriptionDiv.classList.add('subscription');
  
  const img = document.createElement('img');
  img.src = data.imageUrl;
  img.alt = "";
  img.style.height = "22px";
  
  const nameSpan = document.createElement('span');
  nameSpan.textContent = data.name;
  
  subscriptionDiv.appendChild(img);
  subscriptionDiv.appendChild(nameSpan);
  
  return subscriptionDiv;
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    for (const subscriptionData of data.subscriptions) {
      const subscription = createSubscriptionElement(subscriptionData);
      subscriptionsDiv.appendChild(subscription);
    }
  });