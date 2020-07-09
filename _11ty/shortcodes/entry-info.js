
module.exports = function(postDate) {
    let posted_on = `<span class="posted-on">${postDate}</span>`;  
  // returning an array in addCollection works in Eleventy 0.5.3
  return posted_on;
};
