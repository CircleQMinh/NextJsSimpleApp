export const Titles = [
  "The Great Adventure",
  "Mystery of the Lost City",
  "Journey to the Unknown",
  "Secrets of the Deep",
  "Echoes of the Past",
  "The Last Horizon",
  "Realm of Shadows",
  "Whispers in the Dark",
  "Beyond the Stars",
  "The Final Frontier",
];

export const Tags = [
  "Adventure",
  "Mystery",
  "Fantasy",
  "Sci-Fi",
  "Horror",
  "Historical",
  "Thriller",
  "Drama",
  "Romance",
  "Comedy",
];
export const Images = [
  "images/thumbs/masonry/guitarist-600.jpg",
  "images/thumbs/masonry/beetle-600.jpg",
  "images/thumbs/masonry/lamp-600.jpg",
  "images/thumbs/masonry/real-600.jpg",
  "images/thumbs/masonry/seashore-600.jpg",
  "images/thumbs/masonry/tulips-600.jpg",
  "images/thumbs/masonry/walk-600.jpg",
  "images/thumbs/masonry/dew-600.jpg",
];
export const Urls = [
  "https://www.example.com/adventure",
  "https://www.example.com/mystery",
  "https://www.example.com/journey",
  "https://www.example.com/secrets",
  "https://www.example.com/echoes",
  "https://www.example.com/horizon",
  "https://www.example.com/realm",
  "https://www.example.com/whispers",
  "https://www.example.com/beyond",
  "https://www.example.com/frontier",
];

export const Quotes = [
  "The journey of a thousand miles begins with a single step.",
  "In the end, we only regret the chances we didn’t take.",
  "Life is either a daring adventure or nothing at all.",
  "Only those who will risk going too far can possibly find out how far one can go.",
  "Adventure is worthwhile.",
  "The only impossible journey is the one you never begin.",
  "The world is a book, and those who do not travel read only one page.",
  "Not all those who wander are lost.",
  "Live life with no excuses, travel with no regret.",
  "It feels good to be lost in the right direction.",
];

export const Cite = [
  "Lao Tzu",
  "Lewis Carroll",
  "Helen Keller",
  "T.S. Eliot",
  "Amelia Earhart",
  "Tony Robbins",
  "Saint Augustine",
  "J.R.R. Tolkien",
  "Oscar Wilde",
  "Anonymous",
];

export const Types = [
    "Standard",
    "Video",
    "Audio",
    "Gallery",
    "Link",
    "Quote",
]

function GetRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function GetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function GenerateRandomPost() {
  var result = {
    Title: GetRandomItem(Titles),
    Images: GetRandomItem(Images),
    Url: GetRandomItem(Urls),
    Quote: GetRandomItem(Quotes),
    Cite: GetRandomItem(Cite),
    Type: GetRandomItem(Types),
    Tag: GetRandomItem(Tags),
    Id: GetRandomNumber(1, 999999),
  };
  return result;
}

