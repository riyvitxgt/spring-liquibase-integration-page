/**
 * Created by king on 2015/11/28.
 */
$(function(){
});

function removeColumn(){
  var deleteTrs = $("#table-content table tbody .selectBox:checked");
  if(deleteTrs.size() == 0){
    alert("请选择要删除的行");
  }else{
    deleteTrs.each(function(){
      $(this).parent().parent().remove();
    })
  }
}

function addColumn(){
  var trHtml = '<tr>' +
    '<td><input class="selectBox" type="checkbox"></td>' +
    '<td><input type="text"/></td>' +
    '<td>' +
    '<select>' +
    '<option value="int">int</option>' +
    '<option value="float">float</option>' +
    '<option value="varchar">varchar</option>' +
    '<option value="date">date</option>' +
    '<option value="datatime">datetime</option>' +
    '</select>' +
    '</td>' +
    '<td><input type="number"/></td>' +
    '<td><input type="number"/></td>' +
    '<td><input type="checkbox"/></td>' +
    '<td><input type="checkbox"/></td>' +
    '<td><input type="text"/></td>' +
    '</tr>';

  $("#table-content table tbody").append(trHtml);
}
