let comments = [
  { id: 1, comment: "comment number one" },
  { id: 2, comment: "comment number two" },
  { id: 3, comment: "comment number three" },
];

let blogPosts = [
    { id: 1, post: "blog post number one"},
    { id: 2, post: "blog post number two"},
    { id: 3, post: "blog post number three"},
]

function getComments() {
    return comments;
}

function getBlogPost(){
    return blogPosts;
}

function addChangeListener(callback) {}
function removeChangeListener(){}
module.exports = {
  getComments: getComments,
  addChangeListener: addChangeListener,
  removeChangeListener:removeChangeListener,
  getBlogPost:getBlogPost,
};
