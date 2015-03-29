app.directive('toHex', function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, ele, attr, ctrl) {

            if (!ctrl) return;

            var hexadecimalParse = function (value) {
                return value;
            }

            var hexadecimalFormat = function (value) {

                var numbers = value.replace(/-/gmi, "");

                if (value.length % 3 === 0) {
                    return numbers.replace(/([0-9A-Za-z]{2})/g, "$1-");
                }
            }

            ctrl.$parsers.push(hexadecimalParse);
            ctrl.$formatters.push(hexadecimalFormat);

            ele.on('input', function () {

                var value = hexadecimalFormat(ele.val());
                if (value !== undefined) {
                    ctrl.$setViewValue(value);
                    ctrl.$render();
                }
                scope.$apply();
            });
        }
    };
});
