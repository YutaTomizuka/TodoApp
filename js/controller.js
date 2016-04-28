angular.module('app')
.controller('TodoHeaderController', function(){
  // 現在のフィルタの状態モデル
  this.currentFilter = null;
  // フィルタリング条件を変更するメソッド
  this.changeFilter = function (filter)
  {
      this.currentFilter = filter;
  };
  // 編集前の要件
  var originalTitle = "";
  // 編集モードの ToDo モデルを表すモデル
  this.editing = null;
  this.editTodo = function (todo)
  {
      originalTitle = todo.title;
      this.editing = todo;
  };
  this.doneEdit = function (todoForm)
  {
      if (todoForm.$invalid) {
          this.editing.title = originalTitle;
      }
      this.editing = null;
  };
})

.controller('RegisterController', [function(){}])
.controller('ToolbarController', [function(){}])
.controller('TodoListController', [function(){}]);
