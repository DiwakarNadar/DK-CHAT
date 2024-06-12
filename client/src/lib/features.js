import moment from "moment";

 const fileFormat=(url="")=>
    {
        const fileExtension= url.split(".").pop();

        if(fileExtension==="mp4" || fileExtension==="webm" || fileExtension==="ogg")
            {
                return "video";
            }
        if(fileExtension==="mp3" || fileExtension==="wav" )
        {
                    return "audio";
        }
        if(fileExtension==="jpg" || fileExtension==="jpeg" || fileExtension==="png" || fileExtension==="gif")
            {
                return "image";
            }

        return "file";
    }   

const transformImageUrl=(url="")=>
    {
        return url;
    }

const getLastsevendays=()=>{
    const currentDate=moment();
    const sevenDaysAgo=[];

    for(let i=0;i<7;i++)
    {
        const day=currentDate.clone().subtract(i,"days");
        sevenDaysAgo.unshift(day.format("MMM DD"));
    }
    return sevenDaysAgo;
}

export {fileFormat,transformImageUrl,getLastsevendays}