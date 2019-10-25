'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.timestamps()
      table.string('codigo');
      table.string('producto');
      table.integer('precio');
      table.integer('stock');
      table.string('marca');
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
