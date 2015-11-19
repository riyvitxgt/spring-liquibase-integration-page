/**
 * Created by zhukm on 2015/11/19.
 */
var tables = [];
angular.module('DBApp',[])
  .controller('TableListController', function($scope){
  $scope.tables = tables;
   /*[
    {
      "tableName":"NotTextAnnouncement",
      "id":2
    },
    {
      "tableName":"MF_NotTextAnnouncement",
      "id":3
    },
    {
      "tableName":"SF_NotTextAnnouncement",
      "id":4
    },
    {
      "tableName":"LC_NotTextAnnouncement",
      "id":5
    }
  ];*/
  }).controller('getTables', function($scope,$http){
    var data = {
      dbType: $scope.dbType,
      ip: $scope.ip,
      dbName: $scope.dbName,
      port: $scope.port
    };
    //console.log(data.dbName);
    $scope.getTableList = function(){
      $http.post("/3", data).success().error();
    }
  });
