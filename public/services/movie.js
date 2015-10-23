angular.module('movie')
	.factory('Movie',function($resource){
		return $resource('/api/movies/:id',{},{
			update: {
				method: 'PUT',
				params: {id: '@_id'}
			},
			get:{
				params: {id: '@_id'}
			},
			delete: {
				method: 'DELETE',
				params: {id: '@_id'}
			}
		});
	})