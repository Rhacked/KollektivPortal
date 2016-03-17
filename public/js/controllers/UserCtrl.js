angular.module('UserCtrl', []).controller('UserController', function($scope, $http){
    $scope.hei = 'Hei!';
    $scope.formData = {};
   
    $http.get('/api/users')
        .success(function(data){
            $scope.users = data;
            console.log(data);
    })
        .error(function(data){
            console.log('Error: '+data);
    });
    
    $scope.createUser = function(){
        $http.post('/api/users', $scope.formData)
            .success(function(data){
                $scope.formData = {};
                $scope.users = data;
                location.reload();
                console.log(data);
        })
            .error(function(data){
                console.log('Error: '+data);
        });
    };
    
    $scope.deleteUser = function(id){
        $http.delete('/api/users/'+id)
            .success(function(data){
                $scope.users = data;
                console.log('User with id '+id+' deleted from database');
        })
            .error(function(data){
                console.log('Error: '+data);
        });
    };
    
    
});