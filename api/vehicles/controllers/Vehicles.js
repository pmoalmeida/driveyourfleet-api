'use strict';

/**
 * Vehicles.js controller
 *
 * @description: A set of functions called "actions" for managing `Vehicles`.
 */

module.exports = {

  /**
   * Retrieve vehicles records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.vehicles.search(ctx.query);
    } else {
      return strapi.services.vehicles.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a vehicles record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.vehicles.fetch(ctx.params);
  },

  /**
   * Count vehicles records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.vehicles.count(ctx.query);
  },

  /**
   * Create a/an vehicles record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.vehicles.add(ctx.request.body);
  },

  /**
   * Update a/an vehicles record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.vehicles.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an vehicles record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.vehicles.remove(ctx.params);
  }
};
