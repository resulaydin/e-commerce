import commentFunc from "../js/productDetail/comment.js";

const blogs = localStorage.getItem("blogs")
  ? JSON.parse(localStorage.getItem("blogs"))
  : [];

const blogId = localStorage.getItem("blogId")
  ? JSON.parse(localStorage.getItem("blogId"))
  : [];

const blogDetailFunc = () => {
  const blogImageDOM = document.querySelector(
    ".blog-detail-wrapper .blog-image"
  );
  const blogTitleDOM = document.querySelector(
    ".blog-detail-text-wrapper .blog-detail-title"
  );
  const blogContentFirstParDOM = document.querySelector(
    ".blog-detail-content> p:nth-child(1)"
  );
  const blogContentBlockquoteDOM = document.querySelector(
    ".blog-detail-content blockquote>p"
  );

  console.log(blogContentBlockquoteDOM);

  const filteredBlog = blogs.find((blog) => blog.id === blogId);
  blogImageDOM.src = filteredBlog.image;
  blogTitleDOM.innerHTML = filteredBlog.headline;
  blogContentFirstParDOM.innerHTML = filteredBlog.articleBody;
  blogContentBlockquoteDOM.innerHTML = filteredBlog.alternativeHeadline;
};

blogDetailFunc();
