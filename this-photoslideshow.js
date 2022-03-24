const photoSlideShow = {
    photoList: ["photo1", "photo2", "photo3"],
    currentPhotoIndex: 0,
    nextPhoto: function () 
    {
        if (this.currentPhotoIndex < this.photoList.length -1) 
        {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } 
        else 
        {
            console.log("End of slideshow.");
        }
    },
    prevPhoto: function ()
    {
        if (this.currentPhotoIndex > 0)
        {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
        else
        {
            console.log("End of slideshow.");
        }
    },
    getCurrentPhoto: function ()
    {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}