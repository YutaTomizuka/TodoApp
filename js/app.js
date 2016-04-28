function mainCtrl($filter)
{


    // 全て完了/未了
    this.checkAll = function ()
    {
        var state = true;
        // 未了にするのか完了にするのかの判定
        if (this.todos.length - this.getDoneCount() === 0 ) {
            state = false;
        }
        angular.forEach(this.todos, function (todo)
        {
            todo.done = state;
        });
    };
    // 完了した ToDo を全て削除
    this.removeDoneTodo = function ()
    {
        this.todos = where(this.todos, this.filter.remaining);
    };
    // 任意の ToDo を削除
    this.removeTodo = function (currentTodo)
    {
        this.todos = where(this.todos, function (todo)
        {
            return currentTodo !== todo;
        });
    };
}
function select()
{
    return function (scope, $el, attrs)
    {
        // scope - 現在の $scope オブジェクト
        // $el   - jqLite オブジェクト(jQuery ライクオブジェクト)
        //         jQuery 使用時なら jQuery オブジェクト
        // attrs - DOM 属性のハッシュ(属性名は正規化されている)
        scope.$watch(attrs.mySelect, function (val)
        {
            if (val) {
                $el[0].select();
            }
        });
    };
}
