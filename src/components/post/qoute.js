export default function QuotePost(props) {
    const tags = props.tags;
    const title = props.title;
    const quote = props.quote;
    const cite = props.cite
    const id = props.id;
    return (
      <>
          <article class="brick entry format-quote animate-this">
              <div class="entry__thumb">
                <blockquote>
                  <p>
                    {quote}
                  </p>

                  <cite>{cite}</cite>
                </blockquote>
              </div>
            </article>
      </>
    );
  }
  