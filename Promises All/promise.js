console.log("hello world!");
const posts=[{title:"POST1", createdAt:new Date()},
{title:"POST2", createdAt:new Date()}];

function createPost(post){
  return new Promise((resolve, reject)=>{
   posts.push(post);
console.log(`User was last active at ${posts[posts.length-1].createdAt}`)
resolve();
  })
}
function displayPost(){
  return new Promise ((resolve, reject)=>{
  posts.forEach((post)=>{
    console.log(`${post.title} created on- ${post.createdAt}`);
    resolve();
  })
})
}

function updateLastUserActivityTime(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
     let lastActiveTime= new Date().getTime();
console.log(`User's last activity time is ${lastActiveTime}`);
      resolve();
    },1000)
  })
}

function deletePost(){
  return new Promise((resolve, reject) =>{
    if(posts.length>0){
      let deletedPost=posts.pop();
      resolve(deletedPost);
    }
    else if(posts.length===0){
      reject("ERROR");
      }
  })
}

Promise.all([createPost({title:"POST3", createdAt:new Date()}), updateLastUserActivityTime()]).then(()=>{
  displayPost().then(()=>{
    deletePost().then((deletePosts)=>{
      console.log(`Deleted post- ${deletePosts.title}`);
      displayPost()
        })
      })
    })
  


