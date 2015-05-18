class MainController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    let vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = <%= new Date().getTime() %>;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(() => {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, (awesomeThing) => {
        awesomeThing.rank = Math.random();
      });
    }
  }
}

export default MainController;
