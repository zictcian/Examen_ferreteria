'use strict'
const Inventario = use('App/Models/Inventario');
const Ferreteria = use('App/Models/Ferreteria');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with inventarios
 */
class FerreteriaController {
  /**
   * Show a list of all inventarios.
   * GET inventarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let ferreteria= await Ferreteria.query().with('inventario').fetch();
    return response.json(ferreteria.toJSON());
  }

  /**
   * Render a form to be used for creating a new inventario.
   * GET inventarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let ferreteria=await Ferreteria.all();
    return view.render('calificaciones.create',{ferreteria:ferreteria.toJSON()});
    //innecesario
  }

  /**
   * Create/save a new inventario.
   * POST inventarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Ferreteria.create(request.all());
    return response.json('provedor ingresado');
  }

  /**
   * Display a single inventario.
   * GET inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let ferreteria = await Ferreteria.find(params.id);
    return response.json(ferreteria.toJSON());
  }

  /**
   * Render a form to update an existing inventario.
   * GET inventarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let ferreteria = await Ferreteria.find(params.id);
    return view.render('calificaciones.edit',{ferreteria:ferreteria.toJSON()});
  }

  /**
   * Update inventario details.
   * PUT or PATCH inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let ferreteria = await Ferreteria.find(params.id);
    ferreteria.merge(request.all());
    await ferreteria.save();
    return response.json('provedor actualizado');
  }

  /**
   * Delete a inventario with id.
   * DELETE inventarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let ferreteria = await Ferreteria.find(params.id);
    ferreteria.delete();
    return response.json('provedor eliminado');
  }
}

module.exports = FerreteriaController