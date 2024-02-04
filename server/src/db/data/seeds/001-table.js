/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todo').del();

  // Inserts seed entries
  await knex('todo').insert([
    { description: 'Task 1' },
    { description: 'Task 2' },
    { description: 'Task 3' }
  ]);
};