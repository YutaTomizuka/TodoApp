angular.module('app')
.service('todos', ['$filter', function ($filter) {
  var todos = []; // ToDo リスト

  var where = $filter('filter');

  // リストが扱えるフィルタリング条件
  this.filter = {
    done: {
      done: true
    },
    remaining: {
      done: false
    }
  };

  // 完了状態の ToDo のみを抽出して返す
  this.getDone = function () {
    return where(todos, this.filter.done);
  };

  // 要件を受け取り新しい ToDo をリストに加える
  this.add = function (title) {
    todos.push({
      title: title,
      done: false
    });
  };

  // 引数の ToDo をリストから取り除く
  this.remove = function (currentTodo) {
    todos = where(list, function (todo) {
      return currentTodo !== todo;
    });
  };

  // 完了状態の ToDo をリストから取り除く
  this.removeDone = function () {
    todos = where(list, this.filter.remaining);
  };

  // リスト内の ToDo すべての状態を引数に合わせる
  this.changeState = function (state) {
    angular.forEach(todos, function (todo) {
      todo.done = state;
    });
  };
}])

.run(['$rootScope', 'todos', function($rootScope, todos){
  $rootScope.todos = todos;
}]);
