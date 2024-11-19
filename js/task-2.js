const images = [
  {
    url: 'images/task-2/1.png',
    alt: 'The team draws a layout on the table',
  },
  {
    url: 'images/task-2/2.png',
    alt: 'Man holding a light bulb',
  },
  {
    url: 'images/task-2/3.png',
    alt: 'Hand holding smartphone above table',
  },
  {
    url: 'images/task-2/4.png',
    alt: 'Nice meeting room',
  },
  {
    url: 'images/task-2/5.png',
    alt: 'Colorful office with table tennis',
  },
  {
    url: 'images/task-2/6.png',
    alt: 'A modern office where many people sit at their desks with computers',
  },
];

const galleryList = document.querySelector('.gallery');

const galleryItems = images.map(({ url, alt }) => {
  const listItem = document.createElement('li');
  const image = document.createElement('img');

  image.src = url;
  image.alt = alt;
  image.width = 360;
  image.height = 300;

  listItem.appendChild(image);
  return listItem;
});

// Append all items to the gallery in one operation
galleryList.append(...galleryItems);
