function timeToAgo(timeStamp){
const seconds = Math.floor((Date.now() - timeStamp)/1000);
if(seconds < 60 ) return `${seconds} seconds ago`
const mins = Math.floor(seconds/60);
if(mins<60) return `${mins} mins ago`;
const hours = Math.floor(mins/60);
if(hours < 24) return `${hours} hours ago`
const days = Math.floor(hours/24);
 return `${days} days ago`
}

console.log(timeToAgo(Date.now() - 3*60*1000)); //3 mins ago