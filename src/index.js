// async function getArticles(){
//     const responce = await fetch('code-test.json');
//     const articles_obj = await responce.json();
//     let article = "";
//     articles_obj.articles.forEach((i)=>{
//       article+=`<div class="articleCard"> <div><a class="custmlink" href="${i.link}"> ${i.primarySectionRouteName}</a><h2 class="heading">${i.headline}</h2><p class="discription">${i.standfirst}</P></div><div><img src="${i.thumbnail.src}" width="${i.thumbnail.width}" height="${i.thumbnail.height}"></div></div><hr>`
//     })
//     document.getElementById("articWidget").innerHTML = article;
// }
window.onload = async function() {
    const responce = await fetch('code-test.json');
    const articles_obj = await responce.json();
    let article = "";
    articles_obj.articles.forEach((i)=>{
      article+=`<div class="articleCard"> <div><a class="custmlink" href="${i.link}"> ${i.primarySectionRouteName}</a><h2 class="heading">${i.headline}</h2><p class="discription">${i.standfirst}</P></div><div><img src="${i.thumbnail.src}" width="${i.thumbnail.width}" height="${i.thumbnail.height}"></div></div><hr>`
    })
    document.getElementById("articWidget").innerHTML = article;
  };