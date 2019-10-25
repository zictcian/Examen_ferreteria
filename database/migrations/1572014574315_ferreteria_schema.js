'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FerreteriaSchema extends Schema {
  up () {
    this.create('ferreterias', (table) => {
      table.increments()
      table.timestamps()
      table.string('provedor');
      table.integer('idInventario').unsigned().references('id').inTable('inventario');
    })
  }

  down () {
    this.drop('ferreterias')
  }
}

module.exports = FerreteriaSchema
