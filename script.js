function PageNavigator() {

    this.ObjectDetection = function() {
        return  window.location.href = "./Pages/objectdetection/index.html"; 
    }

    this.ImageSegmentation = function() {
        return  window.location.href = "./Pages/imageSegmentation/index.html"; 
    }
    this.InteractiveImageSegmentation = function() {
        return  window.location.href = "./Pages/InteractiveImageSegmentation/index.html"; 
    }
    this.HandLandmarksDetection = function() {
        return  window.location.href = "./Pages/HandLandmarksDetection/index.html"; 
    }
    this.PoseLandmarkDetection = function() {
        return  window.location.href = "./Pages/PoseLandmarkDetection/index.html"; 
    }

    this.List = function() {
        return  window.location.href = "#"; 
    }

    this.AboutUs = function() {
        return  window.location.href = "./Pages/AboutUs/index.html"; 
    }
}

const navigator = new PageNavigator();
