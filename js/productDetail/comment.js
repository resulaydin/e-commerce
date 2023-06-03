const comments = localStorage.getItem("comments")
  ? JSON.parse(localStorage.getItem("comments"))
  : [];
const commentListDOM = document.querySelector(".comment-list");
const commentTitleDOM = document.querySelector(".review-comment-wrapper>h3");
let starCount = 0;
let commentTitle = `${comments.length} reviews for Basic Colored Sweatpants With Elastic Hems`;

const commentReviewFunc = function () {
  const commentStarsDOM = document.querySelectorAll(".stars .star-item");

  commentStarsDOM.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      commentStarsDOM.forEach((star) => star.classList.remove("active"));
      item.classList.add("active");
      starCount = parseInt(e.target.childElementCount);
    });
  });
};

const commentAddFunc = () => {
  const commentTextDOM = document.getElementById("comment-textarea");
  const commentNameDOM = document.getElementById("name");
  const commentBtnDOM = document.querySelector("#btn-submit");

  let commentText = "";
  let commentName = "";

  commentNameDOM.addEventListener("input", (e) => {
    commentName = e.target.value;
  });
  commentTextDOM.addEventListener("input", (e) => {
    commentText = e.target.value;
  });

  function addComment(e) {
    e.preventDefault();
    comments.push({
      name: commentName,
      text: commentText,
      starCount: starCount,
    });
    commentTitle = `${comments.length} reviews for Basic Colored Sweatpants With Elastic Hems`;
    localStorage.setItem("comments", JSON.stringify(comments));
    let result = "";
    comments.forEach((item) => {
      result += ` 
        <li class="comment-item">
            <div class="comment-image">
                <img src="img/avatars/avatar3.png" alt="" />
            </div>
            <div class="comment-text">
            <ul class="comment-stars">
             ${commentAddStarFunc(item.starCount)}     
            </ul>
            <div class="comment-meta">
                <strong class="role-name">${item.name}</strong>
                <span>-</span>
                <time class="comment-date">June 01, 2023 </time>
            </div>
            <div class="comment-description">
                <p>${item.text}</p>
            </div>
            </div>
        </li>
        `;
    });
    commentListDOM.innerHTML = result;
    comments.length && (commentTitleDOM.innerHTML = commentTitle);
  }

  commentBtnDOM.addEventListener("click", addComment);
};

const commentAddStarFunc = function (count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += `
          <li class="star-item">
             <i class="bi bi-star-fill"></i>
          </li>
    `;
  }
  return result;
};

const commentShowFunc = () => {
  let result = "";
  comments.forEach((item) => {
    result += ` 
    <li class="comment-item">
        <div class="comment-image">
            <img src="img/avatars/avatar3.png" alt="" />
        </div>
        <div class="comment-text">
        <ul class="comment-stars">
         ${commentAddStarFunc(item.starCount)}     
        </ul>
        <div class="comment-meta">
            <strong class="role-name">${item.name}</strong>
            <span>-</span>
            <time class="comment-date">June 01, 2023 </time>
        </div>
        <div class="comment-description">
            <p>${item.text}</p>
        </div>
        </div>
    </li>
    `;
  });
  commentListDOM.innerHTML = result;
  comments.length && (commentTitleDOM.innerHTML = commentTitle);
};

function commentFunc() {
  commentReviewFunc();
  commentAddFunc();
  commentShowFunc();
}

export default commentFunc();
