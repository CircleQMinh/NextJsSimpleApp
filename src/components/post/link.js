export default function LinkPost(props) {
  const tags = props.tags;
  const title = props.title;
  const url = props.url;
  const id = props.id;
  return (
    <>
      <article class="brick entry format-link animate-this">
        <div class="entry__thumb">
          <div class="link-wrap">
            <p>
              {title}
            </p>
            <cite>
              <a target="_blank" href={url}>
                {url}
              </a>
            </cite>
          </div>
        </div>
      </article>
    </>
  );
}
