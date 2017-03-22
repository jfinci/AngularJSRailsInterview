describe('OverviewController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('', function() {
    it('sets currently visible movie', function() {
      var controller = $controller('OverviewController', { $scope: $scope });
    });
  });
});