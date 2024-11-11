// components/Layout.js
import React from "react";
import Link from "next/link";
import Login from './../pages/login';
import { useEffect,useState } from "react";

const Layout = ({ children }) => {
  const [isLoginOk, setIsLoginOk] = useState(false)
  useEffect(() => {
    var isLoginOk = localStorage.getItem("isLoginOk");
    if (isLoginOk) {
      setIsLoginOk(true);
    }
  }, []);
  

  return (
    <div>
      {/* <div id="preloader">
        <div id="loader"></div>
      </div> */}
      

      <header class="s-header">
        <div class="row s-header__content">
          <div class="s-header__logo">
            <a class="logo" href="/">
              <img src="/images/logo.svg" alt="Homepage" />
            </a>
          </div>

          <nav class="s-header__nav-wrap">
            <h2 class="s-header__nav-heading h6">Site Navigation</h2>

            <ul class="s-header__nav">
              <li class="current">
                <a href="/" title="">
                  Home
                </a>
              </li>
              <li class="has-children">
                <a href="#0" title="">
                  Categories
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="category.html">Design</a>
                  </li>
                  <li>
                    <a href="category.html">Lifestyle</a>
                  </li>
                  <li>
                    <a href="category.html">Photography</a>
                  </li>
                  <li>
                    <a href="category.html">Vacation</a>
                  </li>
                  <li>
                    <a href="category.html">Work</a>
                  </li>
                  <li>
                    <a href="category.html">Health</a>
                  </li>
                  <li>
                    <a href="category.html">Family</a>
                  </li>
                  <li>
                    <a href="category.html">Relationship</a>
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#0" title="">
                  Blog
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="single-video.html">Video Post</a>
                  </li>
                  <li>
                    <a href="single-audio.html">Audio Post</a>
                  </li>
                  <li>
                    <a href="single-gallery.html">Gallery Post</a>
                  </li>
                  <li>
                    <a href="single-standard.html">Standard Post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="styles.html" title="">
                  Styles
                </a>
              </li>
              <li>
                <a href="about.html" title="">
                  About
                </a>
              </li>
              <li>
                <a href="/contactus" title="">
                  Contact
                </a>
              </li>
              <li>
                {isLoginOk ? (<><a href="/viewmsg" title="">
                  View Message
                </a></>) : (<><a href="/login" title="">
                  Login
                </a></>)}

              </li>
            </ul>

            <a
              href="#0"
              title="Close Menu"
              class="s-header__overlay-close close-mobile-menu"
            >
              Close
            </a>
          </nav>

          <a class="s-header__toggle-menu" href="#0" title="Menu">
            <span>Menu</span>
          </a>

          <div class="s-header__search">
            <form
              role="search"
              method="get"
              class="s-header__search-form"
              action="#"
            >
              <label>
                <span class="hide-content">Search for:</span>
                <input
                  type="search"
                  class="s-header__search-field"
                  placeholder="Type Your Keywords"
                  value=""
                  name="s"
                  title="Search for:"
                  autocomplete="off"
                />
              </label>
              <input
                type="submit"
                class="s-header__search-submit"
                value="Search"
              />
            </form>

            <a href="#0" title="Close Search" class="s-header__overlay-close">
              Close
            </a>
          </div>

          <a class="s-header__search-trigger" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer class="s-footer">
        <div class="s-footer__main">
          <div class="row">
            <div class="column large-4 medium-6 tab-12 s-footer__info">
              <h5>About Our Site</h5>

              <p>
                Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat
                nostrud qui in dolore commodo eu magna Duis cillum dolor officia
                esse mollit proident Excepteur exercitation nulla. Lorem ipsum
                In reprehenderit commodo aliqua irure labore.
              </p>
            </div>

            <div class="column large-2 medium-3 tab-6 s-footer__site-links">
              <h5>Site Links</h5>

              <ul>
                <li>
                  <a href="#0">About Us</a>
                </li>
                <li>
                  <a href="#0">Blog</a>
                </li>
                <li>
                  <a href="#0">FAQ</a>
                </li>
                <li>
                  <a href="#0">Terms</a>
                </li>
                <li>
                  <a href="#0">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div class="column large-2 medium-3 tab-6 s-footer__social-links">
              <h5>Social</h5>

              <ul>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Dribbble</a>
                </li>
                <li>
                  <a href="#0">Pinterest</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>

            <div class="column large-4 medium-12 s-footer__subscribe">
              <h5>Subscribe</h5>

              <p>Keep yourself updated. Subscribe to our newsletter.</p>

              <div class="subscribe-form">
                <form id="mc-form" class="group" novalidate="true">
                  <input
                    type="email"
                    value=""
                    name="dEmail"
                    class="email"
                    id="mc-email"
                    placeholder="Type &amp; press enter"
                    required=""
                  />

                  <input type="submit" name="subscribe" />

                  <label for="mc-email" class="subscribe-message"></label>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="s-footer__bottom">
          <div class="row">
            <div class="column">
              <div class="ss-copyright">
                <span>© Copyright Abstract 2020</span>
                <span>
                  Design by <a href="https://www.styleshout.com/">StyleShout</a>
                </span>
              </div>
            </div>
          </div>

          <div class="ss-go-top">
            <a class="smoothscroll" title="Back to Top" href="#top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <script src="/js/jquery-3.2.1.min.js"></script>
   <script src="/js/plugins.js"></script>
   <script src="/js/main.js"></script>
    </div>
  );
};

export default Layout;
