import templateURL from './sidebar.directive.tpl.html';
import './style.scss';

export default class SideMenu {
  
  constructor($interval){
    this.template = templateURL;
    this.$interval = $interval;
  }
                
};
