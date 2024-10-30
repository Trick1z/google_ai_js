function PageNavigator() {
    this.List = function () {
      return  window.location.href = '../../index.html'
    }

    this.AboutUs = function () {
        return window.location.href = "#"; // Change this to your desired path
    }
}

const navigator = new PageNavigator();
