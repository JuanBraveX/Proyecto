<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
//$router->group(['middleware'=>['cors']], function() use($router){
        $router->get('/login/{id}/{password}', 'AuthController@login');
        $router->post('/instructores', 'InstructorController@create');
        $router->get('/instructores', 'InstructorController@index');
    //});
    
    $router->group(['middleware'=>['auth', 'cors']], function() use($router){
        $router->get('/alumnos', 'AlumnoController@index');
        $router->get('/alumnos/{id}', 'AlumnoController@get');
        $router->post('/alumnos', 'AlumnoController@create');
        $router->put('/alumnos/{id}', 'AlumnoController@update');
        $router->delete('/alumnos/{id}', 'AlumnoController@destroy');

        
        $router->get('/instructores/{id}', 'InstructorController@get');
       
        $router->put('/instructores/{id}', 'InstructorController@update');
        $router->delete('/instructores/{id}', 'InstructorController@destroy');
        
    
        $router->get('/topic', 'TopicController@index');
        $router->get('/topic/{id}', 'TopicController@get');
        $router->post('/topic', 'TopicController@create');
        $router->put('/topic/{id}', 'TopicController@update');
        $router->delete('/topic/{id}', 'TopicController@destroy');
    
        $router->get('/post', 'PostController@index');
        $router->get('/post/{id_topic}', 'PostController@get');
        $router->post('/post', 'PostController@create');
        $router->put('/post/{id}', 'PostController@update');
        $router->delete('/post/{id}', 'PostController@destroy');
}
);
    