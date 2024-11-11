export default function VideoPost(props) {
  const tags = props.tags;
  const title = props.title;
  const id = props.id;
  return (
    <>
      <article class="brick entry format-video animate-this">
        <div class="entry__thumb video-image">
          <a
            href="https://player.vimeo.com/video/117310401?color=ffffff&title=0&byline=0&portrait=0"
            data-lity
            class="thumb-link"
          >
            <img
              src="images/thumbs/masonry/cookies-600.jpg"
              srcset="images/thumbs/masonry/cookies-600.jpg 1x, images/thumbs/masonry/cookies-1200.jpg 2x"
              alt=""
            />
          </a>
        </div>

        <div class="entry__text">
          <div class="entry__header">
            <div class="entry__meta">
              <span class="entry__cat-links">
              {tags.map((value) => (
                  <a href="#">{value}</a>
                ))}
              </span>
            </div>

            <h1 class="entry__title">
              <a href={`post/${id}`}>{title}</a>
            </h1>
          </div>
          <div class="entry__excerpt">
            <p>
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
              incididunt mollit id et sit proident dolor nulla sed commodo est
              ad minim elit reprehenderit nisi officia aute incididunt velit
              sint in aliqua cillum in consequat consequat in culpa in anim.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
