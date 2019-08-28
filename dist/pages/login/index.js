define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Index = (function () {
        function Index() {
            this.food = [
                { id: 0, name: "Pizza", count: 1 },
                { id: 1, name: "Cake", count: 3 },
                { id: 2, name: "Steak", count: 6 },
                { id: 3, name: "Pasta", count: 2 },
                { id: 4, name: "Fries", count: 7 }
            ];
            this.selectedMeal = null;
        }
        return Index;
    }());
    exports.Index = Index;
});

//# sourceMappingURL=index.js.map
