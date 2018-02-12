(function(window, angular, undefined) {
  'use strict';
  angular.module('promiseButton', [])
    .provider('promiseButton', function() {

      function _setClickCallback(callBackFn) {
        this.clickCallBack = callBackFn;
      }

      function getFunction() {
        return {
          setClickCallback: _setClickCallback
        }
      };

      return {
        $get: getFunction,
        setClickCallback: _setClickCallback
      }
    };)
    .directive('promiseClick', ['promiseButton', function(promiseButton) {
      return {
        restrict: 'A',
        scope: {
          promiseClick: '&promiseClick',
          busyText: '@busyText',
          ngDisabled: '=?ngDisabled',
          hidePercentage: '=?hidePercentage'
        },
        link: function(scope, element, attrs) {
          //Getting callBackFn from app config
          var callBackFn = promiseButton.clickCallBack;

          function updateUI(isBusy, msg) {
            if (isBusy == true) {
              element.attr('disabled', 'disabled');
            } else {
              element.attr('disabled', null);
            }
            element.text(msg);
          }

          element.bind('click', function(e) {
            scope.isBusy = true;
            var elemText = element.text().toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
            elemText = elemText.replace(/ /g, '');
            scope.busyText = scope.busyText || "Updating";
            updateUI(true, scope.busyText);

            if (callBackFn) {
              callBackFn(attrs.buttonaction, elemText);
            }

            var promise = scope.promiseClick();

            if (promise == true) {
              updateUI(false, elemText);
            } else {
              promise.then(function(d) {
                updateUI(false, elemText);
              }, function(error) {
                updateUI(false, elemText);
              }, function(evt) {
                if (!scope.hidePercentage) {
                  var percentage = parseInt(100.0 * evt.loaded / evt.total);
                  updateUI(true, scope.busyText + ' ' + percentage + '%');
                }

              });
            }

          });
        }
      };
    };])



})(window, window.angular);