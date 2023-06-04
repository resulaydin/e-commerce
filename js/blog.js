const blogs = localStorage.getItem("blogs")
  ? JSON.parse(localStorage.getItem("blogs"))
  : [];

function blogFunc() {
  const blogList = document.querySelector(".blog-list");

  let result = "";
  blogs.forEach((blog) => {
    result += `
        <li class="blog-item" >
                <a href="blog-detail.html" class="blog-image blog-image-link" data-route-image-id="${blog.id}">
                    <img src="${blog.image}" alt="">
                </a>
                <div class="blog-info">
                    <div class="blog-info-top">
                    <span>${blog.dateCreated}</span>
                    -
                    <span>${blog.commentCount}  Comments</span>
                    </div>
                    <div class="blog-info-center ">
                    <a href="blog-detail.html" class="blog-center-link" data-id="${blog.id}">${blog.headline} </a>
                    </div>
                    <div class="blog-info-bottom">
                    <a href="blog-detail.html" class="blog-bottom-link" data-route-id="${blog.id}" >Read More</a>
                    </div>
                </div>
        </li>
    `;
  });
  blogList.innerHTML = result;
  blogRoute();
}

const blogRoute = function () {
  const blogsCenterRoute = document.querySelectorAll(".blog-center-link");
  const blogsBottomRoute = document.querySelectorAll(".blog-bottom-link");
  const blogImageRoute = document.querySelectorAll(".blog-image-link");
  let blogId = 0;

  blogImageRoute.forEach((route) => {
    route.addEventListener("click", (e) => {
      blogId = parseInt(route.dataset.routeImageId);
      localStorage.setItem("blogId", JSON.stringify(blogId));
    });
  });
  blogsCenterRoute.forEach((route) => {
    route.addEventListener("click", (e) => {
      blogId = parseInt(e.target.dataset.id);
      localStorage.setItem("blogId", JSON.stringify(blogId));
    });
  });
  blogsBottomRoute.forEach((route) => {
    route.addEventListener("click", (e) => {
      blogId = parseInt(e.target.dataset.routeId);
      localStorage.setItem("blogId", JSON.parse(blogId));
    });
  });
};
blogFunc();
