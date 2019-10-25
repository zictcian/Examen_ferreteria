'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('inventario','InventarioController.index');
Route.get('inventario/ver/:id','InventarioController.show');
Route.get('inventario/eliminar/:id','InventarioController.destroy');
Route.get('inventario/crear','InventarioController.create');
Route.get('inventario/editar/:id','InventarioController.edit');
Route.post('inventario/crear','InventarioController.store');
Route.post('inventario/editar/:id','InventarioController.update');

Route.get('ferreteria','FerreteriaController.index');
Route.get('ferreteria/ver/:id','FerreteriaController.show');
Route.get('ferreteria/eliminar/:id','FerreteriaController.destroy');
Route.get('ferreteria/crear','FerreteriaController.create');
Route.get('ferreteria/editar/:id','FerreteriaController.edit');
Route.post('ferreteria/crear','FerreteriaController.store');
Route.post('ferreteria/editar/:id','FerreteriaController.update');

Route.on('/').render('welcome');
