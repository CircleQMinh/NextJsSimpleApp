export default function FeaturedPost(props) {
    const tags = props.tags;
    const title = props.title;
    return (
      <>
            <div class="brick entry featured-grid animate-this">
              <div class="entry__content">
                <div class="featured-post-slider">
                  <div class="featured-post-slide">
                    <div class="f-slide">
                      <div
                        class="f-slide__background"
                        style={{
                          backgroundImage: `url(${"images/thumbs/featured/featured-1.jpg"})`,
                        }}
                      ></div>
                      <div class="f-slide__overlay"></div>

                      <div class="f-slide__content">
                        <ul class="f-slide__meta">
                          <li>September 06, 2020</li>
                          <li>
                            <a href="#">Naruto Uzumaki</a>
                          </li>
                        </ul>

                        <h1 class="f-slide__title">
                          <a href="single-standard.html" title="">
                            A Practical Guide to a Minimalist Lifestyle.
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div class="featured-post-slide">
                    <div class="f-slide">
                      <div
                        class="f-slide__background"
                        style={{
                          backgroundImage: `url(${"images/thumbs/featured/featured-2.jpg"})`,
                        }}
                      ></div>
                      <div class="f-slide__overlay"></div>

                      <div class="f-slide__content">
                        <ul class="f-slide__meta">
                          <li>September 06, 2020</li>
                          <li>
                            <a href="#">Sakura Haruno</a>
                          </li>
                        </ul>

                        <h1 class="f-slide__title">
                          <a href="single-standard.html" title="">
                            Enhancing Your Designs with Negative Space
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div class="featured-post-slide">
                    <div class="f-slide">
                      <div
                        class="f-slide__background"
                        style={{
                          backgroundImage: `url(${"images/thumbs/featured/featured-3.jpg"})`,
                        }}
                      ></div>
                      <div class="f-slide__overlay"></div>

                      <div class="f-slide__content">
                        <ul class="f-slide__meta">
                          <li>September 05, 2020</li>
                          <li>
                            <a href="#">Shikamaru Nara</a>
                          </li>
                        </ul>

                        <h1 class="f-slide__title">
                          <a href="single-standard.html" title="">
                            Music Album Cover Designs for Inspiration
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="featured-post-nav">
                  <button class="featured-post-nav__prev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                    </svg>
                  </button>
                  <button class="featured-post-nav__next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
      </>
    );
  }
  