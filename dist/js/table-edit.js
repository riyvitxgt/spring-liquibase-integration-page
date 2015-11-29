/**
 * Created by king on 2015/11/28.
 */
$(function(){
});

function removeColumn(){
  var deleteTrs = $("#table-content table tbody .selectBox:checked");
  $("#table-content #index-detail").removeClass("active");
  $("#table-content #table-detail").addClass("active");
  $("#table-detail-triggle").addClass("active");
  $("#index-detail-triggle").removeClass("active");
  if(deleteTrs.size() == 0){
    alert("请选择要删除的行");
  }else{
    deleteTrs.each(function(){
      $(this).parent().parent().remove();
    })
  }
}

function addColumn(){
  $("#table-content #index-detail").removeClass("active");
  $("#table-content #table-detail").addClass("active");
  $("#table-detail-triggle").addClass("active");
  $("#index-detail-triggle").removeClass("active");
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

  $("#table-detail table tbody").append(trHtml);
}

function removeIndex(){
  $("#table-content #table-detail").removeClass("active");
  $("#table-content #index-detail").addClass("active");
  $("#index-detail-triggle").addClass("active");
  $("#table-detail-triggle").removeClass("active");
  var deleteTrs = $("#index-detail table tbody .selectBox:checked");
  if(deleteTrs.size() == 0){
    alert("请选择要删除的行");
  }else{
    deleteTrs.each(function(){
      $(this).parent().parent().remove();
    })
  }
}

function addIndex(){
  $("#table-content #table-detail").removeClass("active");
  $("#table-content #index-detail").addClass("active");
  $("#index-detail-triggle").addClass("active");
  $("#table-detail-triggle").removeClass("active");
  var trHtml ='<tr>' +
  '<td><input class="selectBox" type="checkbox"/></td>' +
    '<td><input type="text"/></td>' +
    '<td><input type="text"/></td>' +
    '<td>' +
    '<select>' +
    '<option>Unique</option>' +
    '<option>Normal</option>' +
    '<option>Full Text</option>' +
  '</select>' +
  '</td>' +
  '<td><input type="checkbox"/></td>' +
    '</tr>';

  $("#index-detail table tbody").append(trHtml);
}
