export default function StandardPost(props) {
  const tags = props.tags;
  const title = props.title;
  const images = props.images;
  const id = props.id;
  return (
    <>
      <article class="brick entry format-standard animate-this">
        <div class="entry__thumb">
          {images.map((value) => (
            <a href={`post/${id}`} class="thumb-link">
              <img
              src={value}
              alt=""
              />
            </a>
          ))}
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
