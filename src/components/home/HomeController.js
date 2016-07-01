import image from './image1.jpg';
import smallImage from './small.jpg';
export default [
  '$state',
  class HomeController {

    constructor($st){
      this.message = 'Home';
      this._image = image;
      this._smallImage = smallImage;
      this.st = $st;
    }

    goToLeave() {
      this.st.go('leave');
    }

    loadPets() {
      //Do an API call
    }

}];
