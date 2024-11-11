import { useRouter } from "next/router"
import { useEffect,useState } from "react";
import { GenerateRandomPost } from "@/utils/generate";
export default function Post() {
    const [MyPost, setPost] = useState(0)  
    const router = useRouter();
    const pid = router.query.pid

    useEffect(() => {
      GetData(pid)
    }, [])

    useEffect(() => {
      
    }, [MyPost])
    
    function GetData(id) {
      var currentURL = document.URL;
      var parts = currentURL.split("/");
      var idparts = parts[parts.length - 1];

      if(id){
        idparts = id
      }

      const data = localStorage.getItem("PostData");
      if (!data) {
        var p = GenerateRandomPost();
        setPost(p);
      } else {
        var oldData = JSON.parse(data);
        oldData.forEach((element) => {
          if (Number(element.Id) == Number(idparts)) {
            setPost(element);
            return;
          }
        });
      }
    }
    return <> {MyPost && (     <section class="s-content s-content--single">
    <div class="row">
        <div class="column large-12">

            <article class="s-post entry format-standard">

                <div class="s-content__media">
                    <div class="s-content__post-thumb">
                        <img src={'/'+MyPost.Images} style={{width: 1500 + 'px', objectFit: 'cover'}}
                              sizes="(max-width: 2100px) 100vw, 2100px" alt=""/>
                    </div>
                </div> 

                <div class="s-content__primary">

                    <h2 class="s-content__title s-content__title--post">{MyPost.Title}</h2>

                    <ul class="s-content__post-meta">
                        <li class="date">Id </li>
                        <li class="cat"><a href="">: {MyPost.Id}</a></li>
                    </ul>
                    <ul class="s-content__post-meta">
                        <li class="date">Tag</li>
                        <li class="cat"><a href="">: {MyPost.Tag}</a></li>
                    </ul>
                    <ul class="s-content__post-meta">
                        <li class="date">Qoute</li>
                        <li class="cat"><a href="">: {MyPost.Quote}</a></li>
                    </ul>
                    <ul class="s-content__post-meta">
                        <li class="date">Cite</li>
                        <li class="cat"><a href="">: {MyPost.Cite}</a></li>
                    </ul>
                    <ul class="s-content__post-meta">
                        <li class="date">Type</li>
                        <li class="cat"><a href="">: {MyPost.Type}</a></li>
                    </ul>

                    <p class="lead">
                    Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor 
                    sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat 
                    enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco 
                    magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum 
                    adipisicing aliqua ea nisi sint. Unde quod at minus quia velit ipsa ea qui. </p> 

                    <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                    </p>

                    <p>
                        <img src="/images/sample-1050.jpg" 
                             srcset="images/sample-2100.jpg 2100w, 
                                     images/sample-1050.jpg 1050w, 
                                     images/sample-525.jpg 525w" sizes="(max-width: 2100px) 100vw, 2100px" alt=""/>
                    </p>

                    <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                    </p>

                    <h2>Large Heading</h2>

                    <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>

                    <blockquote>
                        <p>
                        For God so loved the world, that he gave his only Son, that whoever believes in 
                        him should not perish but have eternal life. For God did not send his Son into 
                        the world to condemn the world, but in order that the world might be 
                        saved through him.
                        </p>
                        <cite>John 3:16-17 ESV</cite>
                    </blockquote>

                    <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>

                    <h3>Smaller Heading</h3>

                    <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

                    <p>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    

                        
                    <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>

                    <ul>
                        <li>Donec nulla non metus auctor fringilla.
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </li>
                        <li>Donec nulla non metus auctor fringilla.</li>
                        <li>Donec nulla non metus auctor fringilla.</li>
                    </ul>

                    <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed..</p>

                    <p class="s-content__post-tags">
                        <span>Tagged in :</span>
                        <a href="#">orci</a><a href="#">lectus</a><a href="#">varius</a><a href="#">turpis</a>
                    </p>

                    <div class="s-content__author">
                        <img src="/images/avatars/user-06.jpg" alt=""/>

                        <div class="about">
                            <h5><a href="#">Jonathan Smith</a></h5>
                        
                            <p>Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>

                            <ul class="author-social">
                                <li><a href="#0">Facebook</a></li>
                                <li><a href="#0">Twitter</a></li>
                                <li><a href="#0">Dribbble</a></li>
                                <li><a href="#0">Instagram</a></li>
                            </ul>
                        </div>
                    </div> 



                </div> 
            </article>

        </div> 
    </div> 




</section> 
)}

    </>
  }