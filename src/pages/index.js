import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Pagination from "@/components/pagination";

import AudioPost from "@/components/post/audio";
import VideoPost from "@/components/post/video";
import LinkPost from "@/components/post/link";
import QuotePost from "@/components/post/qoute";
import GalleryPost from "@/components/post/gallery";
import StandardPost from "@/components/post/standard";
import FeaturedPost from "@/components/post/featured";
import { permanentRedirect } from 'next/navigation'
export default  function Home() {


  const [posts, setposts] = useState([])
  const [isClient, setIsClient] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [isRedirectable, setIsRedirectable] = useState(false)
 


  useEffect(() => {
    const params = new URLSearchParams(window.location.search) 
    let page = params.get('page') 
    setCurrentPage(page ?? 1)
    getData(page)
    addJS()
    setIsClient(true)
  }, []);

  useEffect(() => {

  }, [posts])

  useEffect(() => {
    if (isRedirectable) {
      window.location.assign(`http://localhost:3000/?page=${currentPage}`)
    } 
  }, [currentPage]);


  setInterval(() => {
    try{
      window.dispatchEvent(new Event('resize')); // force resize to trigger masonary
    }
    catch(e){

    }

  }, 100);


  function changePage(pageNum){
    if(pageNum <= totalPages){
      setIsRedirectable(true);
      setCurrentPage(pageNum)
    }

  }
  function getData(page=1){
    fetch(`http://localhost:3000/api/posts?page=${page}&pageSize=${10}`).then((response) => response.json())
    .then((json) => {
      const data = localStorage.getItem("PostData");
      if(!data){
        localStorage.setItem("PostData",JSON.stringify(json.Data))
      }
      else{
        var oldData = JSON.parse(data)
        var newData = oldData.concat(json.Data);
        localStorage.setItem("PostData", JSON.stringify(newData))
      }
      setposts(json.Data)
      setTotalPages(json.TotalPages)
    });
  }

  function addJS(){
    const script = document.createElement("script");
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");
    const script3 = document.createElement("script");
    const script4 = document.createElement("script");
    const script5 = document.createElement("script");
    script1.src =
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
    document.body.appendChild(script1);

    setTimeout(() => {
      script3.src = "js/plugins.js";
      document.body.appendChild(script3);
    });

    setTimeout(() => {
      script4.src = "js/jquery.appear.js";
      document.body.appendChild(script4);
      script5.src = "js/main.js";
      document.body.appendChild(script5);
    }, 1000);
  }
  
  return (!isClient ? <></> :
    <>
      <section  class="s-bricks">
        <div class="masonry">
          <div class="bricks-wrapper h-group">
            <div class="grid-sizer"></div>
            <FeaturedPost></FeaturedPost>
            {posts.length > 0 && (<>     {posts.map((post) => (
              <>
                {post.Type == "Standard" ? <StandardPost
              tags={[post.Tag]}
              title={post.Title}
              images={[post.Images]}
              id = {post.Id}
            ></StandardPost> :
                post.Type == "Audio" ? <AudioPost
                tags={[post.Tag]}
              title={post.Title}
              images={[post.Images]}
              id = {post.Id}
              ></AudioPost> :
                post.Type == "Gallery" ? <GalleryPost
                tags={[post.Tag]}
                id = {post.Id}
                title={post.Title}
                images={[
                  post.Images,
                  "images/thumbs/masonry/tulips-600.jpg",
                ]}
              ></GalleryPost> :
                post.Type == "Link" ? <LinkPost
                url={post.Url}
                id = {post.Id}
                title={post.Title}
              ></LinkPost> :
                post.Type == "Quote" ? <QuotePost
                id = {post.Id}
                cite={post.Cite}
                quote={post.Quote}
              ></QuotePost>:
                post.Type == "Video" ? <VideoPost
                tags={["Video", post.Tag]}
                title={post.Title}
                id = {post.Id}
              ></VideoPost> :
                <></>} 
              </>
            ))}</>)}
       
          

          </div>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={changePage}></Pagination>
      </section>
    </>
  );
  
}

